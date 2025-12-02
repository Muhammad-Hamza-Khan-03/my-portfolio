import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize Resend client with API key
  const resend = new Resend(process.env.RESEND_API_KEY);
 
  app.get("/api/health", async (_req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      message: "Server is awake" 
    });
  });
 
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);

      console.log("Contact form submission received:", {
        name: message.name,
        email: message.email,
        timestamp: message.createdAt,
      });

      // Send email using Resend
      const emailResponse = await resend.emails.send({
        from: "Website Contact <onboarding@resend.dev>", // your verified domain email
        to: "hamzakhan102003@gmail.com", // your inbox
        subject: `New Contact Message from ${message.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${message.name}</p>
          <p><strong>Email:</strong> ${message.email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.message}</p>
          <hr/>
          <p>Received on: ${new Date(message.createdAt).toLocaleString()}</p>
        `,
      });

      console.log("Resend email response:", emailResponse);

      res.json({
        success: true,
        message: "Your message has been received and emailed. Thank you!",
        id: message.id,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        console.error("Validation error:", error);
        res.status(400).json({
          success: false,
          message: "Invalid form data. Please check your inputs.",
        });
      } else {
        console.error("Server error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit message or send email. Please try again later.",
        });
      }
    }
  });

  app.get("/api/contact/messages", async (_req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
