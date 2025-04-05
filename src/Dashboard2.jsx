import React from "react";

function HiringManagerDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hiring Manager Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Post a Job</h2>
          <p className="text-sm text-gray-600">Create a new job listing.</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Post Job
          </button>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-semibold">View Applicants</h2>
          <p className="text-sm text-gray-600">Check applicants for your jobs.</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            View Applicants
          </button>
        </div>
      </div>
    </div>
  );
}

export default HiringManagerDashboard;
