import { ReactNode } from "react";

interface ButtonProps {
  classes?: string;
  darkMode?: boolean;
  onClick: () => void;
  children?: ReactNode;
}

function Button({
  classes,
  darkMode = false,
  onClick,
  children = null,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={classes}
      data-bs-theme={darkMode ? "dark" : "light"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
