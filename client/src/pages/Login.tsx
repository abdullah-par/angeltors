import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { loginUser } from "@/services/authService";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await loginUser({ email, password: "demo-password" });
    setLoading(false);

    if (res.success) {
      navigate("/");
    } else {
      setError(res.error || "Login failed. Please try again.");
    }
  };
  return (
    <>
      <Helmet>
        <title>Login | Angeltors</title>
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
                Where Visionaries <br />
                Meet Capital.
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

        {/* RIGHT PANEL - Login Form Section (from Image 1 Form) */}
        <div className="w-full lg:w-[55%] flex items-center justify-center p-8 sm:p-12 relative">
          
          {/* Mobile Back Button */}
          <Link to="/" className="lg:hidden absolute top-8 left-8 text-slate-500 hover:text-angeltors-ink transition-colors flex items-center group font-medium text-sm">
            <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[420px]"
          >
            {/* Form Logo (from Image 1) */}
            <div className="flex justify-center mb-8">
              <img 
                src="/images/Angeltors_logo.png" 
                alt="Angeltors" 
                className="h-12 w-auto object-contain" 
              />
            </div>

            {/* Headers */}
            <div className="text-center mb-8 space-y-2">
              <h1 className="text-3xl font-medium text-angeltors-ink">Welcome</h1>
              <p className="text-slate-600 text-[15px]">
                To access Angeltors, enter your email address.
              </p>
            </div>

            {/* Email Input */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <p className="text-xs font-bold text-red-500 text-center">{error}</p>
              )}
              <div className="relative mt-2">
                <label 
                  htmlFor="email" 
                  className="absolute -top-[9px] left-3 bg-white px-1.5 text-[13px] font-medium text-angeltors-ink tracking-wide"
                >
                  Email address<span className="text-angeltors-ink ml-0.5">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-[14px] border-[1.5px] border-angeltors-ink bg-transparent px-4 py-3.5 text-angeltors-ink focus:border-angeltors-accent focus:outline-none transition-colors"
                />
              </div>

              {/* Continue Button */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full rounded-full bg-angeltors-ink py-4 text-[15px] font-medium text-white transition-all hover:bg-angeltors-ink/90 active:scale-[0.98] shadow-sm disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Signing in..." : "Continue"}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center text-[15px] text-slate-600">
              Don't have an account?{" "}
              <Link to="/register" className="font-bold text-angeltors-ink hover:text-angeltors-accent transition-colors">
                Sign up
              </Link>
            </div>

            {/* Divider */}
            <div className="relative my-8 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative bg-white px-4 text-xs font-medium text-slate-400 tracking-wider">
                OR
              </div>
            </div>

            {/* Social Buttons */}
            <div className="space-y-3">
              <button className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-300 bg-white py-3.5 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-50">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                Continue with Google
              </button>
              
              <button className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-300 bg-white py-3.5 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-50">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-5 h-5" alt="LinkedIn" />
                Continue with LinkedIn
              </button>
            </div>

            {/* Footer Links (from Image 2) */}
            <div className="mt-12 text-center text-xs font-medium text-slate-400 flex justify-center gap-3">
              <span>© Angeltors</span>
              <span>·</span>
              <Link to="/privacy-policy" className="hover:text-slate-600 transition-colors">Privacy</Link>
              <span>·</span>
              <Link to="/terms-of-use" className="hover:text-slate-600 transition-colors">Terms</Link>
            </div>

          </motion.div>
        </div>
      </div>
    </>
  );
}
