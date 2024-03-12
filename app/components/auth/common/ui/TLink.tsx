import React from "react";
import Link from "next/link";

const linkConfig = {
  // Colors
  primary: {
    bgColor: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    hoverOutline: "hover:border-blue-600 hover:text-blue-600",
    color: "text-white",
    outline: "border-blue-500 text-blue-500",
  },
  secondary: {
    bgColor: "bg-gray-500",
    hoverColor: "hover:bg-gray-600",
    hoverOutline: "hover:border-gray-600 hover:text-gray-600",
    color: "text-white",
    outline: "outline text-gray-500",
  },

  tertiary: {
    bgColor: "bg-gray-200",
    hoverColor: "hover:bg-gray-300",
    hoverOutline: "hover:border-gray-300 hover:text-gray-300",
    color: "text-gray-500",
    outline: "border-gray-200 text-gray-200",
  },

  // Sizes
  small: "text-sm px-2 py-1",
  medium: "text-base px-4 py-2",
  large: "text-lg px-6 py-3",

  // Width
  full: "w-full",
};

export const TLink: React.FC<{
  text?: string;
  color?: string;
  hoverColor?: string;
  href: string;
  underline?: boolean;
  buttonStyle?: boolean;
  icon?: React.ReactNode;
}> = ({
  text,
  color = "text-blue-500",
  hoverColor = "hover:text-blue-600",
  href,
  underline = false,
  buttonStyle = false,
  icon,
}) => {
  const baseStyles = `font-medium transition-all duration-300 ease-in-out ${color} ${hoverColor}`;
  const additionalStyles = underline ? "underline" : "";
  const linkStyles = `${baseStyles} ${
    buttonStyle ? "py-3 px-4 border rounded-xl" : ""
  } ${additionalStyles}`;
  const textStyle = text ? (icon ? "ml-2" : "") : "hidden";

  return (
    <Link href={href} className={linkStyles}>
      {icon && <span>{icon}</span>}
      <span className={textStyle}>{text}</span>
    </Link>
  );
};
