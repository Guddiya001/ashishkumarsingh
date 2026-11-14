import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const CONTACT_EMAIL = 'mailto.ashishsingh01@gmail.com';

const createMailtoUrl = ({ name, email, message }) => {
  const subject = `Portfolio enquiry from ${name.trim()}`;
  const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'sending', message: 'Sending your message…' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 1. Primary: Use EmailJS directly from client if configured
    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            name: formData.name.trim(),
            from_name: formData.name.trim(),
            email: formData.email.trim(),
            from_email: formData.email.trim(),
            reply_to: formData.email.trim(),
            message: formData.message.trim(),
            to_name: 'Ashish Kumar Singh',
            to_email: CONTACT_EMAIL,
          },
          publicKey
        );
        setStatus({ type: 'success', message: 'Thanks for reaching out! Your message has been sent.' });
        setFormData({ name: '', email: '', message: '' });
        return;
      } catch (error) {
        console.error('EmailJS send error:', error);
        const errMsg = error?.text || error?.message || 'Email delivery failed';
        setStatus({
          type: 'error',
          message: `Email sending failed: ${errMsg}. Please verify your Template ID in https://dashboard.emailjs.com/admin/templates`,
        });
        return;
      }
    }

    // 2. Secondary: Fall back to backend /api/contact if available
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({}));
      if (response.ok && result.success) {
        setStatus({ type: 'success', message: 'Thanks for reaching out! Your message has been sent.' });
        setFormData({ name: '', email: '', message: '' });
        return;
      }
      throw new Error(result.message || 'The website email service is not available.');
    } catch {
      // 3. Graceful fallback: Open default email application prefilled
      setStatus({
        type: 'fallback',
        message: 'The website email service is unavailable. Your email app is opening with your message ready to send.',
      });
      window.location.href = createMailtoUrl(formData);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="page-container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">HAVE A ROLE OR A CHALLENGE?</p>
          <h2>Let&apos;s build<br /><span>something meaningful.</span></h2>
          <p>I&apos;m open to Senior Software Engineering, AI Engineering and Agentic AI opportunities. I&apos;m based in India, available to join immediately, and open to global remote roles or relocation.</p>
          <a className="contact-email-link" href={`mailto:${CONTACT_EMAIL}`}>
            <span className="contact-email-icon" aria-hidden="true">✉</span>
            <span><small>EMAIL ME DIRECTLY</small><strong>{CONTACT_EMAIL}</strong></span>
            <span className="contact-email-arrow" aria-hidden="true">↗</span>
          </a>
          <div className="contact-shortcuts">
            <a href="https://www.linkedin.com/in/ashish-kumar-singh1986/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href="https://github.com/Guddiya001" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-title"><span>01 / CONTACT</span><strong>Send me a message</strong></div>
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" type="text" name="name" autoComplete="name" placeholder="How should I address you?" value={formData.name} onChange={handleChange} required />
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" type="email" name="email" autoComplete="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about the opportunity…" value={formData.message} onChange={handleChange} required />
          <button className="button button-primary form-submit" type="submit" disabled={status.type === 'sending'}>
            {status.type === 'sending' ? 'Sending…' : 'Send message'} <span>↗</span>
          </button>
          {status.message && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}
          <p className="contact-form-note">If the form service is unavailable, your default email app will open with the message prefilled.</p>
        </form>
      </div>
    </section>
  );
}
