import type { ChangeEvent } from "react";
import { FileUp } from "lucide-react";
import { OnboardingField } from "./OnboardingField";

interface FileUploadFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  fileName?: string | null;
  fileSize?: string;
  accept?: string;
  emptyLabel?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function FileUploadField({
  label,
  required,
  error,
  hint,
  fileName,
  fileSize,
  accept,
  emptyLabel = "Choose file",
  onChange,
}: FileUploadFieldProps) {
  const hasError = Boolean(error);

  return (
    <OnboardingField label={label} required={required} error={error} hint={hint}>
      <label
        className={`mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed px-6 py-8 text-center transition-colors ${
          hasError
            ? "border-red-300 bg-red-50/30"
            : fileName
            ? "border-angeltors-accent/30 bg-angeltors-accent/5"
            : "border-angeltors-border bg-slate-50/40 hover:border-angeltors-accent/40 hover:bg-angeltors-accent/5"
        }`}
      >
        <FileUp className="mb-2 h-8 w-8 text-slate-400" />
        <span className="text-sm font-medium text-angeltors-ink">{fileName || emptyLabel}</span>
        {fileSize && <span className="mt-1 text-xs text-slate-400">{fileSize}</span>}
        <input type="file" accept={accept} className="hidden" onChange={onChange} />
      </label>
    </OnboardingField>
  );
}
