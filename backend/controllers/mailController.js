import asyncHandler from "express-async-handler";
import Email from "../models/mailModel.js";

// @desc    List of user emails
// @route   GET /api/emails
// @access  Private
const getUserEmails = asyncHandler(async (req, res) => {
  const itemsPerPage = 5;
  const startPage = req.query.page || 1;

  const result = await Email.aggregate([
    { $match: { user: req.user._id } },
    { $group: { _id: null, totalEmails: { $sum: 1 } } },
  ]).exec();

  const totalEmails = result.length > 0 ? result[0].totalEmails : 0;
  const emails = await Email.find({ user: req.user._id })
    .skip(itemsPerPage * startPage - itemsPerPage)
    .limit(itemsPerPage)
    .exec();
  const count = await Email.countDocuments({ user: req.user._id });

  const response = {
    data: emails,
    totalEmails,
    total: count,
    success: true,
    itemsPerPage,
    startPage,
    lastPage: Math.ceil(count / itemsPerPage),
  };

  res.status(200).json(response);
});

// @desc    Create an email
// @route   POST /api/emails
// @access  Private - User
const createEmail = asyncHandler(async (req, res) => {
  const { subject, content, isImportant, type, from, attachments } = req.body;

  if (!subject || !content || !type || !from || !from.name || !from.email) {
    res.status(400);
    throw new Error("All required fields must be filled");
  }

  const email = await Email.create({
    subject,
    content,
    isImportant,
    type,
    from,
    attachments,
    user: req.user._id,
  });

  if (email) {
    res.status(201).json(email);
  } else {
    res.status(400);
    throw new Error("Invalid email data");
  }
});

// @desc    Delete existing email
// @route   DELETE /api/emails/:id
// @access  Private - Admin or User
const deleteEmail = asyncHandler(async (req, res) => {
  const email = await Email.findById(req.params.id);

  if (
    email.user.toString() !== req.user._id.toString() &&
    req.user.isAdmin === false
  ) {
    res.status(403);
    throw new Error("Only email owner or admin can delete email");
  }

  if (email) {
    await Email.deleteOne({
      _id: req.params.id,
      user: req.user._id,
    });
    res.json({ message: "Email removed" });
  } else {
    res.status(404);
    throw new Error("Email not found");
  }
});

// @desc    Get existing email
// @route   GET /api/emails/:id
// @access  Private - User or Admin
const getEmail = asyncHandler(async (req, res) => {
  const email = await Email.findById(req.params.id);

  if (
    email.user.toString() !== req.user._id.toString() &&
    req.user.isAdmin === false
  ) {
    res.status(403);
    throw new Error("Only email owner and admin can view emails");
  }

  if (email) {
    res.json(email);
  } else {
    res.status(404);
    throw new Error("Email not found");
  }
});

export {
  getUserEmails,
  createEmail,
  deleteEmail,
  getEmail,
};
