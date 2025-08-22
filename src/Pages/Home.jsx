import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import Button from "../Components/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <Layout className="justify-end">
      <div className="space-y-2">
        <h1 className="font-rubik text-3xl font-semibold text-gray-800">
          Welcome to PopX
        </h1>
        <p className="font-rubik text-[#1D2226] opacity-60 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Button variant="primary" onClick={() => navigate("/register")}>
          Create Account
        </Button>

        <Button variant="secondary" onClick={() => navigate("/login")}>
          Already Registered? Login
        </Button>
      </div>
    </Layout>
  );
}

export default Home;
