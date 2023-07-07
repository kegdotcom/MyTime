import { ReactNode } from "react";

interface ViewpaneProps {
  darkMode?: boolean;
  children?: ReactNode;
}

function Viewpane({ darkMode = false, children }: ViewpaneProps) {
  return (
    <div data-bs-theme={darkMode ? "dark" : "light"} style={{ height: "90vh" }}>
      {children}
    </div>
  );
}

export default Viewpane;
