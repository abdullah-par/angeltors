import { cn } from "@/lib/utils";

export function inputClass(hasError: boolean, className?: string) {
  return cn(
    "mt-2 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-angeltors-ink font-medium transition-colors placeholder:text-slate-400",
    "focus:outline-none focus:ring-2 focus:ring-angeltors-accent/20 focus:border-angeltors-accent",
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-red-500/15"
      : "border-angeltors-border hover:border-slate-300",
    className
  );
}

export function selectClass(hasError?: boolean, className?: string) {
  return cn(
    "rounded-lg border bg-white px-3 py-2.5 text-sm font-medium text-angeltors-ink transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-angeltors-accent/20 focus:border-angeltors-accent",
    hasError ? "border-red-300" : "border-angeltors-border hover:border-slate-300",
    className
  );
}

export function textareaClass(hasError: boolean, className?: string) {
  return cn(inputClass(hasError), "min-h-[96px] resize-y leading-relaxed", className);
}
