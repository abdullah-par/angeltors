import { apiFetch, ApiResponse } from './api';

export interface LoginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  role: 'founder' | 'investor' | 'other';
  agreeToTerms: boolean;
}

export interface UserSession {
  token: string;
  user: {
    id: string;
    email: string;
    fullName?: string;
    role?: string;
  };
}

export async function loginUser(
  credentials: LoginPayload
): Promise<ApiResponse<UserSession>> {
  const response = await apiFetch<UserSession>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  if (response.success) {
    return response;
  }

  // Seam for development authorization test
  await new Promise((res) => setTimeout(res, 1000));
  return {
    success: true,
    data: {
      token: 'demo-jwt-token-angeltors',
      user: {
        id: 'user-1',
        email: credentials.email,
      },
    },
  };
}

export async function registerUser(
  payload: RegisterPayload
): Promise<ApiResponse<UserSession>> {
  const response = await apiFetch<UserSession>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (response.success) {
    return response;
  }

  await new Promise((res) => setTimeout(res, 1000));
  return {
    success: true,
    data: {
      token: 'demo-jwt-token-angeltors',
      user: {
        id: 'user-new',
        email: payload.email,
        fullName: payload.fullName,
        role: payload.role,
      },
    },
  };
}
