import nodemailer from 'nodemailer';

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

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

  // 1. Try EmailJS server-side if configured
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
        return res.status(200).json({ success: true, message: 'Message sent successfully.' });
      }
      const errText = await emailJsRes.text().catch(() => '');
      console.error('EmailJS serverless send failed:', errText);
      return res.status(500).json({ success: false, message: `Email delivery failed: ${errText || 'Service error'}` });
    } catch (error) {
      console.error('EmailJS serverless request error:', error);
      return res.status(500).json({ success: false, message: 'Unable to send message via EmailJS.' });
    }
  }

  // 2. Try Nodemailer if configured
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      });
      const safeName = escapeHtml(name.trim());
      const safeEmail = escapeHtml(email.trim());
      const safeMessage = escapeHtml(message.trim()).replace(/\r?\n/g, '<br>');

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_TO || 'mailto.ashishsingh01@gmail.com',
        replyTo: email.trim(),
        subject: `Portfolio contact from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
        html: `<h3>New portfolio message</h3><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong></p><p>${safeMessage}</p>`,
      });
      return res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } catch (error) {
      console.error('Portfolio contact email failed:', error);
      return res.status(500).json({ success: false, message: 'Unable to send the message right now.' });
    }
  }

  return res.status(503).json({
    success: false,
    message: 'Contact form email is not configured yet. Please connect through LinkedIn.',
  });
}
