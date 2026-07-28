import { useState, type ChangeEvent, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  FileText,
  UserRound,
  Users,
  Image as ImageIcon,
  Camera,
  Upload,
  FileUp,
} from "lucide-react";
import {
  OnboardingLayout,
  OnboardingStepper,
  OnboardingFooter,
  OnboardingCard,
  OnboardingField,
} from "@/features/onboarding";

export type Founder = {
  name: string;
  email: string;
  countryCode: string;
  contact: string;
  linkedIn: string;
  qualifications: string;
  experience: string;
  photo: File | null;
  photoPreview?: string | null;
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
  { code: "+81", country: "JP", flag: "🇯🇵", label: "Japan (+81)" },
  { code: "+92", country: "PK", flag: "🇵🇰", label: "Pakistan (+92)" },
  { code: "+880", country: "BD", flag: "🇧🇩", label: "Bangladesh (+880)" }
];

const emptyFounder = (): Founder => ({
  name: "",
  email: "",
  countryCode: "+91",
  contact: "",
  linkedIn: "",
  qualifications: "",
  experience: "",
  photo: null,
  photoPreview: null
});

function LinkedInIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function StartupOnboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [founder, setFounder] = useState<Founder>(emptyFounder());
  const [coFounders, setCoFounders] = useState<Founder[]>([]);
  const [activeCoFounderTab, setActiveCoFounderTab] = useState<number>(0);

  const [startup, setStartup] = useState({
    name: "",
    website: "",
    legalName: "",
    cin: "",
    gst: "",
    dpit: "",
    address: "",
    email: "",
    sector: "",
    summary: "",
    pitchDeck: null as File | null,
    logo: null as File | null,
    logoPreview: null as string | null
  });

  // Track touched fields and step submissions to fix premature error display
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [submittedSteps, setSubmittedSteps] = useState<Record<number, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const markTouched = (fieldKey: string) => {
    setTouchedFields((prev) => ({ ...prev, [fieldKey]: true }));
  };

  // Determines whether an error message / red border should be displayed
  const shouldShowError = (fieldKey: string): boolean => {
    const isTouched = Boolean(touchedFields[fieldKey]);
    const isSubmitted = Boolean(submittedSteps[currentStep]);
    return (isTouched || isSubmitted) && Boolean(errors[fieldKey]);
  };

  const fieldError = (key: string) => (shouldShowError(key) ? errors[key] : undefined);

  const getInputStyle = (errorKey: string, isFilled: boolean) => {
    if (shouldShowError(errorKey)) {
      return "mt-1.5 w-full rounded-xl border border-red-300 bg-red-50/20 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10";
    }
    if (isFilled) {
      return "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-angeltors-ink outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-angeltors-accent focus:ring-4 focus:ring-angeltors-accent/10";
    }
    return "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-angeltors-ink outline-none transition placeholder:text-slate-400 focus:border-angeltors-accent focus:bg-white focus:ring-4 focus:ring-angeltors-accent/10";
  };

  // Helper updates
  const updateFounder = (key: keyof Founder, value: any, index?: number) => {
    if (index === undefined) {
      setFounder((current) => ({ ...current, [key]: value }));
      const errorMap: Record<string, string> = {
        name: "founderName",
        email: "founderEmail",
        contact: "founderContact",
        linkedIn: "founderLinkedIn",
        qualifications: "founderQualifications",
        photo: "founderPhoto"
      };
      if (errorMap[key]) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[errorMap[key]];
          return updated;
        });
      }
    } else {
      setCoFounders((current) =>
        current.map((co, i) => (i === index ? { ...co, [key]: value } : co))
      );
      const errKey = `co_${index}_${key}`;
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[errKey];
        return updated;
      });
    }
  };

  const updateStartup = (key: keyof typeof startup, value: any) => {
    setStartup((prev) => ({ ...prev, [key]: value }));
    const errorMap: Record<string, string> = {
      name: "startupName",
      legalName: "legalName",
      cin: "cin",
      email: "startupEmail",
      sector: "sector",
      address: "address",
      summary: "summary",
      pitchDeck: "pitchDeck",
      logo: "logo"
    };
    if (errorMap[key]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[errorMap[key]];
        return updated;
      });
    }
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>, index?: number) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);

    if (index === undefined) {
      updateFounder("photo", file);
      setFounder((current) => ({ ...current, photoPreview: previewUrl }));
      markTouched("founderPhoto");
    } else {
      updateFounder("photo", file, index);
      setCoFounders((current) =>
        current.map((co, i) =>
          i === index ? { ...co, photoPreview: previewUrl } : co
        )
      );
      markTouched(`co_${index}_photo`);
    }
  };

  const handlePitchDeckUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      updateStartup("pitchDeck", file);
      markTouched("pitchDeck");
    }
  };

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      updateStartup("logo", file);
      setStartup((prev) => ({ ...prev, logoPreview: previewUrl }));
      markTouched("logo");
    }
  };

  const changeCoFounderCount = (count: number) => {
    setCoFounders((current) =>
      Array.from({ length: count }, (_, index) => current[index] ?? emptyFounder())
    );
    if (activeCoFounderTab >= count) {
      setActiveCoFounderTab(Math.max(0, count - 1));
    }
  };

  // Step Validation logic
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!founder.name.trim()) newErrors.founderName = "Full name is required";
      if (!founder.email.trim()) newErrors.founderEmail = "Email is required";
      if (!founder.contact.trim()) newErrors.founderContact = "Contact number is required";
      if (!founder.linkedIn.trim()) newErrors.founderLinkedIn = "LinkedIn profile is required";
      if (!founder.qualifications.trim()) newErrors.founderQualifications = "Qualifications are required";
      if (!founder.photo) newErrors.founderPhoto = "Profile photo is required";
    } else if (step === 2) {
      coFounders.forEach((co, idx) => {
        if (!co.name.trim()) newErrors[`co_${idx}_name`] = `Co-founder ${idx + 1} name is required`;
        if (!co.email.trim()) newErrors[`co_${idx}_email`] = `Co-founder ${idx + 1} email is required`;
        if (!co.contact.trim()) newErrors[`co_${idx}_contact`] = `Co-founder ${idx + 1} contact is required`;
        if (!co.linkedIn.trim()) newErrors[`co_${idx}_linkedIn`] = `Co-founder ${idx + 1} LinkedIn is required`;
        if (!co.qualifications.trim()) newErrors[`co_${idx}_qualifications`] = `Co-founder ${idx + 1} qualification is required`;
        if (!co.photo) newErrors[`co_${idx}_photo`] = `Co-founder ${idx + 1} photo is required`;
      });
    } else if (step === 3) {
      if (!startup.name.trim()) newErrors.startupName = "Startup name is required";
      if (!startup.legalName.trim()) newErrors.legalName = "Legal entity name is required";
      if (!startup.cin.trim()) newErrors.cin = "CIN certificate number is mandatory";
      if (!startup.email.trim()) newErrors.startupEmail = "Legal entity email is required";
      if (!startup.sector.trim()) newErrors.sector = "Sector / domain is required";
      if (!startup.address.trim()) newErrors.address = "Legal entity address is required";
      if (!startup.summary.trim()) newErrors.summary = "Brief startup summary is required";
    } else if (step === 4) {
      if (!startup.pitchDeck) newErrors.pitchDeck = "Pitch Deck document is required";
      if (!startup.logo) newErrors.logo = "Startup Logo image is required";
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
    if (currentStep < 4) {
      handleNext();
      return;
    }
    setSubmittedSteps((prev) => ({ ...prev, [4]: true }));
    if (validateStep(4)) {
      navigate("/dashboard/startup");
    }
  };

  const steps = [
    { number: 1, title: "Founder Profile", icon: UserRound, subtitle: "Your primary founder information" },
    { number: 2, title: "Co-Founders", icon: Users, subtitle: "Specify co-founders details (if any)" },
    { number: 3, title: "Startup Details", icon: Building2, subtitle: "Your company, registration, and pitch information" },
    { number: 4, title: "Documents & Review", icon: FileText, subtitle: "Upload pitch deck & logo, review team profile" }
  ];

  const currentStepMeta = steps[currentStep - 1];
  const StepIcon = currentStepMeta.icon;

  return (
    <>
      <Helmet>
        <title>Startup Onboarding | Angeltors</title>
      </Helmet>

      <OnboardingLayout
        title="Tell us about your startup"
        description="Share your founder profile and company details to start your Angeltors journey."
      >
        <OnboardingCard>
          <OnboardingStepper steps={steps} currentStep={currentStep} onStepClick={handleStepClick} />

          <form onSubmit={onSubmit}>
            <AnimatePresence mode="wait">
                {/* STEP 1: PRIMARY FOUNDER */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Differentiated Section Header (Accent Icon Badge, not duplicate navy number) */}
                    <div className="flex items-center gap-3.5 border-b border-slate-100 bg-slate-50/20 px-6 py-5 sm:px-8">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-angeltors-accent/10 text-angeltors-accent font-bold">
                        <UserRound className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Primary Founder Profile</h2>
                        <p className="text-xs text-slate-500">Your details as lead founder</p>
                      </div>
                    </div>

                    <div className="space-y-6 p-6 sm:p-8">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <OnboardingField label="Full Name" required error={shouldShowError("founderName") ? errors.founderName : undefined}>
                          <input
                            type="text"
                            required
                            value={founder.name}
                            onBlur={() => markTouched("founderName")}
                            onChange={(e) => updateFounder("name", e.target.value)}
                            className={getInputStyle("founderName", Boolean(founder.name))}
                            placeholder="Your full name"
                          />
                        </OnboardingField>

                        <OnboardingField label="Email Address" required error={shouldShowError("founderEmail") ? errors.founderEmail : undefined}>
                          <input
                            type="email"
                            required
                            value={founder.email}
                            onBlur={() => markTouched("founderEmail")}
                            onChange={(e) => updateFounder("email", e.target.value)}
                            className={getInputStyle("founderEmail", Boolean(founder.email))}
                            placeholder="you@example.com"
                          />
                        </OnboardingField>

                        {/* Contact Number with Country Code Dropdown */}
                        <OnboardingField label="Contact Number" required error={shouldShowError("founderContact") ? errors.founderContact : undefined}>
                          <div className="mt-1.5 flex gap-2">
                            <select
                              value={founder.countryCode}
                              onChange={(e) => updateFounder("countryCode", e.target.value)}
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
                              value={founder.contact}
                              onBlur={() => markTouched("founderContact")}
                              onChange={(e) => updateFounder("contact", e.target.value)}
                              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                                shouldShowError("founderContact")
                                  ? "border-red-300 bg-red-50/20 text-slate-900 placeholder:text-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                                  : founder.contact
                                  ? "border-slate-300 bg-white text-angeltors-ink placeholder:text-slate-400 hover:border-slate-400 focus:border-angeltors-accent focus:ring-4 focus:ring-angeltors-accent/10"
                                  : "border-slate-200 bg-slate-50/50 text-angeltors-ink placeholder:text-slate-400 focus:border-angeltors-accent focus:bg-white focus:ring-4 focus:ring-angeltors-accent/10"
                              }`}
                              placeholder="98765 43210"
                            />
                          </div>
                        </OnboardingField>

                        <OnboardingField label="LinkedIn Profile" required error={shouldShowError("founderLinkedIn") ? errors.founderLinkedIn : undefined}>
                          <input
                            type="url"
                            required
                            value={founder.linkedIn}
                            onBlur={() => markTouched("founderLinkedIn")}
                            onChange={(e) => updateFounder("linkedIn", e.target.value)}
                            className={getInputStyle("founderLinkedIn", Boolean(founder.linkedIn))}
                            placeholder="https://linkedin.com/in/yourprofile"
                          />
                        </OnboardingField>

                        <OnboardingField label="Qualifications" required error={shouldShowError("founderQualifications") ? errors.founderQualifications : undefined}>
                          <input
                            type="text"
                            required
                            value={founder.qualifications}
                            onBlur={() => markTouched("founderQualifications")}
                            onChange={(e) => updateFounder("qualifications", e.target.value)}
                            className={getInputStyle("founderQualifications", Boolean(founder.qualifications))}
                            placeholder="e.g. B.Tech, MBA, MS in CS"
                          />
                        </OnboardingField>

                        <OnboardingField label="Experience" optional>
                          <input
                            type="text"
                            value={founder.experience}
                            onBlur={() => markTouched("founderExperience")}
                            onChange={(e) => updateFounder("experience", e.target.value)}
                            className={getInputStyle("founderExperience", Boolean(founder.experience))}
                            placeholder="e.g. 5+ yrs Product & Engineering at FinTech"
                          />
                        </OnboardingField>
                      </div>

                      {/* Considered Photo Upload Dropzone with Camera Icon & Accent Hover */}
                      <div className="pt-2">
                        <OnboardingField label="Founder Profile Photo" required error={shouldShowError("founderPhoto") ? errors.founderPhoto : undefined}>
                          <div className={`mt-2 flex flex-col items-center gap-5 rounded-2xl border-2 border-dashed p-6 transition sm:flex-row ${
                            shouldShowError("founderPhoto")
                              ? "border-red-300 bg-red-50/20"
                              : founder.photo
                              ? "border-slate-300 bg-white"
                              : "border-slate-300/80 bg-slate-50/50 hover:border-angeltors-accent hover:bg-angeltors-accent/5"
                          }`}>
                            {founder.photoPreview ? (
                              <img
                                src={founder.photoPreview}
                                alt="Founder preview"
                                className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-sm ring-2 ring-angeltors-accent/30"
                              />
                            ) : (
                              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-angeltors-accent/10 text-angeltors-accent">
                                <Camera className="h-8 w-8" />
                              </div>
                            )}

                            <div className="flex-1 text-center sm:text-left">
                              <p className="text-sm font-bold text-angeltors-ink">
                                {founder.photo ? founder.photo.name : "Upload profile photo"}
                              </p>
                              <p className="mt-0.5 text-xs text-slate-400">
                                JPG, PNG or WEBP up to 5MB. High resolution clear photo recommended.
                              </p>
                              <label className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-angeltors-ink shadow-2xs transition hover:border-angeltors-accent hover:text-angeltors-accent">
                                <Upload className="h-3.5 w-3.5" />
                                {founder.photo ? "Change Photo" : "Upload Photo"}
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => handlePhotoUpload(e)}
                                />
                              </label>
                            </div>
                          </div>
                        </OnboardingField>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: CO-FOUNDERS */}
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
                        <Users className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Co-Founders Profile</h2>
                        <p className="text-xs text-slate-500">Specify co-founders details (if any)</p>
                      </div>
                    </div>

                    <div className="space-y-7 p-6 sm:p-8">
                      {/* Co-founder Count Selector */}
                      <div>
                        <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-slate-700">
                          How many co-founders are part of the startup? <span className="font-normal lowercase tracking-normal text-slate-400">(optional)</span>
                        </label>

                        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-6">
                          {[0, 1, 2, 3, 4, 5].map((count) => (
                            <button
                              key={count}
                              type="button"
                              onClick={() => changeCoFounderCount(count)}
                              className={`flex flex-col items-center justify-center rounded-xl border py-3 px-2 text-xs font-bold transition-all ${
                                coFounders.length === count
                                  ? "border-angeltors-accent bg-angeltors-accent text-white shadow-xs"
                                  : "border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300 hover:bg-white"
                              }`}
                            >
                              <span className="text-base font-black">{count}</span>
                              <span className="text-[10px] opacity-80">
                                {count === 0 ? "Solo Founder" : count === 1 ? "1 Co-Founder" : `${count} Co-Founders`}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {coFounders.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-8 text-center">
                          <Users className="mx-auto h-10 w-10 text-slate-400 stroke-[1.5]" />
                          <h3 className="mt-3 text-sm font-bold text-angeltors-ink">Single Founder Startup</h3>
                          <p className="mx-auto mt-1 max-w-md text-xs text-slate-500">
                            You selected 0 co-founders. Click "Next" to continue to Startup Details.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {coFounders.length > 1 && (
                            <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                              {coFounders.map((_, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => setActiveCoFounderTab(idx)}
                                  className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                                    activeCoFounderTab === idx
                                      ? "bg-angeltors-ink text-white shadow-2xs"
                                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                  }`}
                                >
                                  Co-Founder #{idx + 1}
                                </button>
                              ))}
                            </div>
                          )}

                          {coFounders.map((co, idx) => {
                            if (coFounders.length > 1 && activeCoFounderTab !== idx) return null;

                            const errKeyPrefix = `co_${idx}_`;

                            return (
                              <div
                                key={idx}
                                className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50/40 p-5 sm:p-7"
                              >
                                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                                  <h3 className="text-sm font-black uppercase tracking-wider text-angeltors-ink">
                                    Co-Founder {idx + 1} Details
                                  </h3>
                                  <span className="rounded-full bg-slate-200/70 px-2.5 py-0.5 text-[11px] font-bold text-slate-600">
                                    {idx + 1} of {coFounders.length}
                                  </span>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                  <OnboardingField
                                    label="Full Name"
                                    required
                                    error={shouldShowError(`${errKeyPrefix}name`) ? errors[`${errKeyPrefix}name`] : undefined}
                                  >
                                    <input
                                      type="text"
                                      required
                                      value={co.name}
                                      onBlur={() => markTouched(`${errKeyPrefix}name`)}
                                      onChange={(e) => updateFounder("name", e.target.value, idx)}
                                      className={getInputStyle(`${errKeyPrefix}name`, Boolean(co.name))}
                                      placeholder="Co-founder full name"
                                    />
                                  </OnboardingField>

                                  <OnboardingField
                                    label="Email Address"
                                    required
                                    error={shouldShowError(`${errKeyPrefix}email`) ? errors[`${errKeyPrefix}email`] : undefined}
                                  >
                                    <input
                                      type="email"
                                      required
                                      value={co.email}
                                      onBlur={() => markTouched(`${errKeyPrefix}email`)}
                                      onChange={(e) => updateFounder("email", e.target.value, idx)}
                                      className={getInputStyle(`${errKeyPrefix}email`, Boolean(co.email))}
                                      placeholder="cofounder@example.com"
                                    />
                                  </OnboardingField>

                                  <OnboardingField
                                    label="Contact Number"
                                    required
                                    error={shouldShowError(`${errKeyPrefix}contact`) ? errors[`${errKeyPrefix}contact`] : undefined}
                                  >
                                    <div className="mt-1.5 flex gap-2">
                                      <select
                                        value={co.countryCode}
                                        onChange={(e) => updateFounder("countryCode", e.target.value, idx)}
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
                                        value={co.contact}
                                        onBlur={() => markTouched(`${errKeyPrefix}contact`)}
                                        onChange={(e) => updateFounder("contact", e.target.value, idx)}
                                        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                                          shouldShowError(`${errKeyPrefix}contact`)
                                            ? "border-red-300 bg-red-50/20 text-slate-900 placeholder:text-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                                            : co.contact
                                            ? "border-slate-300 bg-white text-angeltors-ink placeholder:text-slate-400 hover:border-slate-400 focus:border-angeltors-accent focus:ring-4 focus:ring-angeltors-accent/10"
                                            : "border-slate-200 bg-slate-50/50 text-angeltors-ink placeholder:text-slate-400 focus:border-angeltors-accent focus:bg-white focus:ring-4 focus:ring-angeltors-accent/10"
                                        }`}
                                        placeholder="98765 00000"
                                      />
                                    </div>
                                  </OnboardingField>

                                  <OnboardingField
                                    label="LinkedIn Profile"
                                    required
                                    error={shouldShowError(`${errKeyPrefix}linkedIn`) ? errors[`${errKeyPrefix}linkedIn`] : undefined}
                                  >
                                    <input
                                      type="url"
                                      required
                                      value={co.linkedIn}
                                      onBlur={() => markTouched(`${errKeyPrefix}linkedIn`)}
                                      onChange={(e) => updateFounder("linkedIn", e.target.value, idx)}
                                      className={getInputStyle(`${errKeyPrefix}linkedIn`, Boolean(co.linkedIn))}
                                      placeholder="https://linkedin.com/in/cofounder"
                                    />
                                  </OnboardingField>

                                  <OnboardingField
                                    label="Qualifications"
                                    required
                                    error={shouldShowError(`${errKeyPrefix}qualifications`) ? errors[`${errKeyPrefix}qualifications`] : undefined}
                                  >
                                    <input
                                      type="text"
                                      required
                                      value={co.qualifications}
                                      onBlur={() => markTouched(`${errKeyPrefix}qualifications`)}
                                      onChange={(e) => updateFounder("qualifications", e.target.value, idx)}
                                      className={getInputStyle(`${errKeyPrefix}qualifications`, Boolean(co.qualifications))}
                                      placeholder="e.g. M.Tech, CA, Ph.D"
                                    />
                                  </OnboardingField>

                                  <OnboardingField label="Experience" optional>
                                    <input
                                      type="text"
                                      value={co.experience}
                                      onBlur={() => markTouched(`${errKeyPrefix}experience`)}
                                      onChange={(e) => updateFounder("experience", e.target.value, idx)}
                                      className={getInputStyle(`${errKeyPrefix}experience`, Boolean(co.experience))}
                                      placeholder="e.g. Ex-Google Lead, 4+ yrs Startup Experience"
                                    />
                                  </OnboardingField>
                                </div>

                                <div className="pt-2">
                                  <OnboardingField
                                    label="Co-Founder Photo"
                                    required
                                    error={shouldShowError(`${errKeyPrefix}photo`) ? errors[`${errKeyPrefix}photo`] : undefined}
                                  >
                                    <div className={`mt-2 flex flex-col items-center gap-5 rounded-2xl border-2 border-dashed p-5 transition sm:flex-row ${
                                      shouldShowError(`${errKeyPrefix}photo`)
                                        ? "border-red-300 bg-red-50/20"
                                        : co.photo
                                        ? "border-slate-300 bg-white"
                                        : "border-slate-300/80 bg-white hover:border-angeltors-accent hover:bg-angeltors-accent/5"
                                    }`}>
                                      {co.photoPreview ? (
                                        <img
                                          src={co.photoPreview}
                                          alt={`Co-founder ${idx + 1}`}
                                          className="h-16 w-16 shrink-0 rounded-xl object-cover shadow-2xs ring-2 ring-angeltors-accent/30"
                                        />
                                      ) : (
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-angeltors-accent/10 text-angeltors-accent">
                                          <Camera className="h-7 w-7" />
                                        </div>
                                      )}

                                      <div className="flex-1 text-center sm:text-left">
                                        <p className="text-xs font-bold text-angeltors-ink">
                                          {co.photo ? co.photo.name : "Upload co-founder profile photo"}
                                        </p>
                                        <label className="mt-2 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-200 hover:text-angeltors-accent">
                                          <Upload className="h-3 w-3" />
                                          {co.photo ? "Change Photo" : "Upload Photo"}
                                          <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handlePhotoUpload(e, idx)}
                                          />
                                        </label>
                                      </div>
                                    </div>
                                  </OnboardingField>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: STARTUP DETAILS */}
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
                        <Building2 className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Startup Details</h2>
                        <p className="text-xs text-slate-500">Official company & registration details</p>
                      </div>
                    </div>

                    <div className="space-y-5 p-6 sm:p-8">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <OnboardingField label="Startup Name" required error={shouldShowError("startupName") ? errors.startupName : undefined}>
                          <input
                            type="text"
                            required
                            value={startup.name}
                            onBlur={() => markTouched("startupName")}
                            onChange={(e) => updateStartup("name", e.target.value)}
                            className={getInputStyle("startupName", Boolean(startup.name))}
                            placeholder="e.g. Angeltors"
                          />
                        </OnboardingField>

                        <OnboardingField label="Website / Domain" optional>
                          <input
                            type="url"
                            value={startup.website}
                            onBlur={() => markTouched("website")}
                            onChange={(e) => updateStartup("website", e.target.value)}
                            className={getInputStyle("website", Boolean(startup.website))}
                            placeholder="https://angeltors.com"
                          />
                        </OnboardingField>

                        <OnboardingField label="Legal Entity Name" required error={shouldShowError("legalName") ? errors.legalName : undefined}>
                          <input
                            type="text"
                            required
                            value={startup.legalName}
                            onBlur={() => markTouched("legalName")}
                            onChange={(e) => updateStartup("legalName", e.target.value)}
                            className={getInputStyle("legalName", Boolean(startup.legalName))}
                            placeholder="e.g. GetMyIndia Technologies Pvt Ltd"
                          />
                        </OnboardingField>

                        <OnboardingField label="CIN (Certificate of Incorporation)" required error={shouldShowError("cin") ? errors.cin : undefined}>
                          <input
                            type="text"
                            required
                            value={startup.cin}
                            onBlur={() => markTouched("cin")}
                            onChange={(e) => updateStartup("cin", e.target.value)}
                            className={getInputStyle("cin", Boolean(startup.cin))}
                            placeholder="U72900MH2023PTC123456"
                          />
                        </OnboardingField>

                        <OnboardingField label="GST Number" optional>
                          <input
                            type="text"
                            value={startup.gst}
                            onBlur={() => markTouched("gst")}
                            onChange={(e) => updateStartup("gst", e.target.value)}
                            className={getInputStyle("gst", Boolean(startup.gst))}
                            placeholder="27AAAAA0000A1Z5"
                          />
                        </OnboardingField>

                        <OnboardingField label="DPIIT Recognition Number" optional>
                          <input
                            type="text"
                            value={startup.dpit}
                            onBlur={() => markTouched("dpit")}
                            onChange={(e) => updateStartup("dpit", e.target.value)}
                            className={getInputStyle("dpit", Boolean(startup.dpit))}
                            placeholder="DIPP12345"
                          />
                        </OnboardingField>

                        <OnboardingField label="Legal Entity Email ID" required error={shouldShowError("startupEmail") ? errors.startupEmail : undefined}>
                          <input
                            type="email"
                            required
                            value={startup.email}
                            onBlur={() => markTouched("startupEmail")}
                            onChange={(e) => updateStartup("email", e.target.value)}
                            className={getInputStyle("startupEmail", Boolean(startup.email))}
                            placeholder="contact@company.com"
                          />
                        </OnboardingField>

                        <OnboardingField label="Sector / Domain" required error={shouldShowError("sector") ? errors.sector : undefined}>
                          <input
                            type="text"
                            required
                            value={startup.sector}
                            onBlur={() => markTouched("sector")}
                            onChange={(e) => updateStartup("sector", e.target.value)}
                            className={getInputStyle("sector", Boolean(startup.sector))}
                            placeholder="e.g. FinTech, AI, SaaS, HealthTech"
                          />
                        </OnboardingField>

                        <div className="sm:col-span-2">
                          <OnboardingField label="Legal Entity Registered Address" required error={shouldShowError("address") ? errors.address : undefined}>
                            <textarea
                              required
                              rows={3}
                              value={startup.address}
                              onBlur={() => markTouched("address")}
                              onChange={(e) => updateStartup("address", e.target.value)}
                              className={`${getInputStyle("address", Boolean(startup.address))} min-h-[80px] resize-y`}
                              placeholder="Full business address as per incorporation documents"
                            />
                          </OnboardingField>
                        </div>

                        <div className="sm:col-span-2">
                          <OnboardingField label="Brief Summary About Startup" required error={shouldShowError("summary") ? errors.summary : undefined}>
                            <textarea
                              required
                              rows={4}
                              value={startup.summary}
                              onBlur={() => markTouched("summary")}
                              onChange={(e) => updateStartup("summary", e.target.value)}
                              className={`${getInputStyle("summary", Boolean(startup.summary))} min-h-[110px] resize-y`}
                              placeholder="What core problem do you solve? Who is your target market and value proposition?"
                            />
                          </OnboardingField>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: DOCUMENTS & REVIEW */}
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
                        <FileText className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-angeltors-ink">Upload Documents & Review</h2>
                        <p className="text-xs text-slate-500">Upload mandatory assets & review team profiles</p>
                      </div>
                    </div>

                    <div className="space-y-8 p-6 sm:p-8">
                      {/* Document Uploads */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        {/* Pitch Deck Upload */}
                        <OnboardingField label="Pitch Deck Document" required error={shouldShowError("pitchDeck") ? errors.pitchDeck : undefined}>
                          <div className="mt-2">
                            <label className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition hover:border-angeltors-accent hover:bg-angeltors-accent/5 ${
                              shouldShowError("pitchDeck")
                                ? "border-red-300 bg-red-50/20"
                                : startup.pitchDeck
                                ? "border-slate-300 bg-white"
                                : "border-slate-300/80 bg-slate-50/60"
                            }`}>
                              <FileUp className="mb-2 h-9 w-9 text-slate-400" />
                              <span className="text-xs font-bold text-angeltors-ink">
                                {startup.pitchDeck ? startup.pitchDeck.name : "Upload Pitch Deck (PDF or PPT)"}
                              </span>
                              <span className="mt-1 text-[11px] text-slate-400">
                                {startup.pitchDeck ? `${(startup.pitchDeck.size / (1024 * 1024)).toFixed(2)} MB` : "Required document format: .pdf, .ppt, .pptx"}
                              </span>
                              <input
                                type="file"
                                accept=".pdf,.ppt,.pptx"
                                className="hidden"
                                onChange={handlePitchDeckUpload}
                              />
                            </label>
                          </div>
                        </OnboardingField>

                        {/* Startup Logo Upload */}
                        <OnboardingField label="Startup Logo" required error={shouldShowError("logo") ? errors.logo : undefined}>
                          <div className="mt-2">
                            <label className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition hover:border-angeltors-accent hover:bg-angeltors-accent/5 ${
                              shouldShowError("logo")
                                ? "border-red-300 bg-red-50/20"
                                : startup.logo
                                ? "border-slate-300 bg-white"
                                : "border-slate-300/80 bg-slate-50/60"
                            }`}>
                              {startup.logoPreview ? (
                                <img
                                  src={startup.logoPreview}
                                  alt="Startup Logo Preview"
                                  className="mb-2 h-12 w-auto max-w-[140px] object-contain"
                                />
                              ) : (
                                <ImageIcon className="mb-2 h-9 w-9 text-slate-400" />
                              )}
                              <span className="text-xs font-bold text-angeltors-ink">
                                {startup.logo ? startup.logo.name : "Upload Startup Logo"}
                              </span>
                              <span className="mt-1 text-[11px] text-slate-400">
                                High resolution PNG or SVG recommended
                              </span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleLogoUpload}
                              />
                            </label>
                          </div>
                        </OnboardingField>
                      </div>

                      {/* Founders & Co-Founders Team Display Section */}
                      <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50/40 p-5 sm:p-6">
                        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                            <Users className="h-4 w-4 text-angeltors-accent" /> Founders Team Profile Preview
                          </h3>
                          <span className="text-xs font-semibold text-slate-400">
                            {1 + coFounders.length} Member{coFounders.length > 0 ? "s" : ""}
                          </span>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          {/* Primary Founder Card */}
                          <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                            {founder.photoPreview ? (
                              <img
                                src={founder.photoPreview}
                                alt={founder.name}
                                className="h-14 w-14 shrink-0 rounded-xl border border-slate-200 object-cover"
                              />
                            ) : (
                              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-angeltors-accent/10 text-angeltors-accent">
                                <UserRound className="h-7 w-7" />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <span className="mb-1 inline-block rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-extrabold uppercase text-white">
                                Primary Founder
                              </span>
                              <h4 className="truncate text-sm font-bold text-angeltors-ink">
                                {founder.name || "Founder Name"}
                              </h4>
                              <p className="truncate text-xs text-slate-500">{founder.email}</p>
                              <p className="mt-0.5 text-xs text-slate-600 font-medium">
                                {founder.countryCode} {founder.contact}
                              </p>
                              <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-600">
                                <span className="font-semibold">{founder.qualifications}</span>
                                {founder.linkedIn && (
                                  <a
                                    href={founder.linkedIn}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 font-semibold text-angeltors-accent hover:underline"
                                  >
                                    <LinkedInIcon className="h-3 w-3" /> LinkedIn
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Co-Founders Cards */}
                          {coFounders.map((co, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs"
                            >
                              {co.photoPreview ? (
                                <img
                                  src={co.photoPreview}
                                  alt={co.name}
                                  className="h-14 w-14 shrink-0 rounded-xl border border-slate-200 object-cover"
                                />
                              ) : (
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-angeltors-accent/10 text-angeltors-accent">
                                  <UserRound className="h-7 w-7" />
                                </div>
                              )}
                              <div className="min-w-0 flex-1">
                                <span className="mb-1 inline-block rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-extrabold uppercase text-slate-700">
                                  Co-Founder #{idx + 1}
                                </span>
                                <h4 className="truncate text-sm font-bold text-angeltors-ink">
                                  {co.name || `Co-Founder ${idx + 1}`}
                                </h4>
                                <p className="truncate text-xs text-slate-500">{co.email}</p>
                                <p className="mt-0.5 text-xs text-slate-600 font-medium">
                                  {co.countryCode} {co.contact}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-600">
                                  <span className="font-semibold">{co.qualifications}</span>
                                  {co.linkedIn && (
                                    <a
                                      href={co.linkedIn}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1 font-semibold text-angeltors-accent hover:underline"
                                    >
                                      <LinkedInIcon className="h-3 w-3" /> LinkedIn
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Startup Summary Preview Box */}
                      <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          Application Summary Review
                        </h3>
                        <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                            <span className="block text-[10px] font-semibold uppercase text-slate-400">Startup Name</span>
                            <span className="font-bold text-angeltors-ink">{startup.name || "—"}</span>
                          </div>
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                            <span className="block text-[10px] font-semibold uppercase text-slate-400">Legal Entity</span>
                            <span className="font-bold text-angeltors-ink">{startup.legalName || "—"}</span>
                          </div>
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                            <span className="block text-[10px] font-semibold uppercase text-slate-400">CIN</span>
                            <span className="font-bold text-angeltors-ink">{startup.cin || "—"}</span>
                          </div>
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                            <span className="block text-[10px] font-semibold uppercase text-slate-400">Sector</span>
                            <span className="font-bold text-angeltors-ink">{startup.sector || "—"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            <OnboardingFooter
              currentStep={currentStep}
              totalSteps={steps.length}
              stepTitle={currentStepMeta.title}
              onBack={handleBack}
              onNext={handleNext}
              isLastStep={currentStep === 4}
            />
          </form>
        </OnboardingCard>
      </OnboardingLayout>
    </>
  );
}
