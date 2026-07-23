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
    setError("");

    const nameTrimmed = formData.fullName.trim();
    const emailTrimmed = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameTrimmed) {
      setError("Please enter your full name.");
      return;
    }
    if (!emailTrimmed) {
      setError("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(emailTrimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!formData.password) {
      setError("Please enter a password.");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (!formData.agreeToTerms) {
      setError("You must agree to the Terms of Use and Privacy Policy.");
      return;
    }

    setLoading(true);
    const res = await registerUser({
      fullName: nameTrimmed,
      email: emailTrimmed,
      password: formData.password,
      role,
      agreeToTerms: formData.agreeToTerms,
    });

    setLoading(false);

    if (res.success) {
      navigate("/onboarding");
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
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-angeltors-accent rounded-full blur-[120px] mix-blend-screen pointer-events-none"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-angeltors-cyan rounded-full blur-[100px] mix-blend-screen pointer-events-none"
          />
          
          {/* Top Section */}
          <div className="relative z-10 flex justify-between items-center w-full">
            <Link to="/" className="inline-flex items-center group text-slate-400 hover:text-white transition-colors text-sm font-bold">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to website
            </Link>
          </div>

          {/* Center Content */}
          <div className="relative z-10 max-w-lg mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Fueling The Next <br />
                Wave of Growth.
              </h2>
              
              <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-md">
                Enter an exclusive ecosystem of high-signal founders, strategic investors, and industry experts building the future.
              </p>
            </motion.div>

            {/* Glassmorphic Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group max-w-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i, idx) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 rounded-full border-2 border-angeltors-ink bg-slate-800 flex items-center justify-center overflow-hidden relative"
                      style={{ zIndex: 10 - idx }}
                    >
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Member" className="w-full h-full object-cover opacity-90" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-angeltors-ink bg-angeltors-accent flex items-center justify-center relative z-0 text-white text-xs font-bold">
                    +2k
                  </div>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Active Members</p>
                  <p className="text-slate-400 text-sm font-medium">Founders & Investors</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="relative z-10 flex items-center justify-between text-slate-500 text-sm font-medium mt-12">
            <p>Empowering global innovation.</p>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-700"></span>
              <span className="w-2 h-2 rounded-full bg-slate-700"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Register Form Section */}
        <div className="w-full lg:w-[55%] flex items-center justify-center p-6 sm:p-8 relative">
          {/* Mobile Back Button */}
          <Link
            to="/"
            className="lg:hidden absolute top-6 left-6 text-slate-500 hover:text-angeltors-ink transition-colors flex items-center group font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[420px] my-auto py-2"
          >
            {/* Form Logo */}
            <div className="flex justify-center mb-4">
              <img
                src="/images/Angeltors_logo.png"
                alt="Angeltors"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Headers */}
            <div className="text-center mb-5">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-angeltors-ink">
                Create Your Account
              </h1>
            </div>

            {/* Registration Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && (
                <p className="text-xs font-bold text-red-500 text-center">{error}</p>
              )}

              {/* Full Name */}
              <div className="relative mt-2">
                <label 
                  htmlFor="fullName" 
                  className="absolute -top-[9px] left-3.5 bg-white px-1.5 text-[12px] font-medium text-angeltors-ink tracking-wide z-10"
                >
                  Full Name<span className="text-angeltors-ink ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full rounded-[14px] border-[1.5px] border-angeltors-ink bg-transparent px-4 py-3 text-sm text-angeltors-ink font-medium placeholder:text-slate-400 focus:border-angeltors-accent focus:outline-none transition-colors"
                />
              </div>

              {/* Email Address */}
              <div className="relative mt-2">
                <label 
                  htmlFor="email" 
                  className="absolute -top-[9px] left-3.5 bg-white px-1.5 text-[12px] font-medium text-angeltors-ink tracking-wide z-10"
                >
                  Email address<span className="text-angeltors-ink ml-0.5">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full rounded-[14px] border-[1.5px] border-angeltors-ink bg-transparent px-4 py-3 text-sm text-angeltors-ink font-medium placeholder:text-slate-400 focus:border-angeltors-accent focus:outline-none transition-colors"
                />
              </div>

              {/* Password */}
              <div className="relative mt-2">
                <label 
                  htmlFor="password" 
                  className="absolute -top-[9px] left-3.5 bg-white px-1.5 text-[12px] font-medium text-angeltors-ink tracking-wide z-10"
                >
                  Password<span className="text-angeltors-ink ml-0.5">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Minimum 8 characters"
                    className="w-full rounded-[14px] border-[1.5px] border-angeltors-ink bg-transparent pl-4 pr-11 py-3 text-sm text-angeltors-ink font-medium placeholder:text-slate-400 focus:border-angeltors-accent focus:outline-none transition-colors"
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
              <div className="flex items-start gap-3 pt-1">
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
                disabled={loading}
                className="w-full rounded-full bg-angeltors-ink py-4 text-[15px] font-medium text-white transition-all hover:bg-angeltors-ink/90 active:scale-[0.98] shadow-sm disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <span>{loading ? "Creating Account..." : "Create Account"}</span>
                {!loading && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-4 text-center text-sm text-slate-500 font-medium">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-angeltors-ink hover:text-angeltors-accent transition-colors">
                Log in
              </Link>
            </div>

            {/* Divider */}
            <div className="relative my-4 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                OR
              </div>
            </div>

            {/* Social Sign Up Buttons */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => navigate("/onboarding")}
                className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-300 bg-white py-3 text-xs sm:text-sm font-bold text-slate-700 transition-all duration-200 hover:bg-slate-50 shadow-xs cursor-pointer"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="Google" />
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/onboarding")}
                className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-300 bg-white py-3 text-xs sm:text-sm font-bold text-slate-700 transition-all duration-200 hover:bg-slate-50 shadow-xs cursor-pointer"
              >
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="LinkedIn" />
                <span>Continue with LinkedIn</span>
              </button>
            </div>

            {/* Footer Links */}
            <div className="mt-6 text-center text-xs font-semibold text-slate-400 flex justify-center gap-3">
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
