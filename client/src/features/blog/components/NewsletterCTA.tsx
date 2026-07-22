import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useState } from "react";

export default function NewsletterCTA() {
  const reducedMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
          whileInView={reducedMotion ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[3rem] bg-angeltors-ink p-8 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[50%] -right-[10%] w-[70%] h-[150%] rounded-full bg-gradient-to-b from-white/5 to-transparent rotate-12 blur-3xl" />
            <div className="absolute -bottom-[50%] -left-[10%] w-[70%] h-[150%] rounded-full bg-gradient-to-t from-angeltors-accent/20 to-transparent -rotate-12 blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white mb-6">
              Never Miss an Update
            </h2>
            <p className="text-slate-300 font-medium text-lg mb-10">
              Get the latest startup insights, funding news, and educational resources delivered straight to your inbox every week.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow rounded-full px-6 py-4 text-sm font-medium text-angeltors-ink focus:outline-none focus:ring-2 focus:ring-angeltors-accent shadow-inner bg-white/95 placeholder:text-slate-400"
                disabled={status !== "idle"}
              />
              <button
                type="submit"
                disabled={status !== "idle"}
                className="inline-flex items-center justify-center rounded-full bg-angeltors-accent px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-angeltors-ink focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-angeltors-ink disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap shadow-md"
              >
                {status === "submitting" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
            
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-angeltors-accent font-medium text-sm mt-4"
              >
                Thanks for subscribing! Check your inbox to confirm.
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
