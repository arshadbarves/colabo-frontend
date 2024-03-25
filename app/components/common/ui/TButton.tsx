import React from "react";

const buttonConfig = {
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

// Button
export const TButton: React.FC<{
  text: string;
  type?: "button" | "submit" | "reset";
  color?: keyof typeof buttonConfig;
  size?: keyof typeof buttonConfig;
  fullWidth?: boolean;
  outline?: boolean;
  icon?: React.ReactNode; // Accepts any JSX element as an icon
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({
  text,
  type = "button",
  color = "primary",
  size = "medium",
  fullWidth = false,
  outline = false,
  icon,
  onClick,
}) => {
  const config = buttonConfig[color] as {
    bgColor: string;
    hoverColor: string;
    hoverOutline: string;
    color: string;
    outline: string;
  };
  const sizeClass = buttonConfig[size];
  const textColor = outline ? config.color : config.bgColor;
  const hoverColor = config.hoverColor;
  const hoverOutline = config.hoverOutline;
  const backgroundColor = outline ? "bg-opacity-0" : config.bgColor;
  const buttonStyle = outline
    ? `${config.outline} ${backgroundColor} ${hoverOutline}`
    : `${textColor} ${backgroundColor} ${hoverColor}`;
  const fullWidthClass = fullWidth ? buttonConfig.full : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative transition-all duration-300 ease-in-out ${fullWidthClass} flex justify-center border text-sm font-medium rounded-xl ${sizeClass} ${buttonStyle}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};
