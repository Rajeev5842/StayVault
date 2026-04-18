import Enquiry from "../models/Enquiry.model.js";
import { sendEnquiryNotification } from "../utils/mailer.js";

// POST /api/enquiries
export const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "Please fill all required fields." });
    }

    // Save to DB
    const enquiry = await Enquiry.create({ name, email, phone, subject, message });

    // Send email notification (non-blocking — don't fail the request if email fails)
    sendEnquiryNotification(enquiry).catch((err) =>
      console.error("⚠️  Email notification failed:", err.message)
    );

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      data: enquiry,
    });
  } catch (error) {
    console.error("createEnquiry error:", error);
    return res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
};

// GET /api/enquiries  (for your future admin panel)
export const getAllEnquiries = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const enquiries = await Enquiry.find(filter).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    console.error("getAllEnquiries error:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

// PATCH /api/enquiries/:id/status  (mark as replied / resolved)
export const updateEnquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!enquiry) return res.status(404).json({ success: false, message: "Enquiry not found." });
    return res.status(200).json({ success: true, data: enquiry });
  } catch (error) {
    console.error("updateEnquiryStatus error:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};