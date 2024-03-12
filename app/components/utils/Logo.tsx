// LOGO
export const Logo: React.FC<{
  color?: string;
  size?: string;
  gradient?: boolean;
}> = ({ color = "blue-500", size = "text-4xl", gradient = true }) => {
  return (
    <span
      className={`font-logo ${
        gradient
          ? `text-gradient bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent`
          : "text-" + color
      } ${size}`}
    >
      COLABO
    </span>
  );
};
