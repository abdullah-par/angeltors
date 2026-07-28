import { useState, type ChangeEvent, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  UserRound,
  ShieldCheck,
  Building2,
  Lock,
  Upload,
  Camera,
  CheckCircle2,
  Check,
  PieChart,
  FileCheck,
  Plus
} from "lucide-react";

export type InvestorForm = {
  name: string;
  email: string;
  countryCode: string;
  contact: string;
  linkedIn: string;
  photo: File | null;
  photoPreview: string | null;
  officeAddress: string;
  panNumber: string;
  sectors: string[];
  dpId: string;
  repositoryName: "NSDL" | "CDSL / CTSL";
  dpName: string;
};

const COUNTRY_CODES = [
  { code: "+91", country: "IN", flag: "🇮🇳", label: "India (+91)" },
  { code: "+1", country: "US", flag: "🇺🇸", label: "USA/Canada (+1)" },
  { code: "+44", country: "GB", flag: "🇬🇧", label: "UK (+44)" },
  { code: "+971", country: "AE", flag: "🇦🇪", label: "UAE (+971)" },
  { code: "+65", country: "SG", flag: "🇸🇬", label: "Singapore (+65)" },
  { code: "+61", country: "AU", flag: "🇦🇺", label: "Australia (+61)" },
  { code: "+49", country: "DE", flag: "🇩🇪", label: "Germany (+49)" },
  { code: "+33", country: "FR", flag: "🇫🇷", label: "France (+33)" },
  { code: "+81", country: "JP", flag: "🇯🇵", label: "Japan (+81)" }
];

const SECTOR_OPTIONS = [
  "FinTech",
  "HealthTech",
  "AI & ML",
  "SaaS & B2B",
  "EdTech",
  "CleanTech & Energy",
  "DeepTech",
  "E-Commerce & D2C",
  "Consumer & Retail",
  "Web3 & Blockchain",
  "BioTech & Pharma",
  "Logistics & Supply Chain",
  "AgriTech"
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

export default function InvestorOnboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [form, setForm] = useState<InvestorForm>({
    name: "",
    email: "",
    countryCode: "+91",
    contact: "",
    linkedIn: "",
    photo: null,
    photoPreview: null,
    officeAddress: "",
    panNumber: "",
    sectors: [],
    dpId: "",
    repositoryName: "NSDL",
    dpName: ""
  });

  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [submittedSteps, setSubmittedSteps] = useState<Record<number, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [customSectorInput, setCustomSectorInput] = useState("");

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

  const updateForm = (key: keyof InvestorForm, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      });
    }
  };

  const toggleSector = (sector: string) => {
    setForm((prev) => {
      const exists = prev.sectors.includes(sector);
      const newSectors = exists
        ? prev.sectors.filter((s) => s !== sector)
        : [...prev.sectors, sector];
      return { ...prev, sectors: newSectors };
    });
    if (errors.sectors) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.sectors;
        return updated;
      });
    }
  };

  const addCustomSector = () => {
    const trimmed = customSectorInput.trim();
    if (!trimmed) return;
    if (!form.sectors.includes(trimmed)) {
      setForm((prev) => ({ ...prev, sectors: [...prev.sectors, trimmed] }));
    }
    setCustomSectorInput("");
    if (errors.sectors) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.sectors;
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
      if (!form.linkedIn.trim()) newErrors.linkedIn = "LinkedIn profile URL is required";
      if (!form.photo) newErrors.photo = "Investor profile photo is required";
    } else if (step === 2) {
      if (!form.officeAddress.trim()) newErrors.officeAddress = "Office / communication address is required";
      if (!form.panNumber.trim()) newErrors.panNumber = "PAN Number is required";
    } else if (step === 3) {
      if (form.sectors.length === 0) newErrors.sectors = "Please select at least one sector to invest in";
      if (!form.dpId.trim()) newErrors.dpId = "DPID is required";
      if (!form.dpName.trim()) newErrors.dpName = "DEMAT account name is required";
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
    navigate("/dashboard/investor");
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: UserRound, subtitle: "Basic details to set up your profile" },
    { number: 2, title: "Address & PAN", icon: Building2, subtitle: "Where should we send your documents?" },
    { number: 3, title: "Sectors & DEMAT", icon: PieChart, subtitle: "What are you looking to invest in?" },
    { number: 4, title: "Review", icon: FileCheck, subtitle: "Look over your details before submitting" }
  ];

  const currentStepMeta = steps[currentStep - 1];

  return (
    <>
      <Helmet>
        <title>Angel Investor Onboarding | Angeltors</title>
      </Helmet>

      <div className="min-h-screen bg-[#F8FAFC] font-sans text-angeltors-ink selection:bg-angeltors-accent selection:text-white">
        {/* Navigation Header */}
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
          {/* Page Title */}
          <div className="mb-8 text-center sm:text-left">
            <h1 className="text-3xl font-black tracking-tight text-angeltors-ink sm:text-4xl">
              Angel Investor Onboarding
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
              Set up your accredited investor profile to access vetted high-growth startups.
            </p>
          </div>

          {/* ONE CONTINUOUS UNIFIED SURFACE PANEL */}
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm">
            {/* 1. Stepper Bar */}
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

              {/* Mobile Current Step Label */}
              <div className="mt-4 text-center text-xs font-bold text-angeltors-accent sm:hidden">
                Step {currentStep}: {steps[currentStep - 1].title}
              </div>
            </div>

            {/* 2. Active Step Form Container */}
            <form onSubmit={onSubmit}>
              <AnimatePresence mode="wait">
                {/* STEP 1: PERSONAL PROFILE */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
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

                        <Field
                          label="Email Address"
                          required
                          badge="Private (only admins can see this)"
                          error={shouldShowError("email") ? errors.email : undefined}
                        >
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

                        <Field
                          label="Contact Number"
                          required
                          badge="For registration only (Admin visible)"
                          error={shouldShowError("contact") ? errors.contact : undefined}
                        >
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

                        <Field label="LinkedIn Profile" required error={shouldShowError("linkedIn") ? errors.linkedIn : undefined}>
                          <input
                            type="url"
                            required
                            value={form.linkedIn}
                            onBlur={() => markTouched("linkedIn")}
                            onChange={(e) => updateForm("linkedIn", e.target.value)}
                            className={getInputStyle("linkedIn", Boolean(form.linkedIn))}
                            placeholder="https://linkedin.com/in/investorprofile"
                          />
                        </Field>
                      </div>

                      {/* Photo Upload */}
                      <div className="pt-2">
                        <Field label="Investor Profile Photo" required error={shouldShowError("photo") ? errors.photo : undefined}>
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
                                alt="Investor preview"
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
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={handlePhotoUpload}
                                />
                              </label>
                            </div>
                          </div>
                        </Field>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: ADDRESS & PAN */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3.5 border-b border-slate-100 bg-slate-50/20 px-6 py-5 sm:px-8">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-angeltors-accent/10 text-angeltors-accent font-bold">
                        <Building2 className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Address & Legal Identification</h2>
                        <p className="text-xs text-slate-500">Where should we send your documents?</p>
                      </div>
                    </div>

                    <div className="space-y-5 p-6 sm:p-8">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <Field label="Communication / Office Address" required error={shouldShowError("officeAddress") ? errors.officeAddress : undefined}>
                            <textarea
                              required
                              rows={3}
                              value={form.officeAddress}
                              onBlur={() => markTouched("officeAddress")}
                              onChange={(e) => updateForm("officeAddress", e.target.value)}
                              className={`${getInputStyle("officeAddress", Boolean(form.officeAddress))} min-h-[80px] resize-y`}
                              placeholder="Full office or official business communication address"
                            />
                          </Field>
                        </div>

                        <Field label="PAN Number" required error={shouldShowError("panNumber") ? errors.panNumber : undefined}>
                          <input
                            type="text"
                            required
                            maxLength={10}
                            value={form.panNumber}
                            onBlur={() => markTouched("panNumber")}
                            onChange={(e) => updateForm("panNumber", e.target.value.toUpperCase())}
                            className={`${getInputStyle("panNumber", Boolean(form.panNumber))} tracking-wider font-mono uppercase`}
                            placeholder="ABCDE1234F"
                          />
                        </Field>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: SECTORS & DEMAT */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3.5 border-b border-slate-100 bg-slate-50/20 px-6 py-5 sm:px-8">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-angeltors-accent/10 text-angeltors-accent font-bold">
                        <PieChart className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Investment Sectors & DEMAT Details</h2>
                        <p className="text-xs text-slate-500">What are you looking to invest in?</p>
                      </div>
                    </div>

                    <div className="space-y-7 p-6 sm:p-8">
                      {/* Sector Multi-select Tags */}
                      <Field label="Sectors / Domains to Invest" required error={shouldShowError("sectors") ? errors.sectors : undefined}>
                        <p className="text-xs text-slate-500 mb-3">
                          Select all the startup categories you're interested in:
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {SECTOR_OPTIONS.map((sector) => {
                            const isSelected = form.sectors.includes(sector);
                            return (
                              <button
                                key={sector}
                                type="button"
                                onClick={() => toggleSector(sector)}
                                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                                  isSelected
                                    ? "bg-angeltors-accent text-white shadow-2xs"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                              >
                                {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                                {sector}
                              </button>
                            );
                          })}
                          {/* Custom user-defined sector tags */}
                          {form.sectors
                            .filter((s) => !SECTOR_OPTIONS.includes(s))
                            .map((custom) => (
                              <button
                                key={custom}
                                type="button"
                                onClick={() => toggleSector(custom)}
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
                              value={customSectorInput}
                              onChange={(e) => setCustomSectorInput(e.target.value)}
                              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addCustomSector(); } }}
                              placeholder="Add sector…"
                              className="w-24 bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
                            />
                            <button
                              type="button"
                              onClick={addCustomSector}
                              className="flex h-5 w-5 items-center justify-center rounded-full bg-angeltors-accent text-white transition hover:bg-angeltors-accent-light"
                            >
                              <Plus className="h-3 w-3 stroke-[3]" />
                            </button>
                          </div>
                        </div>
                      </Field>

                      {/* DEMAT Details Box */}
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/40 p-5 space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          DEMAT Account Information
                        </h3>

                        <div className="grid gap-5 sm:grid-cols-3">
                          <Field label="DPID" required error={shouldShowError("dpId") ? errors.dpId : undefined}>
                            <input
                              type="text"
                              required
                              value={form.dpId}
                              onBlur={() => markTouched("dpId")}
                              onChange={(e) => updateForm("dpId", e.target.value)}
                              className={getInputStyle("dpId", Boolean(form.dpId))}
                              placeholder="e.g. IN300123"
                            />
                          </Field>

                          <Field label="Repository Name" required>
                            <select
                              value={form.repositoryName}
                              onChange={(e) => updateForm("repositoryName", e.target.value as any)}
                              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-angeltors-ink outline-none transition focus:border-angeltors-accent focus:ring-4 focus:ring-angeltors-accent/10"
                            >
                              <option value="NSDL">NSDL</option>
                              <option value="CDSL / CTSL">CDSL / CTSL</option>
                            </select>
                          </Field>

                          <Field label="DP Name (Account Name)" required error={shouldShowError("dpName") ? errors.dpName : undefined}>
                            <input
                              type="text"
                              required
                              value={form.dpName}
                              onBlur={() => markTouched("dpName")}
                              onChange={(e) => updateForm("dpName", e.target.value)}
                              className={getInputStyle("dpName", Boolean(form.dpName))}
                              placeholder="Name registered in Demat"
                            />
                          </Field>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: REVIEW & CONFIRM */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
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
                          <img
                            src={form.photoPreview}
                            alt={form.name}
                            className="h-16 w-16 rounded-2xl object-cover ring-2 ring-angeltors-accent/30 shrink-0"
                          />
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-angeltors-accent/10 text-angeltors-accent shrink-0">
                            <UserRound className="h-8 w-8" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-angeltors-ink truncate">{form.name || "Investor Name"}</h3>
                          </div>
                          <p className="text-xs text-slate-500 truncate">{form.email} • {form.countryCode} {form.contact}</p>
                          <p className="text-xs text-slate-600 mt-1">{form.officeAddress}</p>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Selected Investment Sectors</h4>
                        <div className="flex flex-wrap gap-2">
                          {form.sectors.map((sector) => (
                            <span key={sector} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                              {sector}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-5 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                        <div>
                          <span className="text-slate-400 block text-[10px] font-semibold uppercase">PAN Number</span>
                          <span className="font-bold text-angeltors-ink font-mono">{form.panNumber || "—"}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] font-semibold uppercase">DPID</span>
                          <span className="font-bold text-angeltors-ink">{form.dpId || "—"}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] font-semibold uppercase">Repository</span>
                          <span className="font-bold text-angeltors-ink">{form.repositoryName}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 3. Bottom Action Bar */}
              <div className="border-t border-slate-100 bg-slate-50/60 px-6 py-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-2xs transition hover:bg-slate-50 sm:text-sm"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-400 cursor-not-allowed opacity-60 sm:text-sm"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  )}
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                  <span className="text-xs font-bold text-slate-500">
                    Step {currentStep} of {steps.length}: <span className="font-normal text-slate-400">{currentStepMeta.title}</span>
                  </span>

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 rounded-xl bg-angeltors-ink px-6 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-slate-800 sm:text-sm"
                    >
                      Next <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-xl bg-angeltors-accent px-7 py-3 text-xs font-black text-white shadow-md transition hover:bg-angeltors-accent-light sm:text-sm"
                    >
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
