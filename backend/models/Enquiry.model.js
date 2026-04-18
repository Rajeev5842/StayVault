import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    phone:   { type: String, trim: true, default: "" },
    subject: { type: String, required: true },
    message: { type: String, required: true, trim: true },
    status:  {
      type: String,
      enum: ["pending", "replied", "resolved"],
      default: "pending",
    },
  },
  { timestamps: true }   // adds createdAt & updatedAt automatically
);

export default mongoose.model("Enquiry", enquirySchema);