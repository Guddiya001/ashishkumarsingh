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
  const emailJsService = process.env.EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplate = process.env.EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJsKey = process.env.EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;

  if (emailJsService && emailJsTemplate && emailJsKey) {
    try {
      const emailJsRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailJsService,
          template_id: emailJsTemplate,
          user_id: emailJsKey,
          template_params: {
            name: name.trim(),
            from_name: name.trim(),
            email: email.trim(),
            from_email: email.trim(),
            reply_to: email.trim(),
            message: message.trim(),
            to_name: 'Ashish Kumar Singh',
            to_email: process.env.CONTACT_TO || 'mailto.ashishsingh01@gmail.com',
          },
        }),
      });

      if (emailJsRes.ok) {
        return res.json({ success: true, message: 'Message sent successfully.' });
      }
      const errText = await emailJsRes.text().catch(() => '');
      console.error('EmailJS backend send failed:', errText);
      return res.status(500).json({ success: false, message: `Email delivery failed: ${errText || 'Service error'}` });
    } catch (error) {
      console.error('EmailJS backend error:', error);
      return res.status(500).json({ success: false, message: 'Unable to send message via EmailJS.' });
    }
  }

  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
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
  }

  return res.status(503).json({ success: false, message: 'Email is not configured. Please contact through LinkedIn.' });
});

app.listen(PORT, () => {
  console.log(`Portfolio backend listening on port ${PORT}`);
});
