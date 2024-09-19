import React, { useRef } from "react";

const Register: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleRegister = () => {
    if (usernameRef.current && emailRef.current && passwordRef.current) {
      const user = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

      fetch("https://strapi-store-server.onrender.com/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div className="max-w-96 mx-auto mt-28 p-8 rounded-lg shadow-xl">
      <h1 className="text-center mb-8 text-3xl text-blue-900 font-bold">Register</h1>
      <p className="mb-2">Username</p>
      <label className="input input-bordered flex items-center gap-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          ref={usernameRef}
          className="grow"
          placeholder="Username"
        />
      </label>
      <p className="mb-2">Email</p>
      <label className="input input-bordered flex items-center gap-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="text"
          ref={emailRef}
          className="grow"
          placeholder="Email"
        />
      </label>
      <p className="mb-2">Password</p>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="password" ref={passwordRef} className="grow" />
      </label>
      <button
        className="btn btn-block mb-4 bg-blue-700 text-white mt-12"
        onClick={handleRegister}
      >
        REGISTER
      </button>
      <span className="ml-[65px] flex gap-4">
        <span>Already a member?</span>
        <a href="/login" className="text-blue-600 hover:underline">
          Login
        </a>
      </span>
    </div>
  );
};

export default Register;
