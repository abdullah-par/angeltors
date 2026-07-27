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
  Upload,
  Camera,
  Check,
  FileText,
  FileUp,
  Sparkles,
  FileCheck
} from "lucide-react";

export type FreemiumForm = {
  name: string;
  email: string;
  countryCode: string;
  contact: string;
  address: string;
  linkedIn: string;
  photo: File | null;
  photoPreview: string | null;
  ideaText: string;
  ideaFile: File | null;
};

const COUNTRY_CODES = [
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+44", country: "GB", flag: "🇬🇧" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+65", country: "SG", flag: "🇸🇬" }
];

function Field({
  label,
  optional,
  required,
  children,
  error
}: {
  label: string;
  optional?: boolean;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
        {optional && <span className="ml-1 font-normal lowercase tracking-normal text-slate-400">(optional)</span>}
      </label>
      {children}
      {error && <span className="mt-1.5 text-xs font-medium text-red-500">{error}</span>}
    </div>
  );
}

export default function FreemiumOnboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [ideaInputType, setIdeaInputType] = useState<"text" | "file">("text");

  const [form, setForm] = useState<FreemiumForm>({
    name: "",
    email: "",
    countryCode: "+91",
    contact: "",
    address: "",
    linkedIn: "",
    photo: null,
    photoPreview: null,
    ideaText: "",
    ideaFile: null
  });

  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [submittedSteps, setSubmittedSteps] = useState<Record<number, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const updateForm = (key: keyof FreemiumForm, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[key];
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

  const handleIdeaFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      updateForm("ideaFile", file);
      markTouched("ideaFile");
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!form.name.trim()) newErrors.name = "Full name is required";
      if (!form.email.trim()) newErrors.email = "Email address is required";
      if (!form.contact.trim()) newErrors.contact = "Contact number is required";
      if (!form.address.trim()) newErrors.address = "Address is required";
      if (!form.linkedIn.trim()) newErrors.linkedIn = "LinkedIn profile is required";
      if (!form.photo) newErrors.photo = "Profile photo is required";
    } else if (step === 2) {
      if (ideaInputType === "text" && !form.ideaText.trim()) {
        newErrors.ideaText = "Idea summary text is mandatory";
      } else if (ideaInputType === "file" && !form.ideaFile) {
        newErrors.ideaFile = "Idea document file is mandatory";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setSubmittedSteps((prev) => ({ ...prev, [currentStep]: true }));
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
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
    navigate("/dashboard/freemium");
  };

  const steps = [
    { number: 1, title: "Founder Profile", icon: UserRound, subtitle: "Contact & personal details" },
    { number: 2, title: "Idea Submission", icon: Sparkles, subtitle: "Write or upload your startup idea" },
    { number: 3, title: "Review & Submit", icon: FileCheck, subtitle: "Review & complete your freemium profile" }
  ];

  const currentStepMeta = steps[currentStep - 1];

  return (
    <>
      <Helmet>
        <title>Freemium Onboarding | Angeltors</title>
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
              Freemium Onboarding
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
              Validate your startup business model and access initial ecosystem resources.
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
                        <h2 className="text-lg font-black text-angeltors-ink">Founder Details</h2>
                        <p className="text-xs text-slate-500">Contact information & LinkedIn profile</p>
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
                            placeholder="Your full name"
                          />
                        </Field>

                        <Field label="Email Address" required error={shouldShowError("email") ? errors.email : undefined}>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onBlur={() => markTouched("email")}
                            onChange={(e) => updateForm("email", e.target.value)}
                            className={getInputStyle("email", Boolean(form.email))}
                            placeholder="you@example.com"
                          />
                        </Field>

                        <Field label="Contact Number" required error={shouldShowError("contact") ? errors.contact : undefined}>
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
                            placeholder="https://linkedin.com/in/yourprofile"
                          />
                        </Field>

                        <div className="sm:col-span-2">
                          <Field label="Address" required error={shouldShowError("address") ? errors.address : undefined}>
                            <textarea
                              required
                              rows={3}
                              value={form.address}
                              onBlur={() => markTouched("address")}
                              onChange={(e) => updateForm("address", e.target.value)}
                              className={`${getInputStyle("address", Boolean(form.address))} min-h-[80px] resize-y`}
                              placeholder="Your current location or business address"
                            />
                          </Field>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Field label="Profile Photo" required error={shouldShowError("photo") ? errors.photo : undefined}>
                          <div className={`mt-2 flex flex-col items-center gap-5 rounded-2xl border-2 border-dashed p-6 transition sm:flex-row ${
                            shouldShowError("photo")
                              ? "border-red-300 bg-red-50/20"
                              : form.photo
                              ? "border-slate-300 bg-white"
                              : "border-slate-300/80 bg-slate-50/50 hover:border-angeltors-accent hover:bg-angeltors-accent/5"
                          }`}>
                            {form.photoPreview ? (
                              <img src={form.photoPreview} alt="Preview" className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-sm ring-2 ring-angeltors-accent/30" />
                            ) : (
                              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-angeltors-accent/10 text-angeltors-accent">
                                <Camera className="h-8 w-8" />
                              </div>
                            )}

                            <div className="flex-1 text-center sm:text-left">
                              <p className="text-sm font-bold text-angeltors-ink">
                                {form.photo ? form.photo.name : "Upload profile photo"}
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
                        <Sparkles className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Idea Summary Submission</h2>
                        <p className="text-xs text-slate-500">Provide text summary or upload your pitch document</p>
                      </div>
                    </div>

                    <div className="space-y-6 p-6 sm:p-8">
                      {/* Toggle Input Type */}
                      <div className="flex rounded-xl border border-slate-200 bg-slate-100/70 p-1">
                        <button
                          type="button"
                          onClick={() => setIdeaInputType("text")}
                          className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                            ideaInputType === "text"
                              ? "bg-white text-angeltors-ink shadow-2xs"
                              : "text-slate-500 hover:text-angeltors-ink"
                          }`}
                        >
                          Write Text Summary
                        </button>
                        <button
                          type="button"
                          onClick={() => setIdeaInputType("file")}
                          className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                            ideaInputType === "file"
                              ? "bg-white text-angeltors-ink shadow-2xs"
                              : "text-slate-500 hover:text-angeltors-ink"
                          }`}
                        >
                          Upload Document File
                        </button>
                      </div>

                      {ideaInputType === "text" ? (
                        <Field label="Idea Summary Text" required error={shouldShowError("ideaText") ? errors.ideaText : undefined}>
                          <textarea
                            required
                            rows={6}
                            value={form.ideaText}
                            onBlur={() => markTouched("ideaText")}
                            onChange={(e) => updateForm("ideaText", e.target.value)}
                            className={`${getInputStyle("ideaText", Boolean(form.ideaText))} min-h-[140px] resize-y`}
                            placeholder="Describe your startup concept, key problem solved, and target audience..."
                          />
                        </Field>
                      ) : (
                        <Field label="Upload Idea Document" required error={shouldShowError("ideaFile") ? errors.ideaFile : undefined}>
                          <div className="mt-2">
                            <label className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition hover:border-angeltors-accent hover:bg-angeltors-accent/5 ${
                              shouldShowError("ideaFile")
                                ? "border-red-300 bg-red-50/20"
                                : form.ideaFile
                                ? "border-slate-300 bg-white"
                                : "border-slate-300/80 bg-slate-50/60"
                            }`}>
                              <FileUp className="mb-2 h-9 w-9 text-slate-400" />
                              <span className="text-xs font-bold text-angeltors-ink">
                                {form.ideaFile ? form.ideaFile.name : "Upload Idea Document (PDF, DOCX)"}
                              </span>
                              <span className="mt-1 text-[11px] text-slate-400">
                                Max file size 10MB
                              </span>
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                onChange={handleIdeaFileUpload}
                              />
                            </label>
                          </div>
                        </Field>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-center gap-3.5 border-b border-slate-100 bg-slate-50/20 px-6 py-5 sm:px-8">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-angeltors-accent/10 text-angeltors-accent font-bold">
                        <FileCheck className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Review & Confirm Profile</h2>
                        <p className="text-xs text-slate-500">Verify your freemium application</p>
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
                          <h3 className="text-base font-bold text-angeltors-ink truncate">{form.name || "Founder Name"}</h3>
                          <p className="text-xs text-slate-500">{form.email} • {form.countryCode} {form.contact}</p>
                          <p className="text-xs text-slate-600 mt-1">{form.address}</p>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Idea Summary Submission</h4>
                        {ideaInputType === "text" ? (
                          <p className="text-xs text-slate-600 leading-relaxed">{form.ideaText || "No text provided"}</p>
                        ) : (
                          <p className="text-xs font-bold text-angeltors-ink flex items-center gap-2">
                            <FileText className="h-4 w-4 text-angeltors-accent" /> {form.ideaFile ? form.ideaFile.name : "No file attached"}
                          </p>
                        )}
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

                  {currentStep < 3 ? (
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
