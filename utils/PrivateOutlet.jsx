import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar";

export default function PrivateOutlet() {
  const auth = localStorage.authUser;

  return auth ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}
