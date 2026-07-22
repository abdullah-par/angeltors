import { apiFetch, USE_MOCK_FALLBACK } from './api';
import { mockBlogs } from '@/features/blog/data/blogs';
import { BlogPost } from '@/features/blog/types/blog';

export async function fetchBlogPosts(category?: string): Promise<BlogPost[]> {
  const response = await apiFetch<BlogPost[]>(`/blogs${category ? `?category=${category}` : ''}`);

  if (response.success && response.data) {
    return response.data;
  }

  if (USE_MOCK_FALLBACK) {
    if (!category || category.toLowerCase() === 'all') {
      return mockBlogs;
    }

    return mockBlogs.filter(
      (b: BlogPost) =>
        b.category.name.toLowerCase() === category.toLowerCase() ||
        b.category.slug.toLowerCase() === category.toLowerCase()
    );
  }

  return [];
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await apiFetch<BlogPost>(`/blogs/${slug}`);

  if (response.success && response.data) {
    return response.data;
  }

  if (USE_MOCK_FALLBACK) {
    const found = mockBlogs.find((b: BlogPost) => b.slug === slug);
    return found || null;
  }

  return null;
}
