import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signupform({ setSignup }) {
  const [details, setDetails] = useState({
    Name: "",
    Lastname: "",
    email: "",
    phone: "",
  });

  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic field validation
    if (!details.Name || !details.Lastname || !details.email || !details.phone) {
      alert("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(details.email)) {
      alert("Invalid email format.");
      return;
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(details.phone)) {
      alert("Phone number must be 10 digits.");
      return;
    }

    // Password strength check
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // Confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Role check
    if (!role) {
      alert("Please select a role.");
      return;
    }

    // You can replace this with API call
    console.log("User data submitted:", {
      ...details,
      password,
      role,
    });

    // Navigate based on role
    if (role === "Job Seeker") navigate("/dashboard1");
    else if (role === "Hiring Manager") navigate("/dashboard2");
    else if (role === "Recruiter") navigate("/dashboard3");

    setSignup(false);
  };

  return (
    <div className="flex flex-col justify-center relative">
      <form
        className="fixed top-5 left-1/2 -translate-x-1/2 flex h-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col h-auto w-[350px] rounded-md border border-black px-7 py-3 bg-white shadow-md">
          <h1 className="text-xl font-bold text-center">Signup</h1>
          <p className="text-center text-gray-600">Please fill the form to create an account</p>

          {/* First Name */}
          <div className="mt-2 flex flex-col">
            <label className="font-medium">First Name:</label>
            <input
              className="h-10 w-full px-3 rounded-md border border-gray-400"
              type="text"
              placeholder="Enter first name"
              value={details.Name}
              onChange={(e) => setDetails({ ...details, Name: e.target.value })}
              required
            />
          </div>

          {/* Last Name */}
          <div className="mt-2 flex flex-col">
            <label className="font-medium">Last Name:</label>
            <input
              className="h-10 w-full px-3 rounded-md border border-gray-400"
              type="text"
              placeholder="Enter last name"
              value={details.Lastname}
              onChange={(e) => setDetails({ ...details, Lastname: e.target.value })}
              required
            />
          </div>

          {/* Email */}
          <div className="mt-2 flex flex-col">
            <label className="font-medium">Email:</label>
            <input
              className="h-10 w-full px-3 rounded-md border border-gray-400"
              type="email"
              placeholder="Enter email"
              value={details.email}
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
              required
            />
          </div>

          {/* Phone */}
          <div className="mt-2 flex flex-col">
            <label className="font-medium">Phone:</label>
            <input
              className="h-10 w-full px-3 rounded-md border border-gray-400"
              type="tel"
              placeholder="Enter phone number"
              value={details.phone}
              onChange={(e) => setDetails({ ...details, phone: e.target.value })}
              required
            />
          </div>

          {/* Role */}
          <div className="mt-2 flex flex-col">
            <label className="font-medium">Role:</label>
            <select
              className="border p-2 rounded-md"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>Select Role</option>
              <option value="Job Seeker">Job Seeker</option>
              <option value="Hiring Manager">Hiring Manager</option>
              <option value="Recruiter">Recruiter</option>
            </select>
          </div>

          {/* Password */}
          <div className="mt-2 flex flex-col">
            <label className="font-medium">Password:</label>
            <input
              className="h-10 w-full px-3 rounded-md border border-gray-400"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-2 flex flex-col">
            <label className="font-medium">Confirm Password:</label>
            <input
              className="h-10 w-full px-3 rounded-md border border-gray-400"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2 justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 w-20 rounded-md hover:bg-blue-400 mt-4"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white py-2 w-20 rounded-md hover:bg-gray-400 mt-4"
              onClick={() => setSignup(false)}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signupform;
