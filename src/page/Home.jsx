import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("sign out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (loading) return <p>user info loading........</p>;

  return (
    <>
      {" "}
      <div>welcome {user.email}</div>
      <button onClick={handleLogOut} className="bg-black text-white rounded-sm">
        log out
      </button>
    </>
  );
};

export default Home;
