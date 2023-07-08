import { ReactNode } from "react";

interface ButtonProps {
  classes?: string;
  onClick: () => void;
  children?: ReactNode;
}

function Button({ classes, onClick, children = null }: ButtonProps) {
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
