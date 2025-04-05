import React from 'react';

function Signin({ setSignin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle signin logic here
    alert("Signed in!");
    setSignin(false); // hide form after signin
  };

  return (
    <div className="p-5 border rounded-md shadow-md bg-white w-80">
      <h2 className="text-xl font-bold mb-4 text-center">Sign In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
        <button
          type="button"
          className="text-sm text-gray-500 hover:underline mt-2"
          onClick={() => setSignin(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Signin;
