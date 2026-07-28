import { useState, type ChangeEvent, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  UserRound,
  ShieldCheck,
  Award,
  Lock,
  Upload,
  Camera,
  Check,
  Sparkles,
  FileCheck,
  Briefcase,
  Plus
} from "lucide-react";

export type MentorForm = {
  name: string;
  email: string;
  countryCode: string;
  contact: string;
  photo: File | null;
  photoPreview: string | null;
  sector: string;
  linkedIn: string;
  keySkills: string[];
  briefSummary: string;
  experience: string;
  qualification: string;
};

const COUNTRY_CODES = [
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+44", country: "GB", flag: "🇬🇧" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+61", country: "AU", flag: "🇦🇺" }
];

const SKILL_OPTIONS = [
  "Fundraising & Pitching",
  "Product Strategy",
  "Go-To-Market (GTM)",
  "Tech Architecture",
  "Financial Modeling",
  "Growth & Marketing",
  "Legal & Valuation",
  "Operations & Hiring",
  "International Expansion"
];

function Field({
  label,
  optional,
  required,
  children,
  error,
  badge
}: {
  label: string;
  optional?: boolean;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
  badge?: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
          {optional && <span className="ml-1 font-normal lowercase tracking-normal text-slate-400">(optional)</span>}
        </label>
        {badge && (
          <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
            <Lock className="h-3 w-3 text-amber-600" /> {badge}
          </span>
        )}
      </div>
      {children}
      {error && <span className="mt-1.5 text-xs font-medium text-red-500">{error}</span>}
    </div>
  );
}

export default function MentorOnboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [form, setForm] = useState<MentorForm>({
    name: "",
    email: "",
    countryCode: "+91",
    contact: "",
    photo: null,
    photoPreview: null,
    sector: "FinTech",
    linkedIn: "",
    keySkills: [],
    briefSummary: "",
    experience: "",
    qualification: ""
  });

  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [submittedSteps, setSubmittedSteps] = useState<Record<number, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [customSkillInput, setCustomSkillInput] = useState("");

  const markTouched = (fieldKey: string) => {
    setTouchedFields((prev) => ({ ...prev, [fieldKey]: true }));
  };

  const shouldShowError = (fieldKey: string): boolean => {
    const isTouched = Boolean(touchedFields[fieldKey]);
    const isSubmitted = Boolean(submittedSteps[currentStep]);
    return (isTouched || isSubmitted) && Boolean(errors[fieldKey]);
  };

  const getInputStyle = (errorKey: string, isFilled: boolean) => {
    if (shouldShowError(errorKey)) {
      return "mt-1.5 w-full rounded-xl border border-red-300 bg-red-50/20 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10";
    }
    if (isFilled) {
      return "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-angeltors-ink outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-angeltors-accent focus:ring-4 focus:ring-angeltors-accent/10";
    }
    return "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-angeltors-ink outline-none transition placeholder:text-slate-400 focus:border-angeltors-accent focus:bg-white focus:ring-4 focus:ring-angeltors-accent/10";
  };

  const updateForm = (key: keyof MentorForm, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      });
    }
  };

  const toggleSkill = (skill: string) => {
    setForm((prev) => {
      const exists = prev.keySkills.includes(skill);
      const newSkills = exists
        ? prev.keySkills.filter((s) => s !== skill)
        : [...prev.keySkills, skill];
      return { ...prev, keySkills: newSkills };
    });
    if (errors.keySkills) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.keySkills;
        return updated;
      });
    }
  };

  const addCustomSkill = () => {
    const trimmed = customSkillInput.trim();
    if (!trimmed) return;
    if (!form.keySkills.includes(trimmed)) {
      setForm((prev) => ({ ...prev, keySkills: [...prev.keySkills, trimmed] }));
    }
    setCustomSkillInput("");
    if (errors.keySkills) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.keySkills;
        return updated;
      });
    }
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    updateForm("photo", file);
    setForm((prev) => ({ ...prev, photoPreview: previewUrl }));
    markTouched("photo");
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!form.name.trim()) newErrors.name = "Full name is required";
      if (!form.email.trim()) newErrors.email = "Email address is required";
      if (!form.contact.trim()) newErrors.contact = "Contact number is required";
      if (!form.photo) newErrors.photo = "Mentor profile photo is required";
    } else if (step === 2) {
      if (!form.sector.trim()) newErrors.sector = "Primary sector is required";
      if (!form.linkedIn.trim()) newErrors.linkedIn = "LinkedIn profile is required";
      if (!form.qualification.trim()) newErrors.qualification = "Qualification is required";
      if (!form.experience.trim()) newErrors.experience = "Experience details are required";
    } else if (step === 3) {
      if (form.keySkills.length === 0) newErrors.keySkills = "Please select at least one key skill";
      if (!form.briefSummary.trim()) newErrors.briefSummary = "Brief summary is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setSubmittedSteps((prev) => ({ ...prev, [currentStep]: true }));
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex);
    } else if (stepIndex > currentStep) {
      setSubmittedSteps((prev) => ({ ...prev, [currentStep]: true }));
      let canAdvance = true;
      for (let s = 1; s < stepIndex; s++) {
        if (!validateStep(s)) {
          canAdvance = false;
          setCurrentStep(s);
          break;
        }
      }
      if (canAdvance) setCurrentStep(stepIndex);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/dashboard/mentor");
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: UserRound, subtitle: "Basic details to set up your profile" },
    { number: 2, title: "Background", icon: Award, subtitle: "Your experience and education" },
    { number: 3, title: "Skills & Bio", icon: Sparkles, subtitle: "What are your core strengths?" },
    { number: 4, title: "Review", icon: FileCheck, subtitle: "Look over your details before submitting" }
  ];

  const currentStepMeta = steps[currentStep - 1];

  return (
    <>
      <Helmet>
        <title>Mentor Onboarding | Angeltors</title>
      </Helmet>

      <div className="min-h-screen bg-[#F8FAFC] font-sans text-angeltors-ink selection:bg-angeltors-accent selection:text-white">
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 px-5 py-4 backdrop-blur-md sm:px-8">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 transition hover:text-angeltors-ink"
            >
              <ArrowLeft className="h-4 w-4" /> Change Profile
            </Link>
            <Link to="/">
              <img src="/images/Angeltors_logo.png" alt="Angeltors" className="h-7 w-auto" />
            </Link>
            <div className="w-24" />
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="mb-8 text-center sm:text-left">
            <h1 className="text-3xl font-black tracking-tight text-angeltors-ink sm:text-4xl">
              Mentor Onboarding
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
              Share your industry expertise to mentor promising founders on Angeltors.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm">
            {/* Stepper */}
            <div className="border-b border-slate-100 bg-slate-50/40 p-5 sm:p-7">
              <div className="relative flex items-center justify-between">
                <div className="absolute left-6 right-6 top-5 -z-0 h-1 rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-angeltors-accent transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                  />
                </div>

                {steps.map((step) => {
                  const isCompleted = currentStep > step.number;
                  const isActive = currentStep === step.number;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => handleStepClick(step.number)}
                      className="group relative z-10 flex flex-col items-center focus:outline-none"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                          isCompleted
                            ? "cursor-pointer bg-angeltors-ink text-white ring-4 ring-white shadow-md"
                            : isActive
                            ? "scale-110 bg-angeltors-accent text-white ring-4 ring-angeltors-accent/15 shadow-md"
                            : "border-2 border-slate-300 bg-white text-slate-400 group-hover:border-slate-400"
                        }`}
                      >
                        {isCompleted ? <Check className="h-5 w-5 stroke-[3]" /> : step.number}
                      </div>

                      <span
                        className={`mt-2 hidden text-xs font-bold transition-colors sm:block ${
                          isActive
                            ? "text-angeltors-accent"
                            : isCompleted
                            ? "text-slate-700"
                            : "text-slate-400"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={onSubmit}>
              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {currentStep === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-center gap-3.5 border-b border-slate-100 bg-slate-50/20 px-6 py-5 sm:px-8">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-angeltors-accent/10 text-angeltors-accent font-bold">
                        <UserRound className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Personal Info</h2>
                        <p className="text-xs text-slate-500">Basic details to set up your profile</p>
                      </div>
                    </div>

                    <div className="space-y-6 p-6 sm:p-8">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Full Name" required error={shouldShowError("name") ? errors.name : undefined}>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onBlur={() => markTouched("name")}
                            onChange={(e) => updateForm("name", e.target.value)}
                            className={getInputStyle("name", Boolean(form.name))}
                            placeholder="First and last name"
                          />
                        </Field>

                        <Field label="Email Address" required badge="Private (only admins can see this)" error={shouldShowError("email") ? errors.email : undefined}>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onBlur={() => markTouched("email")}
                            onChange={(e) => updateForm("email", e.target.value)}
                            className={getInputStyle("email", Boolean(form.email))}
                            placeholder="name@company.com"
                          />
                        </Field>

                        <Field label="Contact Number" required badge="Private (only admins can see this)" error={shouldShowError("contact") ? errors.contact : undefined}>
                          <div className="mt-1.5 flex gap-2">
                            <select
                              value={form.countryCode}
                              onChange={(e) => updateForm("countryCode", e.target.value)}
                              className="rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-3 text-xs font-bold text-slate-700 outline-none transition focus:border-angeltors-accent focus:bg-white shrink-0"
                            >
                              {COUNTRY_CODES.map((c) => (
                                <option key={`${c.country}-${c.code}`} value={c.code}>
                                  {c.flag} {c.code}
                                </option>
                              ))}
                            </select>
                            <input
                              type="tel"
                              required
                              value={form.contact}
                              onBlur={() => markTouched("contact")}
                              onChange={(e) => updateForm("contact", e.target.value)}
                              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                                shouldShowError("contact")
                                  ? "border-red-300 bg-red-50/20 text-slate-900 placeholder:text-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                                  : form.contact
                                  ? "border-slate-300 bg-white text-angeltors-ink placeholder:text-slate-400 hover:border-slate-400 focus:border-angeltors-accent focus:ring-4 focus:ring-angeltors-accent/10"
                                  : "border-slate-200 bg-slate-50/50 text-angeltors-ink placeholder:text-slate-400 focus:border-angeltors-accent focus:bg-white focus:ring-4 focus:ring-angeltors-accent/10"
                              }`}
                              placeholder="98765 43210"
                            />
                          </div>
                        </Field>
                      </div>

                      <div className="pt-2">
                        <Field label="Mentor Profile Photo" required error={shouldShowError("photo") ? errors.photo : undefined}>
                          <div className={`mt-2 flex flex-col items-center gap-5 rounded-2xl border-2 border-dashed p-6 transition sm:flex-row ${
                            shouldShowError("photo")
                              ? "border-red-300 bg-red-50/20"
                              : form.photo
                              ? "border-slate-300 bg-white"
                              : "border-slate-300/80 bg-slate-50/50 hover:border-angeltors-accent hover:bg-angeltors-accent/5"
                          }`}>
                            {form.photoPreview ? (
                              <img
                                src={form.photoPreview}
                                alt="Mentor preview"
                                className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-sm ring-2 ring-angeltors-accent/30"
                              />
                            ) : (
                              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-angeltors-accent/10 text-angeltors-accent">
                                <Camera className="h-8 w-8" />
                              </div>
                            )}

                            <div className="flex-1 text-center sm:text-left">
                              <p className="text-sm font-bold text-angeltors-ink">
                                {form.photo ? form.photo.name : "Add a photo"}
                              </p>
                              <p className="mt-0.5 text-xs text-slate-400">
                                JPG or PNG under 5MB. A clear headshot works best.
                              </p>
                              <label className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-angeltors-ink shadow-2xs transition hover:border-angeltors-accent hover:text-angeltors-accent">
                                <Upload className="h-3.5 w-3.5" />
                                {form.photo ? "Change Photo" : "Upload Photo"}
                                <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                              </label>
                            </div>
                          </div>
                        </Field>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {currentStep === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-center gap-3.5 border-b border-slate-100 bg-slate-50/20 px-6 py-5 sm:px-8">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-angeltors-accent/10 text-angeltors-accent font-bold">
                        <Award className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Your Background</h2>
                        <p className="text-xs text-slate-500">Your experience and education</p>
                      </div>
                    </div>

                    <div className="space-y-5 p-6 sm:p-8">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Primary Sector" required error={shouldShowError("sector") ? errors.sector : undefined}>
                          <input
                            type="text"
                            required
                            value={form.sector}
                            onBlur={() => markTouched("sector")}
                            onChange={(e) => updateForm("sector", e.target.value)}
                            className={getInputStyle("sector", Boolean(form.sector))}
                            placeholder="e.g. FinTech, AI/ML, SaaS"
                          />
                        </Field>

                        <Field label="LinkedIn Profile" required error={shouldShowError("linkedIn") ? errors.linkedIn : undefined}>
                          <input
                            type="url"
                            required
                            value={form.linkedIn}
                            onBlur={() => markTouched("linkedIn")}
                            onChange={(e) => updateForm("linkedIn", e.target.value)}
                            className={getInputStyle("linkedIn", Boolean(form.linkedIn))}
                            placeholder="https://linkedin.com/in/profile"
                          />
                        </Field>

                        <Field label="Qualification" required error={shouldShowError("qualification") ? errors.qualification : undefined}>
                          <input
                            type="text"
                            required
                            value={form.qualification}
                            onBlur={() => markTouched("qualification")}
                            onChange={(e) => updateForm("qualification", e.target.value)}
                            className={getInputStyle("qualification", Boolean(form.qualification))}
                            placeholder="e.g. MBA, Ph.D in CS"
                          />
                        </Field>

                        <Field label="Experience" required error={shouldShowError("experience") ? errors.experience : undefined}>
                          <input
                            type="text"
                            required
                            value={form.experience}
                            onBlur={() => markTouched("experience")}
                            onChange={(e) => updateForm("experience", e.target.value)}
                            className={getInputStyle("experience", Boolean(form.experience))}
                            placeholder="e.g. 10+ years in product management"
                          />
                        </Field>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-center gap-3.5 border-b border-slate-100 bg-slate-50/20 px-6 py-5 sm:px-8">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-angeltors-accent/10 text-angeltors-accent font-bold">
                        <Sparkles className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Keyskills & Bio Summary</h2>
                        <p className="text-xs text-slate-500">What are your core strengths?</p>
                      </div>
                    </div>

                    <div className="space-y-6 p-6 sm:p-8">
                      <Field label="Keyskills" required error={shouldShowError("keySkills") ? errors.keySkills : undefined}>
                        <div className="flex flex-wrap gap-2.5 mt-2">
                          {SKILL_OPTIONS.map((skill) => {
                            const isSelected = form.keySkills.includes(skill);
                            return (
                              <button
                                key={skill}
                                type="button"
                                onClick={() => toggleSkill(skill)}
                                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                                  isSelected
                                    ? "bg-angeltors-accent text-white shadow-2xs"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                              >
                                {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                                {skill}
                              </button>
                            );
                          })}
                          {/* Custom user-defined skill tags */}
                          {form.keySkills
                            .filter((s) => !SKILL_OPTIONS.includes(s))
                            .map((custom) => (
                              <button
                                key={custom}
                                type="button"
                                onClick={() => toggleSkill(custom)}
                                className="inline-flex items-center gap-1.5 rounded-full bg-angeltors-accent px-3.5 py-1.5 text-xs font-bold text-white shadow-2xs transition-all"
                              >
                                <Check className="h-3.5 w-3.5 stroke-[3]" />
                                {custom}
                              </button>
                            ))}
                          {/* Add custom tag input */}
                          <div className="inline-flex items-center gap-1 rounded-full border border-dashed border-slate-300 bg-white pr-1 pl-2 py-1 text-xs transition focus-within:border-angeltors-accent focus-within:ring-2 focus-within:ring-angeltors-accent/15">
                            <input
                              type="text"
                              value={customSkillInput}
                              onChange={(e) => setCustomSkillInput(e.target.value)}
                              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addCustomSkill(); } }}
                              placeholder="Add skill…"
                              className="w-24 bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
                            />
                            <button
                              type="button"
                              onClick={addCustomSkill}
                              className="flex h-5 w-5 items-center justify-center rounded-full bg-angeltors-accent text-white transition hover:bg-angeltors-accent-light"
                            >
                              <Plus className="h-3 w-3 stroke-[3]" />
                            </button>
                          </div>
                        </div>
                      </Field>

                      <Field label="Brief Professional Summary" required error={shouldShowError("briefSummary") ? errors.briefSummary : undefined}>
                        <textarea
                          required
                          rows={4}
                          value={form.briefSummary}
                          onBlur={() => markTouched("briefSummary")}
                          onChange={(e) => updateForm("briefSummary", e.target.value)}
                          className={`${getInputStyle("briefSummary", Boolean(form.briefSummary))} min-h-[110px] resize-y`}
                          placeholder="Share your mentoring philosophy, key achievements, and how you support founders..."
                        />
                      </Field>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4 */}
                {currentStep === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-center gap-3.5 border-b border-slate-100 bg-slate-50/20 px-6 py-5 sm:px-8">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-angeltors-accent/10 text-angeltors-accent font-bold">
                        <FileCheck className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Review your details</h2>
                        <p className="text-xs text-slate-500">Look over your info before submitting</p>
                      </div>
                    </div>

                    <div className="space-y-6 p-6 sm:p-8">
                      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
                        {form.photoPreview ? (
                          <img src={form.photoPreview} alt={form.name} className="h-16 w-16 rounded-2xl object-cover ring-2 ring-angeltors-accent/30 shrink-0" />
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-angeltors-accent/10 text-angeltors-accent shrink-0">
                            <UserRound className="h-8 w-8" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold text-angeltors-ink truncate">{form.name || "Mentor Name"}</h3>
                          <p className="text-xs text-slate-500">{form.sector} • {form.qualification}</p>
                          <p className="text-xs text-slate-600 mt-1">{form.experience}</p>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Keyskills</h4>
                        <div className="flex flex-wrap gap-2">
                          {form.keySkills.map((skill) => (
                            <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Bar */}
              <div className="border-t border-slate-100 bg-slate-50/60 px-6 py-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto">
                  {currentStep > 1 ? (
                    <button type="button" onClick={handleBack} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-2xs transition hover:bg-slate-50 sm:text-sm">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  ) : (
                    <button type="button" disabled className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-400 cursor-not-allowed opacity-60 sm:text-sm">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  )}
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                  <span className="text-xs font-bold text-slate-500">
                    Step {currentStep} of {steps.length}: <span className="font-normal text-slate-400">{currentStepMeta.title}</span>
                  </span>

                  {currentStep < 4 ? (
                    <button type="button" onClick={handleNext} className="inline-flex items-center gap-2 rounded-xl bg-angeltors-ink px-6 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-slate-800 sm:text-sm">
                      Next <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-angeltors-accent px-7 py-3 text-xs font-black text-white shadow-md transition hover:bg-angeltors-accent-light sm:text-sm">
                      <ShieldCheck className="h-4 w-4 text-emerald-300" /> Complete Profile <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
