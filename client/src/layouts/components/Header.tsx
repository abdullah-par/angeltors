import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown, CircleAlert, CircleCheck, CircleDashed } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface DropdownItem {
  title: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  {
    label: "Invest With Us",
    href: "/invest-with-us",
  },
  {
    label: "Raise Capital",
    href: "/raise-capital",
  },
  {
    label: "Learn With Us",
    href: "#faq",
  },
  { label: "Contact", href: "/contact" },
];

/** Resolve a nav href based on current page.
 *  - On home: `#our-services` stays `#our-services`
 *  - On other pages: `#our-services` → `/#our-services`, `/contact` stays `/contact`
 */
function resolveHref(href: string, isHome: boolean): string {
  if (href.startsWith("/")) return href;
  return isHome ? href : `/${href}`;
}

/** True if the given nav item should be considered "active" */
function isItemActive(item: NavItem, activeHash: string, pathname: string, isHome: boolean): boolean {
  if (item.href === "/") {
    return isHome && activeHash === "/";
  }
  if (!isHome) {
    // On a named page route, match by pathname
    return item.href === pathname;
  }
  return item.href === activeHash;
}

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(navItems[0].href);
  const reducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Scroll listener for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Magnetic button logic
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  const handleCtaMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion || !ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.1;
    const deltaY = (e.clientY - centerY) * 0.1;
    setMagneticOffset({ x: Math.max(-5, Math.min(5, deltaX)), y: Math.max(-5, Math.min(5, deltaY)) });
  };
  const handleCtaMouseLeave = () => {
    if (reducedMotion) return;
    setMagneticOffset({ x: 0, y: 0 });
  };

  // Scroll-spy: only active on home page where hash sections exist
  useEffect(() => {
    if (!isHome) return;

    const sections = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return { href: item.href, el: null, top: 0 };
        return { href: item.href, el, top: (el as HTMLElement).offsetTop };
      })
      .filter((s) => s.el !== null);

    const onScroll = () => {
      const scrollY = window.scrollY;
      let newActive = navItems[0].href;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s.el && scrollY >= s.top - 150) {
          newActive = s.href;
          break;
        }
      }
      setActiveHash(newActive);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // CTA target: go to home's contact section when not on home
  const ctaHref = isHome ? "#contact" : "/#contact";

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-6 sm:px-6 lg:px-8 pointer-events-none">
      <motion.header
        className="mx-auto max-w-7xl rounded-[2rem] transition-all duration-500 pointer-events-auto"
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.5)",
          backdropFilter: scrolled ? "blur(24px)" : "blur(12px)",
          borderColor: scrolled ? "rgba(226, 232, 240, 0.8)" : "rgba(226, 232, 240, 0.4)",
          borderWidth: "1px",
          boxShadow: scrolled ? "0 20px 40px -15px rgba(0, 0, 0, 0.05)" : "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 px-5 py-3 sm:px-6">
          {/* Logo — always goes home */}
          <Link to="/" className="flex items-center select-none shrink-0 group">
            <img
              src="/images/Angeltors_logo.png"
              alt="Angeltors"
              className="h-10 sm:h-12 w-auto object-contain bg-white rounded-xl px-2 py-0.5 shadow-sm border border-slate-200/60 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="ml-6 hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isItemActive(item, activeHash, location.pathname, isHome);
              const href = resolveHref(item.href, isHome);
              const isPageLink = item.href.startsWith("/");
              const isHashOnOtherPage = !isHome && item.href.startsWith("#");

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {isPageLink ? (
                    <Link
                      to={href}
                      onClick={() => {
                        if (href === "/") window.scrollTo(0, 0);
                      }}
                      className={`relative px-4 py-2.5 text-sm font-bold transition-all duration-300 rounded-full whitespace-nowrap inline-flex items-center gap-1.5 ${
                        active ? "" : "hover:bg-slate-100/80 text-slate-500 hover:text-angeltors-ink"
                      }`}
                    >
                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          active ? "text-white" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                      {active && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 rounded-full bg-angeltors-ink"
                          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  ) : isHashOnOtherPage ? (
                    // Hash link on a non-home page → regular <a> with /#hash
                    <a
                      href={href}
                      className="relative px-4 py-2.5 text-sm font-bold transition-all duration-300 rounded-full whitespace-nowrap inline-flex items-center gap-1.5 text-slate-500 hover:bg-slate-100/80 hover:text-angeltors-ink"
                    >
                      <span className="relative z-10 transition-colors duration-300">
                        {item.label}
                      </span>
                      {item.dropdown && (
                        <ChevronDown
                          className={`h-3.5 w-3.5 relative z-10 transition-transform duration-300 ${
                            openDropdown === item.label ? "rotate-180 text-angeltors-ink" : ""
                          }`}
                        />
                      )}
                    </a>
                  ) : (
                    // Hash link on home page — scroll-spy active state
                    <a
                      href={href}
                      className={`relative px-4 py-2.5 text-sm font-bold transition-all duration-300 rounded-full whitespace-nowrap inline-flex items-center gap-1.5 ${
                        !active ? "hover:bg-slate-100/80 text-slate-500 hover:text-angeltors-ink" : ""
                      }`}
                    >
                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          active ? "text-white" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.dropdown && (
                        <ChevronDown
                          className={`h-3.5 w-3.5 relative z-10 transition-transform duration-300 ${
                            active ? "text-white/80" : ""
                          } ${openDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      )}
                      {active && !item.dropdown && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 rounded-full bg-angeltors-ink"
                          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </a>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[24rem] rounded-[2rem] border border-slate-200/60 bg-white p-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl"
                      >
                        <ul className="flex flex-col gap-1">
                          {item.dropdown.map((subItem) => {
                            const SubIcon = subItem.icon;
                            const subHref = resolveHref(subItem.href, isHome);
                            return (
                              <li key={subItem.title}>
                                <a
                                  href={subHref}
                                  className="group flex items-start gap-4 rounded-[1.25rem] p-4 transition-all duration-300 hover:bg-slate-50"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-angeltors-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <SubIcon className="h-5 w-5" />
                                  </div>
                                  <div className="leading-tight">
                                    <span className="block text-sm font-bold text-angeltors-ink group-hover:text-angeltors-accent transition-colors duration-300">{subItem.title}</span>
                                    <span className="mt-1 block text-sm font-medium leading-relaxed text-slate-500">{subItem.description}</span>
                                  </div>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="ml-auto flex items-center gap-3 shrink-0">
            <a
              href={ctaHref}
              className="hidden rounded-full px-5 py-2.5 text-sm font-bold text-slate-500 transition-all duration-300 hover:text-angeltors-ink hover:bg-slate-100 lg:inline-flex items-center"
            >
              Log in
            </a>

            <Link
              to="/membership"
              ref={ctaRef}
              className="hidden rounded-full bg-angeltors-ink px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_10px_-2px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-4px_rgba(0,0,0,0.4)] lg:inline-flex items-center gap-2 group"
            >
              <span>Membership</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/60 bg-white text-angeltors-ink transition hover:bg-slate-50 lg:hidden shadow-sm"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-slate-200/60 bg-white/95 backdrop-blur-xl rounded-b-[2rem] lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 px-5 py-6">
                {navItems.map((item, index) => {
                  const active = isItemActive(item, activeHash, location.pathname, isHome);
                  const href = resolveHref(item.href, isHome);
                  const isPageLink = item.href.startsWith("/");

                  return (
                    <div key={item.label} className="flex flex-col">
                      {isPageLink ? (
                        <Link
                          to={href}
                          onClick={() => {
                            setMenuOpen(false);
                            if (href === "/") window.scrollTo(0, 0);
                          }}
                          className={`rounded-2xl px-5 py-4 text-base font-bold transition-colors duration-200 ${
                            active
                              ? "text-white bg-angeltors-ink"
                              : "text-slate-500 hover:bg-slate-50 hover:text-angeltors-ink"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <motion.a
                          href={href}
                          initial={reducedMotion ? {} : { opacity: 0, x: -10 }}
                          animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
                          onClick={() => setMenuOpen(false)}
                          className={`rounded-2xl px-5 py-4 text-base font-bold transition-colors duration-200 ${
                            active
                              ? "text-white bg-angeltors-ink"
                              : "text-slate-500 hover:bg-slate-50 hover:text-angeltors-ink"
                          }`}
                        >
                          {item.label}
                        </motion.a>
                      )}

                      {item.dropdown && (
                        <div className="pl-6 flex flex-col gap-2 mt-2 mb-4 border-l-2 border-slate-100 ml-6">
                          {item.dropdown.map((sub) => (
                            <a
                              key={sub.title}
                              href={resolveHref(sub.href, isHome)}
                              onClick={() => setMenuOpen(false)}
                              className="text-sm font-bold text-slate-400 hover:text-angeltors-ink py-2 transition-colors"
                            >
                              {sub.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Mobile CTAs */}
                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-slate-200/60">
                  <a
                    href={ctaHref}
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-center items-center rounded-2xl border border-slate-200/60 bg-white py-4 text-base font-bold text-angeltors-ink hover:bg-slate-50 transition-all duration-300"
                  >
                    Log in
                  </a>
                  <Link
                    to="/membership"
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-center items-center rounded-2xl bg-angeltors-ink py-4 text-base font-bold text-white transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] gap-2"
                  >
                    <span>Membership</span>
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
