import { apiFetch, ApiResponse, USE_MOCK_FALLBACK } from './api';

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
  if (data.email.includes('fail500')) {
    await new Promise((res) => setTimeout(res, 500));
    return {
      success: false,
      error: 'Server error (500): Unable to process contact submission. Please try again later.',
    };
  }

  if (data.email.includes('timeout')) {
    await new Promise((res) => setTimeout(res, 8000));
    return {
      success: false,
      error: 'Request timed out. Please check your internet connection.',
    };
  }

  const response = await apiFetch<{ message: string }>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (response.success) {
    return response;
  }

  if (USE_MOCK_FALLBACK) {
    await new Promise((res) => setTimeout(res, 800));
    return {
      success: true,
      data: { message: 'Thank you for reaching out! Our team will contact you shortly.' },
    };
  }

  return response;
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

  if (USE_MOCK_FALLBACK) {
    await new Promise((res) => setTimeout(res, 800));
    return {
      success: true,
      data: { message: 'Subscribed successfully!' },
    };
  }

  return response;
}
