import emailjs from '@emailjs/browser';

export interface EmailPayload {
  name: string;
  email: string;
  message: string;
  company?: string;
  jobTitle?: string;
  phone?: string;
  source?: string;
  lang?: string;
}

export interface EmailResult {
  ok: boolean;
  error?: 'missing_endpoint' | 'request_failed';
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1d8zvn2';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_emv7stj';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'LGaAfXJpN_e8aGvU4';

export const sendContactEmail = async (payload: EmailPayload): Promise<EmailResult> => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    return { ok: false, error: 'missing_endpoint' };
  }

  try {
    const templateParams = {
      from_name: payload.name,
      from_email: payload.email,
      message: payload.message,
      company: payload.company || '',
      job_title: payload.jobTitle || '',
      phone: payload.phone || '',
      source: payload.source || 'website',
      lang: payload.lang || 'en'
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      { publicKey: EMAILJS_PUBLIC_KEY }
    );

    if (result.status >= 200 && result.status < 300) {
      return { ok: true };
    }

    return { ok: false, error: 'request_failed' };
  } catch {
    return { ok: false, error: 'request_failed' };
  }
};
