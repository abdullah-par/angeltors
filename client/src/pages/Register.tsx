import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Eye, EyeOff, Sparkles, Zap, ShieldCheck, Target, User, Mail, Lock, ArrowRight, Rocket, TrendingUp, Building2 } from "lucide-react";
import { motion } from "framer-motion";

import { registerUser } from "@/services/authService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"founder" | "investor" | "other">("founder");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await registerUser({
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      role,
      agreeToTerms: formData.agreeToTerms,
    });

    setLoading(false);

    if (res.success) {
      navigate("/");
    } else {
      setError(res.error || "Registration failed. Please try again.");
    }
  };

  const highlights = [
    {
      title: "Streamlined Process",
      desc: "Discover, evaluate, and invest in high-potential startups through a seamless platform.",
      icon: Zap,
    },
    {
      title: "Rigorous Diligence",
      desc: "Leverage expert analysis and transparent metrics to make confident decisions.",
      icon: ShieldCheck,
    },
    {
      title: "Strategic Pipeline",
      desc: "Access a carefully curated network of founders and accredited angel syndicates.",
      icon: Target,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Create Account | Angeltors</title>
      </Helmet>

      <div className="min-h-screen flex w-full bg-white font-sans selection:bg-angeltors-accent selection:text-white">
        {/* LEFT PANEL - Dark Branding Section */}
        <div className="hidden lg:flex w-[45%] bg-angeltors-ink relative flex-col justify-between overflow-hidden p-12 lg:p-16">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />

          <div className="absolute -top-24 -right-24 w-96 h-96 bg-angeltors-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-angeltors-cyan/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Section */}
          <div className="relative z-10 flex justify-between items-center w-full">
            <Link
              to="/"
              className="inline-flex items-center group text-slate-400 hover:text-white transition-colors text-sm font-bold"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to website
            </Link>
          </div>

          {/* Center Content - Typographic Minimal Modern Design */}
          <div className="relative z-10 max-w-lg my-auto py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6">
                Fueling The Next <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-angeltors-accent">
                  Wave of Growth.
                </span>
              </h2>

              <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12">
                Join an exclusive network connecting high-signal founders with accredited angel investors and industry leaders.
              </p>

              {/* Minimalist Icon Highlights (InvestWithUs style) */}
              <div className="space-y-8">
                {highlights.map((pt, idx) => {
                  const Icon = pt.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                      className="flex items-start gap-5 group cursor-default"
                    >
                      <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-angeltors-accent/10 text-angeltors-accent border border-angeltors-accent/20 group-hover:bg-angeltors-accent group-hover:text-white transition-all duration-500 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                          {pt.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">
                          {pt.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer Section */}
          <div className="relative z-10 flex items-center justify-between text-slate-500 text-sm font-medium pt-8 border-t border-white/10">
            <p>© Angeltors Private Limited</p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Sparkles className="w-4 h-4 text-angeltors-accent" />
              <span>Vetted Startup Ecosystem</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Register Form Section */}
        <div className="w-full lg:w-[55%] flex items-center justify-center p-8 sm:p-12 relative overflow-y-auto max-h-screen">
          {/* Mobile Back Button */}
          <Link
            to="/"
            className="lg:hidden absolute top-8 left-8 text-slate-500 hover:text-angeltors-ink transition-colors flex items-center group font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[440px] my-auto py-6"
          >
            {/* Form Logo */}
            <div className="flex justify-center mb-6">
              <img
                src="/images/Angeltors_logo.png"
                alt="Angeltors"
                className="h-11 w-auto object-contain"
              />
            </div>

            {/* Headers */}
            <div className="text-center mb-7 space-y-2">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-angeltors-ink">
                Create Your Account
              </h1>
              <p className="text-slate-500 text-sm font-medium">
                Welcome to Angeltors. Select your profile type to get started.
              </p>
            </div>

            {/* Interactive Role Cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { id: "founder", label: "Founder", desc: "Raise capital", icon: Rocket },
                { id: "investor", label: "Investor", desc: "Back startups", icon: TrendingUp },
                { id: "other", label: "Partner", desc: "Ecosystem", icon: Building2 },
              ].map((item) => {
                const RoleIcon = item.icon;
                const isSelected = role === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRole(item.id as any)}
                    className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-angeltors-ink bg-angeltors-ink text-white shadow-md scale-[1.02]"
                        : "border-slate-200 bg-slate-50/60 text-slate-600 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <RoleIcon className={`w-5 h-5 mb-1.5 ${isSelected ? "text-angeltors-accent" : "text-slate-400"}`} />
                    <span className="text-xs font-black tracking-tight">{item.label}</span>
                    <span className={`text-[10px] font-bold ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                      {item.desc}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Registration Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-xs font-black uppercase tracking-wider text-angeltors-ink">
                  Full Name <span className="text-angeltors-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-3 text-sm text-angeltors-ink font-medium placeholder:text-slate-400 focus:border-angeltors-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-angeltors-accent/10 transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-black uppercase tracking-wider text-angeltors-ink">
                  Email Address <span className="text-angeltors-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-3 text-sm text-angeltors-ink font-medium placeholder:text-slate-400 focus:border-angeltors-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-angeltors-accent/10 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-xs font-black uppercase tracking-wider text-angeltors-ink">
                  Password <span className="text-angeltors-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Minimum 8 characters"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-10 pr-11 py-3 text-sm text-angeltors-ink font-medium placeholder:text-slate-400 focus:border-angeltors-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-angeltors-accent/10 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-angeltors-ink transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Password Strength Bar */}
                {formData.password.length > 0 && (
                  <div className="pt-1.5 space-y-1">
                    <div className="flex gap-1 h-1.5">
                      <div className={`h-full flex-1 rounded-full transition-all duration-300 ${formData.password.length > 0 ? "bg-red-400" : "bg-slate-200"}`} />
                      <div className={`h-full flex-1 rounded-full transition-all duration-300 ${formData.password.length >= 6 ? "bg-amber-400" : "bg-slate-200"}`} />
                      <div className={`h-full flex-1 rounded-full transition-all duration-300 ${formData.password.length >= 8 ? "bg-emerald-500" : "bg-slate-200"}`} />
                    </div>
                    <p className="text-[11px] font-bold text-slate-400">
                      {formData.password.length < 6 ? "Weak password" : formData.password.length < 8 ? "Medium strength" : "Strong password"}
                    </p>
                  </div>
                )}
              </div>

              {/* Checkbox Terms */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-angeltors-accent focus:ring-angeltors-accent cursor-pointer accent-angeltors-ink"
                />
                <label htmlFor="terms" className="text-xs text-slate-500 font-medium leading-relaxed cursor-pointer select-none">
                  I agree to the{" "}
                  <Link to="/terms-of-use" className="font-bold text-angeltors-ink hover:underline">
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" className="font-bold text-angeltors-ink hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-angeltors-ink py-4 text-sm font-black text-white shadow-md transition-all duration-300 hover:bg-angeltors-accent hover:shadow-xl hover:shadow-angeltors-accent/20 hover:-translate-y-0.5 active:scale-[0.98] mt-2 cursor-pointer"
              >
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center text-sm text-slate-500 font-medium">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-angeltors-ink hover:text-angeltors-accent transition-colors">
                Log in
              </Link>
            </div>

            {/* Divider */}
            <div className="relative my-7 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                OR
              </div>
            </div>

            {/* Social Sign Up Buttons */}
            <div className="space-y-3">
              <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-3.5 text-xs sm:text-sm font-bold text-slate-700 transition-all duration-200 hover:bg-slate-50/80 hover:border-slate-300 shadow-xs cursor-pointer">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="Google" />
                <span>Continue with Google</span>
              </button>

              <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-3.5 text-xs sm:text-sm font-bold text-slate-700 transition-all duration-200 hover:bg-slate-50/80 hover:border-slate-300 shadow-xs cursor-pointer">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="LinkedIn" />
                <span>Continue with LinkedIn</span>
              </button>
            </div>

            {/* Footer Links */}
            <div className="mt-10 text-center text-xs font-semibold text-slate-400 flex justify-center gap-3">
              <span>© Angeltors</span>
              <span>·</span>
              <Link to="/privacy-policy" className="hover:text-slate-600 transition-colors">
                Privacy
              </Link>
              <span>·</span>
              <Link to="/terms-of-use" className="hover:text-slate-600 transition-colors">
                Terms
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
