"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
  buttonType?: "primaryButton" | "primaryDarkButton" | "highlightButton";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function Button({
  children,
  buttonType = "primaryButton",
  onClick,
  href,
  className,
  disabled = false,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const router = useRouter();

  const buttonColor = () => {
    switch (buttonType) {
      case "primaryButton":
        return "bg-primary";
      case "primaryDarkButton":
        return "bg-primaryDark";
      case "highlightButton":
        return "bg-highlight";
      default:
        return "bg-[#0F172A]";
    }
  };

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
      } transition-opacity duration-300 text-white font-semibold ${
        disabled
          ? "bg-secondary"
          : buttonColor()
      } ${disabled ? "cursor-default" : ""} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
