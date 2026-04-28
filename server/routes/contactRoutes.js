const express = require('express');
const axios = require('axios');
const router = express.Router();
const Message = require('../models/Message');
const rateLimit = require('express-rate-limit');
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

// Define Limiter
const contactLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 3, // limit each IP to 3 requests per window
  message: {
    success: false,
    message: 'Too many messages sent. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// POST /api/contact
router.post('/', contactLimiter, async (req, res) => {
  const { name, email, subject, message, captcha } = req.body;

  if (!captcha) {
    return res.status(400).json({ success: false, message: 'Captcha not verified' });
  }

  try {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

    const response = await axios.post(
      verifyUrl,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: captcha,
        },
      }
    );

    if (!response.data.success) {
      return res.status(400).json({ success: false, message: 'Failed captcha verification' });
    }

    // Save to MongoDB
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    // Send email with Resend API
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: subject || 'New Message from DevPortfolio',
      reply_to: email, // lets you reply directly to the user
      html: `
        <h2>New Message from DevPortfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({ success: true, message: 'Message sent successfully' });

  } catch (error) {
    console.error('Error during message submission:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
