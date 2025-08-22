import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import Button from "../Components/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    console.log("Form submitted:", { email, password });

    navigate("/profile");
  };

  return (
    <Layout className="justify-start">
      <div className="mt-4">
        <h1 className=" font- text-3xl font-semibold font-rubik text-gray-800 ">
          Signin to your
        </h1>
        <h1 className=" font- text-3xl font-semibold font-rubik text-gray-800 ">
          PopX account
        </h1>

        <p className="text-[#1D2226] opacity-60 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextField
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
            required: false,
            style: { color: "#6C63FF" },
          }}
          sx={{ "& .MuiFormLabel-asterisk": { display: "none" } }}
        />

        <TextField
          label="Password"
          placeholder="Enter password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
            required: false,
            style: { color: "#6C63FF" },
          }}
          sx={{ "& .MuiFormLabel-asterisk": { display: "none" } }}
        />

        <Button
          type="submit"
          variant={isFormValid ? "primary" : "gray"} // ✅ choose color based on form state
          disabled={!isFormValid}
        >
          Login
        </Button>
      </form>
    </Layout>
  );
}

export default Login;
