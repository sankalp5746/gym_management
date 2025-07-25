'use client';

import React, { useState } from 'react';

const exercises = [
  {
    exercise: "Chest Press",
    image: "./chestpress.jpg",
    desc: "Best Exercise For Chest"
  },
  {
    exercise: "Biceps Curls",
    image: "./bicepcurl.jpg",
    desc: "Best Exercise For Biceps"
  },
  {
    exercise: "Squats",
    image: "./squats.jpeg",
    desc: "Best Exercise For Legs"
  }
];

export default function UserPage() {
  // State to store the filtered exercises and search term
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // Filter exercises based on search term
    if (term === '') {
      setFilteredExercises(exercises);
    } else {
      const filtered = exercises.filter(ex => 
        ex.exercise.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredExercises(filtered);
    }
  };

  return (
    <>
      <center><h1 className='font-bold mt-5 text-3xl'>Welcome To User Page</h1></center>
      <center>
        <div className='flex justify-center'>
          <input 
            type="text" 
            className="px-3 py-3 border-1 border-blue-700 mt-10 rounded-l-2xl" 
            onChange={handleSearchChange} 
            value={searchTerm}
            placeholder="Search Exercise"
          />
          <img 
            alt="search" 
            className="bg-black px-3 py-3 rounded-r-2xl mt-10 hover:bg-gray-800" 
            src="./search.png" 
          />
        </div>
      </center>
      
      {/* Exercise cards container */}
      <div className="flex justify-center items-center mt-8 gap-6">
        {filteredExercises.map((exercise, index) => (
          <div 
            key={index} 
            className="border border-gray-300 rounded-lg p-4 w-64 shadow-md hover:bg-gray-200"
          >
            <h2 className="font-bold text-xl">{exercise.exercise}</h2>
            <p className="text-gray-600">{exercise.desc}</p>
            {/* You would replace this with your actual Image component */}
            <div className="mt-2 bg-gray-200 h-32 flex items-center justify-center">
              <img src={exercise.image} alt="image" className='h-32 w-auto'/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}