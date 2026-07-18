import React from 'react';

// ─── ScrollStackItem ────────────────────────────────────────────────────────
interface ScrollStackItemProps {
  children: React.ReactNode;
  className?: string;
  /** Injected automatically by <ScrollStack> — do not pass manually */
  _index?: number;
  /** Injected automatically by <ScrollStack> — do not pass manually */
  _total?: number;
}

export function ScrollStackItem({
  children,
  className = '',
  _index = 0,
}: ScrollStackItemProps) {
  // Each card sticks a bit lower so the previous card's top edge stays visible
  const stickyTop = 96 + _index * 22;

  return (
    <div
      className={`sticky ${className}`}
      style={{
        top: `${stickyTop}px`,
        zIndex: 10 + _index,
      }}
    >
      {children}
    </div>
  );
}

// ─── ScrollStack ─────────────────────────────────────────────────────────────
interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollStack({ children, className = '' }: ScrollStackProps) {
  const items = React.Children.toArray(children);
  const total = items.length;

  return (
    <div className={`relative ${className}`}>
      {items.map((child, index) => {
        if (React.isValidElement<ScrollStackItemProps>(child)) {
          return React.cloneElement(child, { _index: index, _total: total });
        }
        return child;
      })}
    </div>
  );
}
