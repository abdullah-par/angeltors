import { Link } from "react-router-dom";

export default function Footer() {
  const footerColumns = [
    {
      title: "Discover",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Invest with us", href: "/invest-with-us" },
        { label: "Raise Capital", href: "/raise-capital" },
        { label: "Learn with us", href: "#faq" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Investors", href: "#our-services" },
        { label: "Startups", href: "#our-services" },
        { label: "Mentorship", href: "#our-services" },
        { label: "In-House Support", href: "#our-services" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Sign Up", href: "#contact" },
        { label: "Pitch To Us", href: "#contact" },
        { label: "Blog Post", href: "#contact" },
        { label: "Investor Relation", href: "/investor-relation" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Use", href: "/terms-of-use" },
        { label: "Refund Policy", href: "/refund-policy" },
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Cookies Policy", href: "/cookies-policy" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 text-angeltors-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr] lg:gap-24 mb-16">
          <div className="flex flex-col justify-between max-w-sm">
            <div>
              <a href="#hero" className="flex items-center select-none group">
                <img 
                  src="/images/Angeltors_logo.png" 
                  alt="Angeltors" 
                  className="h-14 sm:h-16 w-auto object-contain bg-white rounded-xl px-2 py-1 shadow-sm border border-slate-200/60 transition-transform duration-300 group-hover:scale-105" 
                />
              </a>
              <p className="mt-8 text-sm leading-relaxed text-slate-500 font-medium">
                Angeltors is a prominent Angel Investment Platform, focusing on well-researched, promising, and revenue-generating startups which comprised of a network of successful leaders who have built, managed, and exited businesses across various industries.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex flex-wrap gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/Angeltors25/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200/60 text-slate-400 transition-all duration-300 hover:border-angeltors-accent hover:bg-angeltors-accent hover:text-white shadow-sm hover:shadow-md hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/angeltors/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200/60 text-slate-400 transition-all duration-300 hover:border-angeltors-accent hover:bg-angeltors-accent hover:text-white shadow-sm hover:shadow-md hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051c-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/angeltors/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200/60 text-slate-400 transition-all duration-300 hover:border-angeltors-accent hover:bg-angeltors-accent hover:text-white shadow-sm hover:shadow-md hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Angeltors"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200/60 text-slate-400 transition-all duration-300 hover:border-angeltors-accent hover:bg-angeltors-accent hover:text-white shadow-sm hover:shadow-md hover:-translate-y-1"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=9161110125&text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200/60 text-slate-400 transition-all duration-300 hover:border-angeltors-accent hover:bg-angeltors-accent hover:text-white shadow-sm hover:shadow-md hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-black tracking-widest uppercase text-angeltors-ink">
                  {column.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {column.links.map((link) => {
                    const isInternal = link.href.startsWith("/");
                    return (
                      <li key={link.label}>
                        {isInternal ? (
                          <Link
                            to={link.href}
                            className="text-sm font-medium text-slate-500 transition-colors hover:text-angeltors-accent"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="text-sm font-medium text-slate-500 transition-colors hover:text-angeltors-accent"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-slate-400">
            © {new Date().getFullYear()} Angeltors. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <Link to="/privacy-policy" className="hover:text-angeltors-accent transition-colors">Privacy</Link>
            <Link to="/terms-of-use" className="hover:text-angeltors-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
