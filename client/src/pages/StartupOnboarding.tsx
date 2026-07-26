import { useState, type ChangeEvent, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Building2, FileText, Plus, Upload, UserRound, Users } from "lucide-react";

type Founder = {
  name: string;
  email: string;
  contact: string;
  linkedIn: string;
  qualifications: string;
  experience: string;
  photo: File | null;
};

const emptyFounder = (): Founder => ({ name: "", email: "", contact: "", linkedIn: "", qualifications: "", experience: "", photo: null });

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return <label className="block text-sm font-bold text-angeltors-ink">{label}{optional && <span className="ml-1 font-medium text-slate-400">(Optional)</span>}{children}</label>;
}

const inputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-angeltors-ink outline-none transition focus:border-angeltors-accent focus:ring-4 focus:ring-angeltors-accent/10";

export default function StartupOnboarding() {
  const navigate = useNavigate();
  const [founder, setFounder] = useState<Founder>(emptyFounder());
  const [coFounders, setCoFounders] = useState<Founder[]>([]);
  const [startup, setStartup] = useState({ name: "", website: "", legalName: "", cin: "", gst: "", dpit: "", address: "", email: "", sector: "", summary: "", pitchDeck: null as File | null, logo: null as File | null });

  const updateFounder = (key: keyof Founder, value: string | File | null, index?: number) => {
    if (index === undefined) setFounder((current) => ({ ...current, [key]: value }));
    else setCoFounders((current) => current.map((coFounder, i) => i === index ? { ...coFounder, [key]: value } : coFounder));
  };

  const changeCoFounderCount = (event: ChangeEvent<HTMLSelectElement>) => {
    const count = Number(event.target.value);
    setCoFounders((current) => Array.from({ length: count }, (_, index) => current[index] ?? emptyFounder()));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/dashboard/startup");
  };

  const FounderFields = ({ value, index, title }: { value: Founder; index?: number; title: string }) => (
    <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-7">
      <h3 className="mb-5 text-lg font-black text-angeltors-ink">{title}</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name"><input required value={value.name} onChange={(e) => updateFounder("name", e.target.value, index)} className={inputClass} placeholder="Your full name" /></Field>
        <Field label="Email"><input required type="email" value={value.email} onChange={(e) => updateFounder("email", e.target.value, index)} className={inputClass} placeholder="you@example.com" /></Field>
        <Field label="Contact number"><input required type="tel" value={value.contact} onChange={(e) => updateFounder("contact", e.target.value, index)} className={inputClass} placeholder="Your contact number" /></Field>
        <Field label="LinkedIn profile"><input required type="url" value={value.linkedIn} onChange={(e) => updateFounder("linkedIn", e.target.value, index)} className={inputClass} placeholder="https://linkedin.com/in/..." /></Field>
        <Field label="Qualifications"><input required value={value.qualifications} onChange={(e) => updateFounder("qualifications", e.target.value, index)} className={inputClass} placeholder="e.g. MBA, B.Tech" /></Field>
        <Field label="Experience" optional><input value={value.experience} onChange={(e) => updateFounder("experience", e.target.value, index)} className={inputClass} placeholder="Brief professional experience" /></Field>
        <div className="sm:col-span-2"><Field label="Photo"><label className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-500 transition hover:border-angeltors-accent hover:text-angeltors-accent"><Upload className="h-4 w-4" />{value.photo?.name ?? "Upload a clear profile photo"}<input required={index === undefined} type="file" accept="image/*" className="hidden" onChange={(e) => updateFounder("photo", e.target.files?.[0] ?? null, index)} /></label></Field></div>
      </div>
    </section>
  );

  return <>
    <Helmet><title>Startup Onboarding | Angeltors</title></Helmet>
    <div className="min-h-screen bg-angeltors-bg">
      <header className="border-b border-slate-200 bg-white px-5 py-5 sm:px-8"><div className="mx-auto flex max-w-5xl items-center justify-between"><Link to="/onboarding" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-angeltors-ink"><ArrowLeft className="h-4 w-4" />Change profile</Link><img src="/images/Angeltors_logo.png" alt="Angeltors" className="h-8 w-auto" /></div></header>
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-9 max-w-2xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-angeltors-accent">Startup application</p><h1 className="text-3xl font-black tracking-tight text-angeltors-ink sm:text-5xl">Tell us about your startup.</h1><p className="mt-4 text-base leading-relaxed text-slate-500">Share your founder profile and company details to start your Angeltors journey.</p></div>
        <form onSubmit={onSubmit} className="space-y-8">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center gap-3 border-b border-slate-100 px-5 py-5 sm:px-8"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-angeltors-ink text-white"><UserRound className="h-5 w-5" /></span><div><h2 className="font-black text-angeltors-ink">Founder profile</h2><p className="text-sm text-slate-500">Your primary founder information</p></div></div><div className="p-5 sm:p-8"><FounderFields value={founder} title="Primary founder" /><div className="mt-7"><Field label="How many co-founders are part of the startup?" optional><select value={coFounders.length} onChange={changeCoFounderCount} className={inputClass}><option value="0">No co-founders</option>{[1, 2, 3, 4, 5].map((count) => <option key={count} value={count}>{count} co-founder{count > 1 ? "s" : ""}</option>)}</select></Field></div>{coFounders.length > 0 && <div className="mt-7 space-y-5"><div className="flex items-center gap-2 text-sm font-bold text-angeltors-ink"><Users className="h-4 w-4" />Co-founder details</div>{coFounders.map((coFounder, index) => <FounderFields key={index} value={coFounder} index={index} title={`Co-founder ${index + 1}`} />)}</div>}</div></section>
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center gap-3 border-b border-slate-100 px-5 py-5 sm:px-8"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-angeltors-accent text-white"><Building2 className="h-5 w-5" /></span><div><h2 className="font-black text-angeltors-ink">Startup details</h2><p className="text-sm text-slate-500">Your company, registration, and pitch information</p></div></div><div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-8">
            <Field label="Startup name"><input required value={startup.name} onChange={(e) => setStartup({ ...startup, name: e.target.value })} className={inputClass} placeholder="e.g. Angeltors" /></Field>
            <Field label="Website" optional><input type="url" value={startup.website} onChange={(e) => setStartup({ ...startup, website: e.target.value })} className={inputClass} placeholder="https://example.com" /></Field>
            <Field label="Legal entity name"><input required value={startup.legalName} onChange={(e) => setStartup({ ...startup, legalName: e.target.value })} className={inputClass} placeholder="Registered company name" /></Field>
            <Field label="CIN"><input required value={startup.cin} onChange={(e) => setStartup({ ...startup, cin: e.target.value })} className={inputClass} placeholder="Certificate of Incorporation number" /></Field>
            <Field label="GST" optional><input value={startup.gst} onChange={(e) => setStartup({ ...startup, gst: e.target.value })} className={inputClass} placeholder="GST number" /></Field>
            <Field label="DPIIT" optional><input value={startup.dpit} onChange={(e) => setStartup({ ...startup, dpit: e.target.value })} className={inputClass} placeholder="DPIIT recognition number" /></Field>
            <Field label="Legal entity email ID"><input required type="email" value={startup.email} onChange={(e) => setStartup({ ...startup, email: e.target.value })} className={inputClass} placeholder="company@example.com" /></Field>
            <Field label="Sector / domain"><input required value={startup.sector} onChange={(e) => setStartup({ ...startup, sector: e.target.value })} className={inputClass} placeholder="e.g. FinTech, SaaS" /></Field>
            <div className="sm:col-span-2"><Field label="Legal entity address"><textarea required value={startup.address} onChange={(e) => setStartup({ ...startup, address: e.target.value })} className={`${inputClass} min-h-24 resize-y`} placeholder="Registered business address" /></Field></div>
            <div className="sm:col-span-2"><Field label="Brief summary about startup"><textarea required value={startup.summary} onChange={(e) => setStartup({ ...startup, summary: e.target.value })} className={`${inputClass} min-h-32 resize-y`} placeholder="What problem do you solve, and for whom?" /></Field></div>
            <Field label="Pitch deck"><label className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-500 transition hover:border-angeltors-accent hover:text-angeltors-accent"><FileText className="h-5 w-5" />{startup.pitchDeck?.name ?? "Upload pitch deck (PDF, PPT)"}<input required type="file" accept=".pdf,.ppt,.pptx" className="hidden" onChange={(e) => setStartup({ ...startup, pitchDeck: e.target.files?.[0] ?? null })} /></label></Field>
            <Field label="Startup logo"><label className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-500 transition hover:border-angeltors-accent hover:text-angeltors-accent"><Upload className="h-5 w-5" />{startup.logo?.name ?? "Upload logo image"}<input required type="file" accept="image/*" className="hidden" onChange={(e) => setStartup({ ...startup, logo: e.target.files?.[0] ?? null })} /></label></Field>
          </div></section>
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:flex-row sm:items-center"><p className="max-w-xl text-sm leading-relaxed text-slate-600">Founder photos and names will be used to present your startup profile. You can review and update this information later.</p><button type="submit" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-angeltors-ink px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-angeltors-accent"><Plus className="h-4 w-4" />Complete profile<ArrowRight className="h-4 w-4" /></button></div>
        </form>
      </main>
    </div>
  </>;
}
