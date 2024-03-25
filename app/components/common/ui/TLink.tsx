import React from "react";
import Link from "next/link";

export const TLink: React.FC<{
  text?: string;
  color?: string;
  hoverColor?: string;
  href: string;
  underline?: boolean;
  icon?: React.ReactNode;
}> = ({
  text,
  color = "text-blue-500",
  hoverColor = "hover:text-blue-600",
  href,
  underline = false,
  icon,
}) => {
  const baseStyles = `font-medium transition-all duration-300 ease-in-out ${color} ${hoverColor}`;
  const additionalStyles = underline ? "underline" : "";
  const linkStyles = `${baseStyles} ${additionalStyles}`;
  const textStyle = text ? (icon ? "ml-2" : "") : "hidden";
  return (
    <Link href={href} className={linkStyles}>
      {icon && <span>{icon}</span>}
      <span className={textStyle}>{text}</span>
    </Link>
  );
};

export const TButtonLink: React.FC<{
  text?: string;
  color?: string;
  hoverColor?: string;
  href: string;
  underline?: boolean;
  icon?: React.ReactNode;
}> = ({
  text,
  color = "text-blue-500",
  hoverColor = "hover:text-blue-600",
  href,
  icon,
}) => {
  const baseStyles = `font-medium transition-all duration-300 ease-in-out ${color} ${hoverColor}`;
  const linkStyles = `${baseStyles} py-3 px-4 border rounded-xl`;
  const textStyle = text ? (icon ? "ml-2" : "") : "hidden";

  return (
    <Link href={href} className={linkStyles}>
      {icon && <span>{icon}</span>}
      <span className={textStyle}>{text}</span>
    </Link>
  );
};

interface HomeLinkProps {
  href: string;
  text: string;
  icon: React.ReactNode;
}

export const HomeLink: React.FC<HomeLinkProps> = ({ href, text, icon }) => {
  return (
    <Link
      className="flex items-center border dark:border-gray-800 gap-3 rounded-lg bg-gray-100 bordered bg-gray-100 px-3 py-2 text-gray-700 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-100 px-4 py-2"
      href={href}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};
