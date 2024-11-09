"use client";

import { useRouter } from "next/navigation";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function PrimaryButton({
  children,
  onClick,
  href,
  className,
  disabled = false,
  type = "button",
  ariaLabel,
}: PrimaryButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (href) {
      const isValidLink = href.startsWith("/") || href.startsWith("#");
      if (isValidLink) {
        router.push(href);
      } else {
        console.warn("Invalid Url");
      }
    }
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : handleClick}
      className={`text-white font-montserrat py-2 px-4 rounded-lg shadow-lg ${
        disabled ? "" : "hover:opacity-90"
      } transition-opacity duration-300 ${
        disabled ? "bg-secondary" : "bg-highlight"
      } ${disabled ? "cursor-default" : ""} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
