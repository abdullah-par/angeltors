import type { ChangeEvent } from "react";
import { Camera, Upload } from "lucide-react";
import { OnboardingField } from "./OnboardingField";

interface PhotoUploadFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  fileName?: string | null;
  previewUrl?: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function PhotoUploadField({
  label,
  required,
  error,
  fileName,
  previewUrl,
  onChange,
}: PhotoUploadFieldProps) {
  const hasError = Boolean(error);

  return (
    <OnboardingField label={label} required={required} error={error} hint="JPG or PNG, max 5 MB">
      <div
        className={`mt-2 flex items-center gap-4 rounded-lg border p-4 transition-colors ${
          hasError ? "border-red-300 bg-red-50/30" : "border-angeltors-border bg-slate-50/40"
        }`}
      >
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="h-14 w-14 shrink-0 rounded-lg object-cover ring-1 ring-angeltors-border" />
        ) : (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white text-angeltors-accent ring-1 ring-angeltors-border">
            <Camera className="h-6 w-6" />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-angeltors-ink">
            {fileName || "No photo selected"}
          </p>
          <label className="mt-2 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-angeltors-accent hover:text-angeltors-accent-light">
            <Upload className="h-3.5 w-3.5" />
            {fileName ? "Change photo" : "Upload photo"}
            <input type="file" accept="image/*" className="hidden" onChange={onChange} />
          </label>
        </div>
      </div>
    </OnboardingField>
  );
}
