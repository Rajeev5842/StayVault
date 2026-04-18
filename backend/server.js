import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import enquiryRoutes from "./routes/enquiry.routes.js";

dotenv.config();

const app = express();

// app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5174" }));


app.use(cors());
app.use(express.json());

// Routes
app.use("/api/enquiries", enquiryRoutes);

// Health check
app.get("/", (req, res) => res.json({ message: "Hotel API running 🏨" }));

// DB + Server 
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("❌ DB connection failed:", err));