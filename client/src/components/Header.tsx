import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronRight, ChevronDown, CircleAlert, CircleCheck, CircleDashed } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

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
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about-us" },
  {
    label: "Invest With Us",
    href: "#our-services",
    dropdown: [
      {
        title: "Portfolio Diligence",
        href: "#our-services",
        description: "Discover curated investments and diligence summaries.",
        icon: CircleDashed,
      },
      {
        title: "Investor Protocols",
        href: "#our-services",
        description: "Review rules, timelines, and pool allocation structures.",
        icon: CircleAlert,
      },
    ],
  },
  {
    label: "Raise Capital",
    href: "#our-services",
    dropdown: [
      {
        title: "Founder Pathways",
        href: "#our-services",
        description: "Accelerate your pathway to early-stage seed rounds.",
        icon: CircleAlert,
      },
      {
        title: "Strategic Support",
        href: "#our-services",
        description: "Get assistance with legal systems and operational scale.",
        icon: CircleCheck,
      },
    ],
  },
  {
    label: "Learn With Us",
    href: "#faq",
    dropdown: [
      {
        title: "FAQ & Frameworks",
        href: "#faq",
        description: "Get answers to key criteria and timeline processes.",
        icon: CircleDashed,
      },
      {
        title: "Blogs & News",
        href: "#contact",
        description: "Ecosystem insights, updates, and research stories.",
        icon: CircleCheck,
      },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(navItems[0].href);
  const reducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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

  // Intersection Observer for active link
  useEffect(() => {
    const sections = navItems.map((item) => {
      const el = document.querySelector(item.href);
      if (!el) return { href: item.href, el: null, top: 0 };
      return { href: item.href, el, top: (el as HTMLElement).offsetTop };
    }).filter(s => s.el !== null);

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
      setActiveItem(newActive);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8 pointer-events-none">
      <motion.header
        className="mx-auto max-w-7xl rounded-2xl border transition-all duration-300 pointer-events-auto"
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(16px)",
          borderColor: scrolled ? "rgba(230, 235, 244, 0.8)" : "rgba(230, 235, 244, 0)",
          boxShadow: scrolled ? "0 10px 30px -10px rgba(50, 50, 93, 0.08)" : "none",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 px-4 py-3 sm:px-6">
          <a href="#hero" className="flex items-center select-none shrink-0">
            <img
              src="/images/Angeltors_logo.png"
              alt="Angeltors"
              className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg px-2 py-0.5 shadow-sm border border-angeltors-border"
            />
          </a>

          <nav className="ml-4 hidden flex-1 items-center justify-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-semibold transition-colors duration-300 rounded-full whitespace-nowrap inline-flex items-center gap-1 ${
                    item.href !== activeItem ? "hover:bg-neutral-500/5" : ""
                  }`}
                >
                  <span
                    className={`relative z-10 transition-colors duration-350 ${
                      item.href === activeItem ? "text-white" : "text-angeltors-muted hover:text-angeltors-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.dropdown && (
                    <ChevronDown className={`h-3 w-3 relative z-10 transition-transform duration-300 ${
                      item.href === activeItem ? "text-white" : "text-angeltors-muted group-hover:text-angeltors-ink"
                    } ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  )}
                  {item.href === activeItem && !item.dropdown && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-angeltors-accent"
                      transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>

                {/* Dropdown Content */}
                <AnimatePresence>
                  {item.dropdown && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[22rem] rounded-xl border border-angeltors-border bg-white p-4 shadow-lg backdrop-blur-md"
                    >
                      <ul className="flex flex-col gap-2">
                        {item.dropdown.map((subItem) => {
                          const SubIcon = subItem.icon;
                          return (
                            <li key={subItem.title}>
                              <a
                                href={subItem.href}
                                className="flex items-start gap-3 rounded-lg p-2.5 transition hover:bg-neutral-50"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-angeltors-accent/5 text-angeltors-accent">
                                  <SubIcon className="h-4.5 w-4.5" />
                                </div>
                                <div className="leading-tight">
                                  <span className="block text-sm font-semibold text-angeltors-ink">{subItem.title}</span>
                                  <span className="mt-1 block text-xs leading-normal text-angeltors-muted">{subItem.description}</span>
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
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-5 shrink-0">
            <a
              href="#contact"
              className="hidden rounded-full border border-angeltors-navy-light/25 bg-angeltors-navy-light/5 text-angeltors-navy-light px-5 py-2.5 text-xs xl:text-sm font-semibold transition-all duration-300 hover:bg-angeltors-navy-light hover:text-white hover:-translate-y-[2px] xl:inline-flex items-center shadow-sm"
            >
              Log in
            </a>

            <motion.a
              href="#contact"
              ref={ctaRef}
              onMouseMove={handleCtaMouseMove}
              onMouseLeave={handleCtaMouseLeave}
              style={reducedMotion ? {} : { x: magneticOffset.x, y: magneticOffset.y }}
              animate={{ x: magneticOffset.x, y: magneticOffset.y }}
              transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 20 }}
              className="hidden rounded-full bg-angeltors-accent px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 inline-flex items-center gap-1.5 hover:brightness-90 hover:-translate-y-[2px] hover:shadow-md xl:inline-flex animate-none"
            >
              <span>Membership</span>
              <ChevronRight className="h-4 w-4" />
            </motion.a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-angeltors-border bg-white text-angeltors-ink transition hover:bg-angeltors-band xl:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="border-t border-angeltors-border bg-white rounded-b-2xl xl:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
                {navItems.map((item, index) => (
                  <div key={item.label} className="flex flex-col">
                    <motion.a
                      href={item.href}
                      initial={reducedMotion ? {} : { opacity: 0, x: -10 }}
                      animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
                      onClick={() => setMenuOpen(false)}
                      className={
                        item.href === activeItem
                          ? "rounded-xl px-4 py-3 text-sm font-semibold text-white bg-angeltors-accent"
                          : "rounded-xl px-4 py-3 text-sm font-medium text-angeltors-muted hover:bg-angeltors-band hover:text-angeltors-ink"
                      }
                    >
                      {item.label}
                    </motion.a>
                    {item.dropdown && (
                      <div className="pl-6 flex flex-col gap-1.5 mt-1 mb-2 border-l border-angeltors-border ml-4">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-xs font-semibold text-angeltors-muted hover:text-angeltors-ink py-1.5"
                          >
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile Log In and Membership CTAs */}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-angeltors-border">
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-center items-center rounded-xl border border-angeltors-navy-light/20 bg-angeltors-navy-light/5 py-3 text-sm font-semibold text-angeltors-navy-light hover:bg-angeltors-navy-light hover:text-white transition-all duration-300"
                  >
                    Log in
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-center items-center rounded-xl bg-angeltors-accent py-3 text-sm font-semibold text-white hover:brightness-90 gap-1.5"
                  >
                    <span>Membership</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
