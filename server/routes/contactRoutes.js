const express = require('express');
const axios = require('axios');
const router = express.Router();
const Message = require('../models/Message');

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message, captcha } = req.body;

  // Validate captcha token exists
  if (!captcha) {
    return res.status(400).json({ success: false, message: 'Captcha not verified' });
  }

  try {
    // Verify the token with Google
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

    // Save message if captcha was valid
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: 'Message sent successfully' });

  } catch (error) {
    console.error('Error during message submission or captcha verification:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
