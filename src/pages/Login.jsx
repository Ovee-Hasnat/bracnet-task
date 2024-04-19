import LoginForm from "../components/login/LoginForm";
import logo from "/assets/logo/logo.svg";

export default function Login() {
  return (
    <div className="h-screen bg-login_bg bg-cover bg-fixed">
      <div className="h-full max-w-[1400px] mx-auto flex flex-col xl:flex-row items-center justify-evenly xl:justify-between p-10 2xl:p-0">
        <img src={logo} alt="Logo" className="w-2/4 max-w-80" />
        <LoginForm />
      </div>
    </div>
  );
}
