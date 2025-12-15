"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "font-mono font-medium transition-all duration-200 rounded disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center";

    const variants = {
      primary:
        "bg-accent-amber text-background hover:bg-accent-amber/90 border-2 border-accent-amber hover:shadow-lg hover:shadow-accent-amber/30",
      secondary:
        "bg-background-secondary text-foreground border-2 border-border hover:border-accent-cyan hover:text-accent-cyan",
      ghost:
        "text-foreground-muted hover:text-accent-cyan hover:bg-background-secondary",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
