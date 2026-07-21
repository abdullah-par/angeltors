import { useEffect } from "react";
import BlogHero from "@/features/blog/components/BlogHero";
import FeaturedArticle from "@/features/blog/components/FeaturedArticle";
import BlogCategories from "@/features/blog/components/BlogCategories";
import LatestArticlesGrid from "@/features/blog/components/LatestArticlesGrid";
import PopularTopics from "@/features/blog/components/PopularTopics";
import WhyLearnWithUs from "@/features/blog/components/WhyLearnWithUs";
import NewsletterCTA from "@/features/blog/components/NewsletterCTA";
import { mockBlogs, mockCategories } from "@/features/blog/data/blogs";

// Admin flag — set to false for production.
// Replace with a real auth check when backend is ready.
const isAdmin = false;

export default function Learn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sort by date descending so newest posts appear first
  const sortedBlogs = [...mockBlogs].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Use the most recent featured article as the hero feature
  const featuredPost =
    sortedBlogs.find((post) => post.featured) ?? sortedBlogs[0];

  // Remaining posts for the grid (exclude the featured one)
  const latestPosts = sortedBlogs.filter(
    (post) => post.id !== featuredPost.id
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Admin: New Post button — shown only when isAdmin = true */}
      {isAdmin && (
        <div className="fixed bottom-8 right-8 z-50">
          <a
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 rounded-full bg-angeltors-accent px-6 py-3 text-sm font-bold text-white shadow-xl hover:bg-[#1a9c4c] transition-all hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Post
          </a>
        </div>
      )}

      <BlogHero />
      <FeaturedArticle post={featuredPost} />
      <BlogCategories categories={mockCategories} />
      <LatestArticlesGrid posts={latestPosts} />
      <PopularTopics />
      <NewsletterCTA />
    </div>
  );
}
