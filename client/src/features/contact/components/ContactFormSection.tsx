import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, ChevronDown, User, Mail, Phone, Briefcase, MessageSquare } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  profile: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  profile?: string;
  message?: string;
}

const profileOptions = [
  { value: "", label: "Select your profile" },
  { value: "investor", label: "Investor" },
  { value: "founder", label: "Founder / Entrepreneur" },
  { value: "mentor", label: "Mentor" },
  { value: "partner", label: "General Partner" },
  { value: "other", label: "Other" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (data.phone && !/^[+\d\s\-()]{7,15}$/.test(data.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!data.profile) errors.profile = "Please select your profile.";
  if (!data.message.trim()) errors.message = "Message cannot be empty.";
  else if (data.message.trim().length < 20) errors.message = "Message must be at least 20 characters.";
  return errors;
}

interface InputFieldProps {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (v: string) => void;
}

function InputField({ id, label, icon: Icon, type = "text", placeholder, value, error, required = false, onChange }: InputFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400">
        {label}
        {required && <span className="text-angeltors-accent font-bold">*</span>}
      </label>
      <div className="relative">
        <div
          className={`absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none transition-colors duration-300 ${
            focused ? "text-angeltors-accent" : "text-slate-400"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full pl-12 pr-4 py-3.5 rounded-[1rem] text-[15px] font-semibold text-angeltors-ink placeholder:text-slate-400 placeholder:font-medium transition-all duration-300 outline-none shadow-sm
            ${error
              ? "bg-red-50 border border-red-300 focus:ring-4 focus:ring-red-500/10"
              : focused
              ? "bg-white border border-angeltors-accent/50 focus:ring-4 focus:ring-angeltors-accent/10"
              : "bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-slate-300"
            }`}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 4 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="flex items-center gap-1 text-[13px] text-red-500 font-bold"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (v: string) => void;
}

function SelectField({ id, label, value, error, required = false, onChange }: SelectFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400">
        {label}
        {required && <span className="text-angeltors-accent font-bold">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Briefcase className={`h-5 w-5 transition-colors duration-300 ${focused ? "text-angeltors-accent" : "text-slate-400"}`} />
        </div>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full pl-12 pr-10 py-3.5 rounded-[1rem] text-[15px] font-semibold bg-white appearance-none cursor-pointer transition-all duration-300 outline-none shadow-sm
            ${!value ? "text-slate-400" : "text-angeltors-ink"}
            ${error
              ? "bg-red-50 border-red-300 focus:ring-4 focus:ring-red-500/10 border"
              : focused
              ? "bg-white border-angeltors-accent/50 focus:ring-4 focus:ring-angeltors-accent/10 border"
              : "bg-slate-50 border-slate-200/60 hover:bg-white hover:border-slate-300 border"
            }`}
        >
          {profileOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={!opt.value} className="text-angeltors-ink">
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <ChevronDown className="h-5 w-5 text-slate-400" />
        </div>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 4 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="flex items-center gap-1 text-[13px] text-red-500 font-bold"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactFormSection() {
  const reducedMotion = useReducedMotion();
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", profile: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [focusedMessage, setFocusedMessage] = useState(false);

  const update = (field: keyof FormData) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1800));
    setStatus("success");
  };

  const handleReset = () => {
    setForm({ name: "", email: "", phone: "", profile: "", message: "" });
    setErrors({});
    setStatus("idle");
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/20 bg-angeltors-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-accent shadow-sm backdrop-blur-sm">
            Write Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-angeltors-ink">
            Don't hesitate to reach out<br className="hidden sm:block" /> with your questions.
          </h2>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-[2.5rem] bg-white border border-slate-200/60 shadow-xl overflow-hidden p-2 sm:p-4">
            <div className="rounded-[2rem] bg-white border border-slate-200/40">

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center gap-6 py-12 px-8"
                  >
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 shadow-inner">
                      <CheckCircle className="h-12 w-12 text-emerald-500" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-3xl font-black text-angeltors-ink tracking-tight">Message Sent!</h3>
                      <p className="text-slate-500 font-medium text-lg max-w-sm mx-auto">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={handleReset}
                      className="mt-6 px-8 py-3.5 rounded-full text-[15px] font-bold text-angeltors-ink bg-slate-50 border border-slate-200/60 hover:bg-slate-100 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="p-6 sm:p-10 space-y-8"
                  >
                    {/* Row 1: Name + Email */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <InputField
                        id="contact-name"
                        label="Full Name"
                        icon={User}
                        placeholder="John Smith"
                        value={form.name}
                        error={errors.name}
                        required
                        onChange={update("name")}
                      />
                      <InputField
                        id="contact-email"
                        label="Email Address"
                        icon={Mail}
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        error={errors.email}
                        required
                        onChange={update("email")}
                      />
                    </div>

                    {/* Row 2: Phone + Profile */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <InputField
                        id="contact-phone"
                        label="Mobile Number"
                        icon={Phone}
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        error={errors.phone}
                        onChange={update("phone")}
                      />
                      <SelectField
                        id="contact-profile"
                        label="Your Profile"
                        value={form.profile}
                        error={errors.profile}
                        required
                        onChange={update("profile")}
                      />
                    </div>

                    {/* Row 3: Message */}
                    <div className="space-y-2">
                      <label htmlFor="contact-message" className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                        <MessageSquare className="h-3.5 w-3.5" />
                        Message
                        <span className="text-angeltors-accent font-bold">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        placeholder="Tell us about your goals, questions, or how we can help you..."
                        value={form.message}
                        onChange={(e) => update("message")(e.target.value)}
                        onFocus={() => setFocusedMessage(true)}
                        onBlur={() => setFocusedMessage(false)}
                        rows={6}
                        className={`w-full px-5 py-4 rounded-[1rem] text-[15px] font-semibold text-angeltors-ink placeholder:text-slate-400 placeholder:font-medium transition-all duration-300 outline-none shadow-sm resize-none
                          ${errors.message
                            ? "bg-red-50 border border-red-300 focus:ring-4 focus:ring-red-500/10"
                            : focusedMessage
                            ? "bg-white border border-angeltors-accent/50 focus:ring-4 focus:ring-angeltors-accent/10"
                            : "bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-slate-300"
                          }`}
                      />
                      <div className="flex items-start justify-between gap-2">
                        <AnimatePresence>
                          {errors.message && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 4 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              className="flex items-center gap-1 text-[13px] text-red-500 font-bold"
                            >
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                              {errors.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                        <span className={`ml-auto text-[11px] font-bold tracking-widest shrink-0 ${form.message.length < 20 ? "text-slate-400" : "text-angeltors-accent"}`}>
                          {form.message.length} / 1000
                        </span>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-center pt-4">
                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={reducedMotion ? {} : { y: -2 }}
                        whileTap={reducedMotion ? {} : { scale: 0.97 }}
                        className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-4 rounded-full text-base font-bold text-white bg-angeltors-ink overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-6px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_15px_30px_-10px_rgba(0,0,0,0.6)]"
                      >
                        {/* Shimmer effect on hover */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {status === "loading" ? (
                          <>
                            <span className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
