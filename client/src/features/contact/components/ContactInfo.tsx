import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const infoItems = [
  {
    icon: Phone,
    title: "Phone Number",
    detail: "+91-9161110125",
    href: "tel:+919161110125",
  },
  {
    icon: Mail,
    title: "Send Email",
    detail: "connect@angeltors.com",
    href: "mailto:connect@angeltors.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    detail: "11/13/4C, Tashkent Marg, Patrika Chauraha, Civil Lines Prayagraj 211001, UP, India",
    href: "https://maps.google.com/?q=Patrika+Chauraha,+Civil+Lines,+Prayagraj",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon – Sat: 9:00 AM – 6:00 PM IST",
    href: null,
  },
];

const socialMedia = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/angeltors/",
    svg: "M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/angeltors/",
    svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051c-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Angeltors",
    svg: "M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=9161110125&text=Hello",
    svg: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Angeltors25/",
    svg: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ContactInfo() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="pt-32 pb-24 lg:pt-40 bg-slate-50 border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 items-start">

          {/* Left: Contact details */}
          <motion.div
            variants={reducedMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={reducedMotion ? {} : itemVariants} className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[4px] text-angeltors-accent">
                Say Hello
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.03em] leading-tight text-angeltors-ink">
                Get In Touch
              </h2>
              <p className="text-base leading-relaxed text-slate-500 font-medium max-w-md">
                Start working with us to generate awareness, drive traffic, and connect. We guarantee that you'll be able to have any issue resolved within 24 hours.
              </p>
            </motion.div>

            {/* Premium Contact Cards */}
            <div className="space-y-4">
              {infoItems.map((item) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <motion.div key={item.title} variants={reducedMotion ? {} : itemVariants}>
                    <Wrapper
                      {...wrapperProps}
                      className="group flex gap-5 p-5 rounded-[1.5rem] bg-white border border-slate-200/60 shadow-sm transition-all duration-300 hover:border-angeltors-accent hover:shadow-xl hover:-translate-y-1 cursor-default"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-slate-50 text-slate-500 transition-all duration-300 group-hover:bg-angeltors-accent group-hover:text-white group-hover:scale-105 shadow-inner">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex flex-col justify-center">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[15px] font-bold text-angeltors-ink leading-relaxed break-words">
                          {item.detail}
                        </p>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* Dedicated Social Media Section */}
            <motion.div variants={reducedMotion ? {} : itemVariants} className="pt-4 border-t border-slate-200/60">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-5">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-slate-200/60 text-slate-400 transition-all duration-300 hover:border-angeltors-accent hover:bg-angeltors-accent hover:text-white shadow-sm hover:shadow-xl hover:-translate-y-1.5"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d={social.svg} />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right: Premium Map Card */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 24 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="sticky top-32"
          >
            <div className="rounded-[2.5rem] bg-white p-2 shadow-2xl ring-1 ring-slate-200/60" style={{ height: 480 }}>
              <div className="w-full h-full rounded-[2rem] overflow-hidden flex flex-col group bg-slate-100">
                {/* Map header bar (mac os style) */}
                <div className="flex items-center gap-2 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shrink-0 z-10">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400 shadow-sm" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-sm" />
                    <div className="h-3 w-3 rounded-full bg-green-400 shadow-sm" />
                  </div>
                  <span className="ml-4 text-xs font-bold uppercase tracking-widest text-slate-400 truncate flex-1 text-center pr-12">
                    Angeltors Headquarters
                  </span>
                </div>

                <iframe
                  title="Angeltors Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5257004034524!2d81.8387453!3d25.454115899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb98a6894f39%3A0x36fe9a71674d74b8!2sAngeltors%20Private%20Limited!5e0!3m2!1sen!2sin!4v1741783759195!5m2!1sen!2sin"
                  className="w-full flex-1 border-none filter grayscale-[20%] contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Address tag below map */}
            <div className="mt-6 flex items-start gap-4 px-6 py-5 rounded-[1.5rem] bg-white border border-slate-200/60 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-angeltors-accent/10 text-angeltors-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-medium mt-0.5">
                <strong className="text-angeltors-ink block mb-0.5 font-bold">Angeltors Private Limited</strong>
                11/13/4C, Tashkent Marg, Patrika Chauraha, Civil Lines, Prayagraj 211001, Uttar Pradesh, India
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
