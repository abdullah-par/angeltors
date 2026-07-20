import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { mockBlogs } from "@/features/blog/data/blogs";
import { ContentBlock } from "@/features/blog/types/blog";
import NewsletterCTA from "@/features/blog/components/NewsletterCTA";

// ---------------------------------------------------------------------------
// Admin flag — set to false for production.
// When backend auth is implemented, replace this with a real auth check,
// e.g. const isAdmin = useAuthStore(s => s.user?.role === 'admin');
// ---------------------------------------------------------------------------
const isAdmin = false;

// ---------------------------------------------------------------------------
// ContentRenderer — renders the structured content blocks from the database.
// Designed to be easily replaced by a backend API response renderer.
// ---------------------------------------------------------------------------
function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose prose-lg prose-slate prose-headings:font-black prose-headings:tracking-tight prose-a:text-angeltors-accent max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="text-2xl sm:text-3xl font-black tracking-tight text-angeltors-ink mt-10 mb-4 first:mt-0">
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p key={i} className="text-slate-600 leading-relaxed mb-5">
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul key={i} className="my-5 space-y-2 pl-0 list-none">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-angeltors-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "table":
            return (
              <div key={i} className="my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="bg-angeltors-ink text-white">
                    <tr>
                      {block.headers.map((h, j) => (
                        <th key={j} className="px-5 py-3 font-bold tracking-wide">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr
                        key={j}
                        className={j % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        {row.map((cell, k) => (
                          <td key={k} className="px-5 py-3 border-t border-slate-100 text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// BlogDetails Page
// ---------------------------------------------------------------------------
export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();

  // Find the post — when backend is ready, replace with useQuery('/api/posts/:slug')
  const post = mockBlogs.find((p) => p.slug === slug);

  // Related posts from same category (excluding current)
  const relatedPosts = post
    ? mockBlogs
        .filter(
          (p) => p.id !== post.id && p.category.id === post.category.id
        )
        .slice(0, 3)
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-4xl font-black text-angeltors-ink mb-4">
          Article Not Found
        </h1>
        <p className="text-slate-500 mb-8">
          The article you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/learn"
          className="inline-flex items-center justify-center rounded-full bg-angeltors-accent px-8 py-3 text-sm font-bold text-white transition-all hover:bg-[#1a9c4c]"
        >
          Back to Learn
        </Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Admin Action Bar ───────────────────────────────────────────────
          Shown only when isAdmin = true.
          When backend is integrated: hook up Edit to /admin/blog/edit/:id
          and Delete to DELETE /api/posts/:id with confirmation.
      ──────────────────────────────────────────────────────────────────── */}
      {isAdmin && (
        <div className="fixed top-20 right-6 z-50 flex flex-col gap-2">
          <Link
            to={`/admin/blog/edit/${post.id}`}
            className="inline-flex items-center gap-2 rounded-full bg-angeltors-accent px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-[#1a9c4c] transition-all hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Post
          </Link>
          <button
            onClick={() => {
              /* TODO: wire to DELETE /api/posts/:id */
              if (window.confirm("Are you sure you want to delete this post?")) {
                console.log("Delete post:", post.id);
              }
            }}
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-red-700 transition-all hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete Post
          </button>
        </div>
      )}

      {/* ── Article Header ─────────────────────────────────────────────── */}
      <div className="pt-32 pb-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/learn"
            className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-angeltors-accent transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Articles
          </Link>

          <div className="mb-6">
            <Link to={`/learn?category=${post.category.slug}`}>
              <span className="inline-flex items-center rounded-full bg-angeltors-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-accent">
                {post.category.name}
              </span>
            </Link>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-angeltors-ink leading-[1.1] mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200">
            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-angeltors-accent/30 to-angeltors-accent flex items-center justify-center border border-angeltors-accent/20 shadow-sm">
                <span className="text-sm font-black text-white">
                  {post.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-angeltors-ink">{post.author}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Author</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="text-sm font-bold text-slate-500">
              Published {formatDate(post.publishedAt)}
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="text-sm font-bold text-slate-500">
              {post.readTimeMinutes} min read
            </div>
          </div>
        </div>
      </div>

      {/* ── Cover Image ────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 bg-slate-100">
          <img
            src={post.thumbnailUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1600&auto=format&fit=crop";
            }}
          />
        </div>
      </div>

      {/* ── Article Content ─────────────────────────────────────────────── */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Lead excerpt */}
          <p className="text-xl text-slate-500 font-medium mb-10 pb-10 border-b border-slate-100 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Structured content blocks */}
          <ContentRenderer blocks={post.content} />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-2">
              <span className="text-sm font-bold text-slate-500 mr-2 py-2">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 hover:bg-angeltors-accent/10 hover:text-angeltors-accent transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Related Articles ────────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <div className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black tracking-tight text-angeltors-ink mb-8">
              More in {post.category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/learn/${related.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={related.thumbnailUrl}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=600&auto=format&fit=crop";
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-angeltors-accent mb-2">
                      {related.category.name}
                    </p>
                    <h3 className="text-base font-black tracking-tight text-angeltors-ink line-clamp-2 group-hover:text-angeltors-accent transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-bold mt-3">
                      {new Date(related.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                      {" · "}
                      {related.readTimeMinutes} min read
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <NewsletterCTA />
    </div>
  );
}
