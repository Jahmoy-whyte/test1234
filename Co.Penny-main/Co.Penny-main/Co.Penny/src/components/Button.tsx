import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "coral" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-neutral-900 text-white hover:bg-neutral-800 disabled:bg-neutral-400",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 disabled:bg-neutral-50 disabled:text-neutral-400",
  coral:
    "bg-[#F87171] text-white hover:bg-[#EF4444] disabled:bg-neutral-400",
  outline:
    "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 disabled:bg-neutral-50 disabled:text-neutral-400",
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
        variantStyles[variant]
      } ${fullWidth ? "w-full" : ""} ${
        disabled ? "cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
