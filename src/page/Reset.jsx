import React, { useState } from "react";
import { sendPaswordReset } from "../firebase";
import { NavLink } from "react-router-dom";

const Reset = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-4">Login</h1>
      <div className="my-1">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email address"
          className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
        />
        <button
          type="submit"
          onClick={() => sendPaswordReset(email)}
          className="bg-black text-white rounded-md m-auto"
        >
          send password reaset email
        </button>
      </div>
      <p>
        dont you have an accoutn
        <NavLink to="/ragister" className="underline">
          Register{" "}
        </NavLink>
      </p>
    </div>
  );
};

export default Reset;
