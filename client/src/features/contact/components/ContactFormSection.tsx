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
    <div className="space-y-1.5">
      <label htmlFor={id} className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-muted">
        {label}
        {required && <span className="text-angeltors-accent font-bold">*</span>}
      </label>
      <div className="relative">
        <div
          className={`absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none transition-colors duration-200 ${
            focused ? "text-angeltors-accent" : "text-angeltors-border-dark"
          }`}
        >
          <Icon className="h-4 w-4" />
        </div>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full pl-11 pr-4 py-3 rounded-xl text-sm font-medium text-angeltors-ink placeholder:text-slate-300 bg-white border transition-all duration-200 outline-none
            ${error
              ? "border-red-400 ring-2 ring-red-100"
              : focused
              ? "border-angeltors-accent ring-2 ring-angeltors-accent/10"
              : "border-angeltors-border hover:border-angeltors-border-dark"
            }`}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-1 text-xs text-red-500 font-medium"
          >
            <AlertCircle className="h-3 w-3 shrink-0" />
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
    <div className="space-y-1.5">
      <label htmlFor={id} className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-muted">
        {label}
        {required && <span className="text-angeltors-accent font-bold">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Briefcase className={`h-4 w-4 transition-colors duration-200 ${focused ? "text-angeltors-accent" : "text-angeltors-border-dark"}`} />
        </div>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full pl-11 pr-10 py-3 rounded-xl text-sm font-medium bg-white appearance-none cursor-pointer transition-all duration-200 outline-none
            ${!value ? "text-slate-300" : "text-angeltors-ink"}
            ${error
              ? "border-red-400 ring-2 ring-red-100 border"
              : focused
              ? "border-angeltors-accent ring-2 ring-angeltors-accent/10 border"
              : "border-angeltors-border hover:border-angeltors-border-dark border"
            }`}
        >
          {profileOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={!opt.value} className="text-angeltors-ink">
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDown className="h-4 w-4 text-angeltors-border-dark" />
        </div>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-1 text-xs text-red-500 font-medium"
          >
            <AlertCircle className="h-3 w-3 shrink-0" />
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
    <section className="py-24 bg-white border-t border-angeltors-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 space-y-3"
        >
          <p className="text-xs font-bold uppercase tracking-[4px] text-angeltors-accent">Write Us</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-angeltors-ink">
            Don't hesitate to contact us<br className="hidden sm:block" /> anytime with questions
          </h2>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-2xl border border-angeltors-border bg-angeltors-bg stripe-shadow-lg overflow-hidden">

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center gap-5 py-20 px-8"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 border border-green-100">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-angeltors-ink">Message Sent!</h3>
                    <p className="text-angeltors-muted max-w-sm">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-xl text-sm font-bold text-angeltors-accent border-2 border-angeltors-accent/30 hover:bg-angeltors-accent hover:text-white transition-all duration-200"
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
                  className="p-8 space-y-6"
                >
                  {/* Row 1: Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
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
                  <div className="grid gap-5 sm:grid-cols-2">
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
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-muted">
                      <MessageSquare className="h-3.5 w-3.5" />
                      Message
                      <span className="text-angeltors-accent font-bold">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="Tell us about your goals, questions, or how we can help you..."
                      value={form.message}
                      onChange={(e) => update("message")(e.target.value)}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium text-angeltors-ink placeholder:text-slate-300 bg-white border resize-none transition-all duration-200 outline-none focus:border-angeltors-accent focus:ring-2 focus:ring-angeltors-accent/10
                        ${errors.message ? "border-red-400 ring-2 ring-red-100" : "border-angeltors-border hover:border-angeltors-border-dark"}`}
                    />
                    <div className="flex items-start justify-between gap-2">
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-1 text-xs text-red-500 font-medium"
                          >
                            <AlertCircle className="h-3 w-3 shrink-0" />
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      <span className={`ml-auto text-xs shrink-0 ${form.message.length < 20 ? "text-slate-300" : "text-angeltors-accent"}`}>
                        {form.message.length} / 1000
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex justify-center pt-2">
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={reducedMotion ? {} : { y: -2 }}
                      whileTap={reducedMotion ? {} : { scale: 0.97 }}
                      className="group relative flex items-center gap-3 px-10 py-3.5 rounded-xl text-sm font-bold text-white bg-angeltors-accent hover:bg-angeltors-accent-light transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
                    >
                      {/* Shimmer effect on hover */}
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      {status === "loading" ? (
                        <>
                          <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
