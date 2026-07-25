import { apiFetch, USE_MOCK_FALLBACK } from './api';

export interface PlatformMetric {
  id: string;
  label: string;
  val: string;
  iconName: 'Sparkles' | 'Users' | 'TrendingUp' | 'ShieldCheck';
}

const DEFAULT_METRICS: PlatformMetric[] = [
  { id: 'startup_access', label: 'Curated Startup Access', val: 'Top 1%', iconName: 'Sparkles' },
  { id: 'active_investors', label: 'Active Investors', val: '500+', iconName: 'Users' },
  { id: 'avg_irr', label: 'Average Deal IRR', val: '32%+', iconName: 'TrendingUp' },
  { id: 'due_diligence', label: 'Structured Due Diligence', val: '100%', iconName: 'ShieldCheck' },
];

export async function fetchPlatformMetrics(shouldFail = false): Promise<PlatformMetric[]> {
  if (shouldFail) {
    throw new Error('Failed to reach metrics API server. Please check your internet connection.');
  }

  try {
    if (USE_MOCK_FALLBACK) {
      // Simulating network fetch latency
      return await new Promise((resolve) => {
        setTimeout(() => resolve(DEFAULT_METRICS), 300);
      });
    }

    const response = await apiFetch<PlatformMetric[]>('/metrics');
    if (response.success && response.data && response.data.length > 0) {
      return response.data;
    }

    return DEFAULT_METRICS;
  } catch (err) {
    console.error('Error in fetchPlatformMetrics:', err);
    throw err;
  }
}
