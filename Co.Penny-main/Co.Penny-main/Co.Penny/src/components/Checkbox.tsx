import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <label className={`flex cursor-pointer items-center gap-2 ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          className="h-4 w-4 cursor-pointer rounded border-neutral-300 text-neutral-900 focus:ring-neutral-500"
          {...props}
        />
        {label && (
          <span className="text-sm text-neutral-600">{label}</span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
