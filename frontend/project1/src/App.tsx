import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordV, setPasswordV] = useState('');
  const [isLoginOpened, setIsLoginOpened] = useState(false);
  const [isRegistrationOpened, setIsRegistrationOpened] = useState(false);
  const [error, setError] = useState('');

  const BASE_URL = "http://localhost:5000"

  const handleL = async (e) => {
    e.preventDefault();
    console.log(`Login: ${email} | ${password}`);

    try{
      const res = await axios.post(`${BASE_URL}/users`)
    }catch {

    }
  }
  const handleR = async (e) => {
    e.preventDefault();
    console.log(`Registered: ${email} | ${password}`);


    try{

    }catch (err) {

    }
  }

  const loginToggle = () => {
    setIsLoginOpened(!isLoginOpened)
  }
  
  const registerToggle = () => {
    setIsRegistrationOpened(!isRegistrationOpened)
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
        <button className="bg-white text-black px-4 py-2 rounded" onClick={loginToggle}>Login</button>
        <button className="bg-white text-black px-4 py-2 rounded ml-2" onClick={registerToggle}>Register</button>

        {
          isLoginOpened && (
            <motion.div 
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50" 
            onClick={loginToggle}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 w-80"
                onClick={e => e.stopPropagation()}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{ duration: 0.3 }}
              >
                  <h2 className="text-xl font-semibold mb-4">Login</h2>
                  <form onSubmit={handleL}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </form>
              </motion.div>
            </motion.div>
          )
        }
{
          isRegistrationOpened && (
            <motion.div 
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50" 
            onClick={registerToggle}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 w-80"
                onClick={e => e.stopPropagation()}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{ duration: 0.3 }}
              >
                  <h2 className="text-xl font-semibold mb-4">Registration</h2>
                  <form onSubmit={handleR}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Verify Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  value={passwordV}
                  onChange={(e) => setPasswordV(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Register
              </button>
            </form>
              </motion.div>
            </motion.div>
          )
        }
    </div>
  );

};

export default AuthForm;
