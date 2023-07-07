import Viewpane from "../components/Viewpane";

interface AccountDropdownProps {
  darkMode?: boolean;
}

function Register({ darkMode = false }: AccountDropdownProps) {
  return (
    <Viewpane darkMode={darkMode}>
      <h1>This is the registration page</h1>
      <p>make an account here</p>
    </Viewpane>
  );
}

function Login({ darkMode = false }: AccountDropdownProps) {
  return (
    <Viewpane darkMode={darkMode}>
      <h1>This is the login page</h1>
      <p>enter username and password when i eventually add that</p>
    </Viewpane>
  );
}

export { Register, Login };
