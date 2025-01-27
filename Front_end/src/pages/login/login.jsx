/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Homepages } from '..';
function Login() {
    
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); 
  
  const handleLogin = async () => {
    try {
      // Fetch user data from the API
      const response = await fetch('https://dummyjson.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();

      // Find the user with the provided username
      const matchedUser = userData.users.find(user => user.username === username);

      // Check if user exists and password matches
      if (matchedUser && matchedUser.password === password) {
        console.log('Login successful for user:', matchedUser);
        // Perform additional actions upon successful login, such as redirecting
        setLoggedIn(true);
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setError('An error occurred while trying to login');
    }
  };

  if (loggedIn) {
    return(
        <Homepages/>
    );
  }

    return (
        <div
            className=""
            style={{
                backgroundImage:
                    'url("https://images.pexels.com/photos/1048283/pexels-photo-1048283.jpeg?cs=srgb&dl=pexels-lisa-fotios-1048283.jpg&fm=jpg")',
                backgroundSize: 'cover',
                height: '100vh', // Đặt chiều cao là 100% của chiều cao màn hình
            }}
        >
            <div className="flex justify-center p-44    ">
                
                <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
                        <h3 class="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                            Sign In
                        </h3>
                    </div>
                    <div class="flex flex-col gap-4 p-6">
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                                placeholder=""
                                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                placeholder=""
                                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                        <div class="-ml-2.5">
                            <div class="inline-flex items-center">
                                <label
                                    data-ripple-dark="true"
                                    for="checkbox"
                                    class="relative flex cursor-pointer items-center rounded-full p-3"
                                >
                                    <input
                                        id="checkbox"
                                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-cyan-500 checked:bg-cyan-500 checked:before:bg-cyan-500 hover:before:opacity-10"
                                        type="checkbox"
                                    />
                                    <span class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                        <svg
                                            stroke-width="1"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            class="h-3.5 w-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                clip-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </label>
                                <label
                                    for="checkbox"
                                    class="mt-px cursor-pointer select-none font-light text-gray-700"
                                >
                                    Remember Me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 pt-0">
                        <button
                        
                        data-ripple-light="true"
                        type="button"
                        onClick={handleLogin} // Gọi hàm handleLogin khi nút được nhấn
                        className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            Sign In
                    
                        </button>
                        <p class="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                            Don't have an account?
                            <a
                                class="ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased"
                                href="/signup"
                            >
                                Sign up 
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
