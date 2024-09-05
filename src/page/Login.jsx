import React, { useState } from "react";
import { loginWithEmailAndPassword } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await loginWithEmailAndPassword(email, password);
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSocialLogin = async () => {
    const user = await signInWithGoogle();
    console.log(user);
    navigate("/home");
  };
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-4">Login</h1>
      <form className="flex flex-col">
        <div className="my-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          className="bg-black text-white rounded-md m-auto p-1  mx-2"
        >
          Login
        </button>
        <button
          type="submit"
          onClick={handleSocialLogin}
          className="bg-blue-500 text-white rounded-md p-1 "
        >
          Login with google
        </button>
      </form>
      <p>
        no accoutn
        <NavLink to="/ragister" className="underline">
          Register{" "}
        </NavLink>
      </p>
      <p>
        forget password
        <NavLink to="/reset" className="underline">
          Reset{" "}
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
