import  { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useNavigate} from "react-router-dom"
import Layout from "../Components/Layout";
import Button from "../Components/Button";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "no",
  });

  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.trim() !== "";

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return; 

    navigate("/login");
  };

  return (
      <Layout>
        <h1 className="text-2xl font-bold text-gray-800">
          Create your PopX account
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextField
            required
            type="text"
            label="Full Name"
            placeholder="Enter full name"
            variant="outlined"
            value={formData.fullName}
            onChange={handleChange("fullName")}
            fullWidth
            InputLabelProps={{
              shrink: true,
              style: { color: "#6C63FF" },
              classes: { asterisk: "text-red-500" },
            }}
          />

          <TextField
            required
            type="number"
            label="Phone Number"
            placeholder="Enter phone number"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange("phone")}
            fullWidth
            InputLabelProps={{
              shrink: true,
              style: { color: "#6C63FF" },
              classes: { asterisk: "text-red-500" },
            }}
          />

          <TextField
            required
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            variant="outlined"
            value={formData.email}
            onChange={handleChange("email")}
            fullWidth
            InputLabelProps={{
              shrink: true,
              style: { color: "#6C63FF" },
              classes: { asterisk: "text-red-500" },
            }}
          />

          <TextField
            required
            label="Password"
            placeholder="Enter password"
            variant="outlined"
            type="password"
            value={formData.password}
            onChange={handleChange("password")}
            fullWidth
            InputLabelProps={{
              shrink: true,
              style: { color: "#6C63FF" },
              classes: { asterisk: "text-red-500" },
            }}
          />

          <TextField
            type="text"
            label="Company Name"
            placeholder="Enter company name"
            variant="outlined"
            value={formData.company}
            onChange={handleChange("company")}
            fullWidth
            InputLabelProps={{
              shrink: true,
              style: { color: "#6C63FF" },
            }}
          />

          <div className="flex flex-col gap-2">
            <p className="text-gray-800 font-medium">Are you an Agency?</p>
            <RadioGroup
              row
              value={formData.isAgency}
              onChange={handleChange("isAgency")}
            >
              <FormControlLabel
                value="yes"
                control={<Radio sx={{ color: "#6C63FF", "&.Mui-checked": { color: "#6C63FF" } }} />}
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={<Radio sx={{ color: "#6C63FF", "&.Mui-checked": { color: "#6C63FF" } }} />}
                label="No"
              />
            </RadioGroup>
          </div>

        <Button type="submit" disabled={!isFormValid} variant="primary">
          Create Account
        </Button>
        </form>
      </Layout>
  );
}

export default Register;
