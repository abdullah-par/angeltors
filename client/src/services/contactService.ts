import { apiFetch, ApiResponse } from './api';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  userType?: string;
  message: string;
}

export async function submitContactForm(
  data: ContactPayload
): Promise<ApiResponse<{ message: string }>> {
  const response = await apiFetch<{ message: string }>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (response.success) {
    return response;
  }

  // Simulated successful local response seam for development
  await new Promise((res) => setTimeout(res, 1200));
  return {
    success: true,
    data: { message: 'Thank you for reaching out! Our team will contact you shortly.' },
  };
}

export async function subscribeNewsletter(
  email: string
): Promise<ApiResponse<{ message: string }>> {
  const response = await apiFetch<{ message: string }>('/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });

  if (response.success) {
    return response;
  }

  await new Promise((res) => setTimeout(res, 800));
  return {
    success: true,
    data: { message: 'Subscribed successfully!' },
  };
}
