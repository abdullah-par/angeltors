import { Check, Plus } from "lucide-react";

interface TagSelectorProps {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  customInput: string;
  onCustomInputChange: (value: string) => void;
  onAddCustom: () => void;
  customPlaceholder?: string;
}

export function TagSelector({
  options,
  selected,
  onToggle,
  customInput,
  onCustomInputChange,
  onAddCustom,
  customPlaceholder = "Add custom…",
}: TagSelectorProps) {
  const customTags = selected.filter((tag) => !options.includes(tag));

  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              isSelected
                ? "border-angeltors-accent bg-angeltors-accent text-white"
                : "border-angeltors-border bg-white text-slate-600 hover:border-slate-300 hover:text-angeltors-ink"
            }`}
          >
            {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
            {option}
          </button>
        );
      })}

      {customTags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onToggle(tag)}
          className="inline-flex items-center gap-1.5 rounded-full border border-angeltors-accent bg-angeltors-accent px-3 py-1.5 text-xs font-semibold text-white"
        >
          <Check className="h-3 w-3 stroke-[3]" />
          {tag}
        </button>
      ))}

      <div className="inline-flex items-center gap-1 rounded-full border border-dashed border-angeltors-border bg-white pl-3 pr-1 py-1 focus-within:border-angeltors-accent focus-within:ring-2 focus-within:ring-angeltors-accent/15">
        <input
          type="text"
          value={customInput}
          onChange={(e) => onCustomInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onAddCustom();
            }
          }}
          placeholder={customPlaceholder}
          className="w-24 bg-transparent text-xs text-angeltors-ink outline-none placeholder:text-slate-400"
        />
        <button
          type="button"
          onClick={onAddCustom}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-angeltors-ink text-white transition hover:bg-angeltors-accent"
        >
          <Plus className="h-3 w-3 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
