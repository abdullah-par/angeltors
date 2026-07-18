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
    detail: "11/13/4C, Tashkent Marg, Patrika Chauraha, Civil Lines Prayagraj 211001, Uttar Pradesh, India",
    href: "https://maps.google.com/?q=Patrika+Chauraha,+Civil+Lines,+Prayagraj",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon – Sat: 9:00 AM – 6:00 PM IST",
    href: null,
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
    <section className="py-24 bg-angeltors-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 items-start">

          {/* Left: Contact details */}
          <motion.div
            variants={reducedMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.div variants={reducedMotion ? {} : itemVariants} className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[4px] text-angeltors-accent">
                Say Hello
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight text-angeltors-ink">
                Get In Touch
              </h2>
              <p className="text-base leading-relaxed text-angeltors-muted max-w-md">
                Start working with us to generate awareness, drive traffic, and connect. We guarantee that you'll be able to have any issue resolved within 24 hours.
              </p>
            </motion.div>

            <div className="space-y-3">
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
                      className="group flex gap-5 p-4 rounded-2xl bg-white border border-angeltors-border ag-shadow-sm transition-all duration-300 hover:border-angeltors-accent/20 hover:ag-shadow-md cursor-default"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-angeltors-accent/8 text-angeltors-accent border border-angeltors-accent/10 transition-all duration-300 group-hover:bg-angeltors-accent group-hover:text-white group-hover:border-angeltors-accent group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-angeltors-muted mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm font-semibold text-angeltors-ink leading-relaxed break-words">
                          {item.detail}
                        </p>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 24 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="sticky top-8"
          >
            <div className="rounded-2xl overflow-hidden depth-border ag-shadow-lg" style={{ height: 440 }}>
              {/* Map header bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-angeltors-border">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-xs font-medium text-angeltors-muted truncate flex-1">
                  Angeltors Private Limited, Civil Lines, Prayagraj
                </span>
                <MapPin className="h-3.5 w-3.5 text-angeltors-accent shrink-0" />
              </div>

              <iframe
                title="Angeltors Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5257004034524!2d81.8387453!3d25.454115899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb98a6894f39%3A0x36fe9a71674d74b8!2sAngeltors%20Private%20Limited!5e0!3m2!1sen!2sin!4v1741783759195!5m2!1sen!2sin"
                className="w-full border-none"
                style={{ height: "calc(100% - 41px)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address tag below map */}
            <div className="mt-4 flex items-start gap-3 px-4 py-3 rounded-xl bg-white border border-angeltors-border ag-shadow-sm">
              <MapPin className="h-4 w-4 text-angeltors-accent mt-0.5 shrink-0" />
              <p className="text-xs text-angeltors-muted leading-relaxed">
                11/13/4C, Tashkent Marg, Patrika Chauraha, Civil Lines, Prayagraj 211001, Uttar Pradesh, India
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
