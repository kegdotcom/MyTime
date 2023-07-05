import { ReactNode } from "react";

interface ButtonProps {
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  darkMode?: boolean;
  children?: ReactNode;
}

function Button({
  type = "primary",
  darkMode = false,
  children = null,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={"btn btn-" + type}
      data-bs-theme={darkMode ? "dark" : "light"}
    >
      {children}
    </button>
  );
}

export default Button;
