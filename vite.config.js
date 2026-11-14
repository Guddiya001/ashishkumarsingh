import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'dev-api-contact-middleware',
        configureServer(server) {
          server.middlewares.use('/api/contact', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: 'Method not allowed' }));
              return;
            }

            let body = '';
            req.on('data', (chunk) => { body += chunk; });
            req.on('end', async () => {
              try {
                const { name, email, message } = JSON.parse(body || '{}');
                const serviceId = env.EMAILJS_SERVICE_ID || env.VITE_EMAILJS_SERVICE_ID;
                const templateId = env.EMAILJS_TEMPLATE_ID || env.VITE_EMAILJS_TEMPLATE_ID;
                const publicKey = env.EMAILJS_PUBLIC_KEY || env.VITE_EMAILJS_PUBLIC_KEY;

                if (!serviceId || !templateId || !publicKey) {
                  res.statusCode = 503;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({
                    success: false,
                    message: 'Email service credentials not found in .env',
                  }));
                  return;
                }

                const emailJsRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Origin': 'http://localhost:5173',
                  },
                  body: JSON.stringify({
                    service_id: serviceId,
                    template_id: templateId,
                    user_id: publicKey,
                    template_params: {
                      name: (name || '').trim(),
                      from_name: (name || '').trim(),
                      email: (email || '').trim(),
                      from_email: (email || '').trim(),
                      reply_to: (email || '').trim(),
                      message: (message || '').trim(),
                      to_name: 'Ashish Kumar Singh',
                      to_email: env.CONTACT_TO || 'mailto.ashishsingh01@gmail.com',
                    },
                  }),
                });

                if (emailJsRes.ok) {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, message: 'Message sent successfully.' }));
                  return;
                }

                const errText = await emailJsRes.text().catch(() => '');
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: false,
                  message: `Email delivery failed: ${errText || 'Service error'}`,
                }));
              } catch {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, message: 'Internal server error processing email' }));
              }
            });
          });
        },
      },
    ],
    base: '/',
  };
});
