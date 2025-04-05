import React from "react";

function RecruiterDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recruiter Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Search Candidates</h2>
          <p className="text-sm text-gray-600">Find suitable candidates for jobs.</p>
          <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Search
          </button>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Manage Listings</h2>
          <p className="text-sm text-gray-600">Update or remove job listings.</p>
          <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
