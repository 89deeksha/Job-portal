import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signupform({ setSignup }) {
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (role === 'Job Seeker') {
      navigate('/dashboard');
    } else {
      alert(`You selected the role: ${role}`);
    }

    setSignup(false);
  };

  return (
    <div className="flex flex-col justify-center relative">
      <form className="fixed top-5 left-1/2 -translate-x-1/2 flex h-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col h-auto w-[100] rounded-md border border-black px-7 py-3 bg-white shadow-md">
          <h1 className="text-xl font-bold text-center">Signup</h1>
          <p className="text-center text-gray-600">Please fill the form to create an account</p>

          {/* First Name */}
          <div className="mt-2 flex flex-col">
            <label className="font-medium">First Name:</label>
            <input className="h-10 w-full px-3 rounded-md border border-gray-400" type="text" placeholder="Enter first name" required />
          </div>

          {/* Last Name */}
          <div className="mt-2 flex flex-col">
            <label className="font-medium">Last Name:</label>
            <input className="h-10 w-full px-3 rounded-md border border-gray-400" type="text" placeholder="Enter last name" required />
          </div>

          {/* Email */}
          <div className="mt-2 flex flex-col">
            <label className="font-medium">Email:</label>
            <input className="h-10 w-full px-3 rounded-md border border-gray-400" type="email" placeholder="Enter email" required />
          </div>

          {/* Phone */}
          <div className="mt-2 flex flex-col">
            <label className="font-medium">Phone:</label>
            <input className="h-10 w-full px-3 rounded-md border border-gray-400" type="tel" placeholder="Enter phone number" required />
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

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 w-20 rounded-md hover:bg-blue-400 mt-4"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white py-2 w-20 rounded-md hover:bg-blue-400 mt-4"
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
