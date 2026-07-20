// ---------------------------------------------------------------------------
// Content Block Types — for structured blog post body (backend-ready)
// ---------------------------------------------------------------------------

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface HeadingBlock {
  type: "heading";
  text: string;
}

export interface ListBlock {
  type: "list";
  items: string[];
}

export interface TableBlock {
  type: "table";
  headers: string[];
  rows: string[][];
}

export type ContentBlock = ParagraphBlock | HeadingBlock | ListBlock | TableBlock;

// ---------------------------------------------------------------------------
// Category
// ---------------------------------------------------------------------------

export interface Category {
  id: string;
  name: string;
  slug: string;
}

// ---------------------------------------------------------------------------
// Blog Post — mirrors the backend data model
// ---------------------------------------------------------------------------

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;

  /**
   * Structured content blocks — rendered by ContentRenderer.
   * When backend is integrated, this array comes directly from the DB.
   */
  content: ContentBlock[];

  /** Path to cover image, e.g. /images/blogs/mamaearth-success-story-cover.jpg */
  thumbnailUrl: string;

  /** Author display name (e.g. "Angeltors.com"). Extend to Author object when needed. */
  author: string;

  category: Category;
  tags: string[];

  /** ISO date string, e.g. "2026-02-14T00:00:00Z" */
  publishedAt: string;

  readTimeMinutes: number;

  /** If true, this post is highlighted as featured on the Learn page */
  featured?: boolean;
}
