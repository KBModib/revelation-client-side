import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";
import LoginImg from '../../components/images/Login.PNG';
import { auth } from "../../components/config/Firebase";
import { useNavigate } from "react-router-dom";
import '../../tail.css'

export default function Welcome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/home");
      }
    });
  }, []);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => alert(err.message));
  };
  const handleRegister = () => {
    if (registerInformation.email !== registerInformation.confirmEmail) {
      alert("Please confirm that email are the same");
      return;
    } else if (
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      alert("Please confirm that password are the same");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        navigate("/home");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
    <div className='hidden sm:block'>
             <img className='w-full h-full object-cover' src={LoginImg} alt=" " />
        </div>
        <div className='bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
        
        {isRegistering ? (
          <>
          <div className='flex flex-col text-gray-400 py-2' >
        <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={registerInformation.email}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  email: e.target.value
                })
              }
              className='rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus: bg-gray-800 focus:outline-none '
              />

        </div>
        
        <div className='flex flex-col text-gray-400 py-2' >
        <label>Confirm Email</label>
            <input
              type="email"
              placeholder="Confirm Email"
              value={registerInformation.confirmEmail}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  confirmEmail: e.target.value
                })
              }
              className='rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus: bg-gray-800 focus:outline-none '/>
              </div>

              <div className='flex flex-col text-gray-400 py-2' >
              <label>Password</label>
             <input
              type="password"
              placeholder="Password"
              value={registerInformation.password}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  password: e.target.value
                })
              }
              className='rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus: bg-gray-800 focus:outline-none '
              />
              </div>

              <div className='flex flex-col text-gray-400 py-2' >
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={registerInformation.confirmPassword}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  confirmPassword: e.target.value
                })
              }
              className='rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus: bg-gray-800 focus:outline-none '
              />

            </div>
            <button className='w-full my-5 py-2 bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
             onClick={handleRegister}>Register</button>
            <button className='w-full my-5 py-2 bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
             onClick={() => setIsRegistering(false)}>Go back</button>
          </>
        ) : (
          <>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Email</label>

            <input type="email" placeholder="Email" onChange={handleEmailChange} value={email} className='rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus: bg-gray-800 focus:outline-none '
             />
             </div>

             <div className='flex flex-col text-gray-400 py-2' >
              <label>Password</label>
            <input
              type="password"
              onChange={handlePasswordChange}
              value={password}
              placeholder="Password"
              className='rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus: bg-gray-800 focus:outline-none '
              />
              </div>
            <button className='w-full my-5 py-2 bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
             onClick={handleSignIn}>
              Sign In
            </button>
            <button
              
              onClick={() => setIsRegistering(true)}
              className='w-full my-5 py-2 bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
              >
              Create an account
            </button>
          </>
        )}
         </form>
      </div>
    </div>
  );
}