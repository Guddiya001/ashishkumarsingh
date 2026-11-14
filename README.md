# Ashish Kumar Singh — Engineering Portfolio

A React 18 + Vite portfolio highlighting enterprise software engineering, Generative AI, LLM applications, Agentic AI and healthcare technology engagements.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

The Vite dev server proxies `/api` requests to `http://localhost:5000`. To test email delivery locally, configure the email environment variables and start the optional backend in a second terminal:

```bash
cd backend
npm install
# Set EMAIL_USER, EMAIL_PASS and CONTACT_TO in your shell before starting the server.
npm start
```

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`. Deploy the project to Vercel using the Vite preset, `npm run build` as the build command, and `dist` as the output directory.

## Resume and cover letter downloads

The Hero section exposes downloadable PDF versions of the updated resume and general-purpose cover letter. Editable Word versions are also included in `public/downloads/`:

- `Ashish_Kumar_Singh_Resume.pdf` and `.docx`
- `Ashish_Kumar_Singh_Cover_Letter.pdf` and `.docx`

Replace these files with revised versions when employment details or targeting change.

## Contact form configuration

The "Send me a message" contact form supports client-side email delivery via **EmailJS** (recommended for React/Vite without requiring a running backend), as well as serverless / backend delivery via `api/contact.js`.

### 1. Client-Side Email Delivery (EmailJS — Recommended)
1. Sign up for free at [EmailJS](https://www.emailjs.com/) (up to 200 emails/month free).
2. Add an **Email Service** (e.g. Gmail) connected to `mailto.ashishsingh01@gmail.com` to get your **Service ID**.
3. Create an **Email Template** with variables `{{from_name}}`, `{{from_email}}`, `{{reply_to}}`, and `{{message}}` to get your **Template ID**.
4. In **Account > General**, find your **Public Key**.
5. Add these values to your local `.env` file (and in your Vercel Project Settings under Environment Variables):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

### 2. Server-side Email Delivery (Optional)
If EmailJS environment variables are not provided, the contact form falls back to `api/contact.js`:
- `EMAIL_USER` — Gmail account used to send messages
- `EMAIL_PASS` — Gmail app password (not your personal account password)
- `CONTACT_TO` — optional destination email; defaults to `mailto.ashishsingh01@gmail.com`

When neither service is configured, the form gracefully falls back to opening the visitor's default email application with the message prefilled via `mailto:`. Do not commit real email credentials to source control.

## Portfolio content

- Hero, About, expertise, project portfolio, experience and contact sections are under `src/components/`.
- Professional employment history and selected client engagements are shown separately in `src/components/Experience.jsx` so client work is not assigned unverified dates or employers.
- Project entries and repository URLs are maintained in `src/data/projects.js`.
- Downloadable documents are in `public/downloads/`.
- The profile photo is `public/profile.jpg`.

Update employment dates, project details and measurable outcomes only when they match verified work history and implementation experience.
