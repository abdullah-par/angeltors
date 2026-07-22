// Central API Service Client
// Configured with environment variable base URL, headers, and request handling seams.

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.angeltors.com/v1';

export const USE_MOCK_FALLBACK =
  import.meta.env.DEV || import.meta.env.VITE_USE_MOCK_API === 'true';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message || `Request failed with status ${response.status}`,
      };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (err: any) {
    return {
      success: false,
      error: err.message || 'Network request failed. Please try again.',
    };
  }
}
