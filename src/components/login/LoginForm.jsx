import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import db from "../../../utils/db.json";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const validateNumber = (num) => {
    if (num.match(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/)) {
      setError(null);
      return true;
    } else {
      setError({
        type: "invalidateNumber",
        message: "Please enter a valid Bangladeshi phone number.",
      });
      return;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    setError(null);

    let number = e.target.phone.value;
    let password = e.target.password.value;

    // checks if a phone number or email
    if (!number.includes("@")) {
      if (/[a-zA-Z]/.test(number)) {
        setError({
          type: "invalidateNumber",
          message: "Please enter a valid email or a phone number.",
        });

        return;
      } else {
        if (!validateNumber(number)) return;
      }
    }

    // mock authentication
    try {
      setLoading(true);
      const user = db.users.find(
        (user) => user.email === number && user.password === password
      );

      if (user) {
        const authUser = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        localStorage.authUser = JSON.stringify(authUser);

        navigate("/dashboard");
      } else {
        setError({
          type: "notFound",
          message: "Invalid credential. Try again!",
        });
      }
    } catch (error) {
      setError({
        type: "serverError",
        message: "There was an error in server.",
      });

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:w-[600px] lg:h-[488px] bg-white rounded-xl box_shadow px-6 lg:px-24 py-16 text-center">
      <h4 className="font-bold text-2xl text-text-highlight">Sign In</h4>
      <p className="text-sm font-medium text-text-secondary mt-2">
        Your Social Campaigns
      </p>

      <form
        className="mt-10 text-sm font-medium text-text-secondary"
        onSubmit={submitForm}
      >
        <input
          type="text"
          className="w-full p-2.5 border border-[#DBDFE9] rounded-md"
          placeholder="Phone"
          name="phone"
          required
        />
        {error?.type === "invalidateNumber" && (
          <p className="text-start text-red-700 mt-1">{error.message}</p>
        )}

        <input
          type="password"
          className="w-full p-2.5 border border-[#DBDFE9] rounded-md mt-5"
          placeholder="Password"
          name="password"
          required
        />

        <Link to={"/"} className="w-fit block ml-auto mt-2 text-[#1B84FF]">
          Forgot Password ?
        </Link>

        <button
          type="submit"
          className="w-full bg-accent p-4 mt-7 rounded-md text-white hover:bg-accent/90"
          disabled={loading}
        >
          {loading ? "Please wait" : "Sign In"}
        </button>

        {error?.type === "notFound" && (
          <p className="text-start text-red-700 mt-1 mb-1">{error.message}</p>
        )}
      </form>
    </div>
  );
}
