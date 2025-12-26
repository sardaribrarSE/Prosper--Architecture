import React from "react";
import Image from "next/image";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "filled-dark" | "outlined-light" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: "arrow-right" | "arrow-down" | "arrow-up" | null;
  iconPosition?: "left" | "right";
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const iconMap: Record<string, string> = {
  "arrow-right": "/Icons/Icons=arrow-right.svg",
  "arrow-down": "/Icons/Icons=arrow-down.svg",
  "arrow-up": "/Icons/Icons=arrow-up.svg",
};

export default function Button({
  children,
  variant = "filled-dark",
  size = "md",
  icon = null,
  iconPosition = "right",
  className,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition-all focus:outline-none";

  const variantClass =
    variant === "filled-dark"
      ? "bg-black text-white hover:bg-gray-900"
      : variant === "outlined-light"
      ? "bg-white text-black border border-gray-300 hover:bg-gray-50"
      : "bg-transparent text-current hover:bg-gray-50";

  const sizeClass =
    size === "sm"
      ? "px-3 py-2 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "px-5 py-4 text-md";

  const iconSrc = icon ? iconMap[icon] : null;

  return (
    <button className={cx(base, variantClass, sizeClass, className)} {...rest}>
      {icon && iconPosition === "left" && iconSrc && (
        <Image src={iconSrc} alt="" width={20} height={20} />
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && iconSrc && (
        <Image src={iconSrc} alt="" width={20} height={20} />
      )}
    </button>
  );
}
