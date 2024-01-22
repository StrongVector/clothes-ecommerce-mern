import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

const GithubButton = ({ name, setError, setSuccess }) => {
  const navigate = useNavigate();
  const { setToken } = useUserContext();

  const redirectAuth = () => {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    // console.log(CLIENT_ID);
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
    );
  };

  const githubRegister = async () => {
    try {
      const URL = import.meta.env.VITE_URL;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");

      if (code && localStorage.getItem("token") === null) {
        const response = await fetch(
          `${URL}/user/register/github?code=${code}`
        );
        const data = await response.json();

        if (response.status === 400 || response.status === 500) {
          setSuccess(" ");
          setError(data.error);
          setTimeout(() => navigate("/register"), 3000);
          return;
        }

        if (response.status === 200) {
          setError(" ");
          setSuccess(data.message);
          localStorage.setItem("token", data.token);
          setToken(data.token);
          setTimeout(() => navigate("/profile"), 3000);
          return;
        }
      }
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    githubRegister();
  }, []);

  return (
    <button
      className="flex my-4 gap-4 w-5/6 max-w-xs text-lg md:text-xl justify-center items-center  text-white bg-darkBlue outline-none border-2 border-lightSlate px-2 md:w-[400px] h-16 rounded-xl"
      onClick={redirectAuth}
    >
      <FaGithub className="" />
      <span>{name}</span>
    </button>
  );
};

export { GithubButton };
