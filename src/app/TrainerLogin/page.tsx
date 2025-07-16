'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const TrainerLogin = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/'); // Navigate to home
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="border-2 border-black rounded-xl px-10 py-8 w-full max-w-md shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-center">Trainer Login</h2>

        <div>
          <label className="block text-lg font-medium mb-1">Name:</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border-2 border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-1">Phone Number:</label>
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="border-2 border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TrainerLogin;
