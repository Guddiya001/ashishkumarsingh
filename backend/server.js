const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (![name, email, message].every((value) => typeof value === 'string' && value.trim())) {
    return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
  }
  if (name.length > 120 || email.length > 254 || message.length > 5000) {
    return res.status(400).json({ success: false, message: 'Your message is too long.' });
  }
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(503).json({ success: false, message: 'Email is not configured. Please contact through LinkedIn.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_TO || 'mailto.ashishsingh01@gmail.com',
      replyTo: email.trim(),
      subject: `Portfolio contact from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });
    return res.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact email failed:', error);
    return res.status(500).json({ success: false, message: 'Unable to send the message right now.' });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio backend listening on port ${PORT}`);
});
