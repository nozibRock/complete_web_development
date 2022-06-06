import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    const url = "http://localhost:5000/login";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate('/orders');
          console.log(data);
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="form-control w-full max-w-xs my-5 mx-auto"
      >
        <label className="label">
          <span className="label-text">Email Address</span>
        </label>
        <input
          type="text"
          name="email"
          placeholder="Type email here"
          className="input input-bordered w-full max-w-xs"
        />

        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Type password here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <button className="btn btn-outline btn-success" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
