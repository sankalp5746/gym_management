'use client';

import { Button } from '@/components/ui/button';
import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function JoinNow() {
  const [uname, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!uname.trim() || !password.trim()) {
      alert('Please fill in both Username and Password.');
      return;
    }

    // You can add API call logic here if needed

    router.push('/UserPage');
  };

  return (
    <>
      <h1 className='container flex justify-center mx-auto my-0 mt-10 mb-5 text-2xl font-bold'>Join Now</h1>
      <form
        onSubmit={handleSubmit}
        className='container align-middle flex-row justify-center border-gray-700 rounded-lg border-2 mx-auto my-0 mt-0.5 mb-0.5 px-10 py-10 max-w-fit'
      >
        <div className='flex font-bold justify-center'>
          <label className='mt-0.5 mb-0.5 px-3 py-3'>User Name</label>
          <input
            type='text'
            value={uname}
            onChange={(e) => setName(e.target.value)}
            className='flex justify-center border-gray-700 rounded-lg border-2 mt-0.5 mb-0.5 px-3 py-3'
            placeholder='Enter Your Username'
          />
        </div>
        <div className='flex font-bold justify-center'>
          <label className='mt-0.5 mb-0.5 px-3 py-3'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='flex justify-center border-gray-700 rounded-lg border-2 mt-0.5 mb-0.5 px-3 py-3'
            placeholder='Enter Your Password'
          />
        </div>
        <center>
          <Button type='submit' className='flex justify-center mt-5'>
            Log In
          </Button>
        </center>
      </form>
    </>
  );
}
