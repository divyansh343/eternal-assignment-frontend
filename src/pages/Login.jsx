import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")

  useEffect(() => {
    const token = localStorage.getItem('authtoken')
    if (token !== null) {
      navigate("/home")
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "email": email,
      "password": password
    });

    let reqOptions = {
      url: "https://eternal-backend.onrender.com/auth/login",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }

    axios(reqOptions).then(
      function (response) {
        const auttoken = response.data.token
        localStorage.setItem('authtoken', auttoken);
        toast.success(`User Logged in`)
        navigate("/home");
        setEmail("")
        setPass("")
      }
    ).catch(
      function (error) {
        toast.error("Incorrect Password");
      }
    )
  }

  return (
    <div>
      <div className="text-center mt-12">
        <div className="flex items-center justify-center">
          <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-4xl tracking-tight">
          Login
        </h2>
        <span className="text-sm mt-2">or
          <Link to="/register">
            <p className="text-blue-500">
              Register
            </p>
          </Link>
        </span>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form onSubmit={handleLogin} className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-wrap -mx-3 mb-6">

            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Email address</label>
              <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='email' required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Password</label>
              <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                value={password}
                onChange={e => setPass(e.target.value)}
                type='password' required />
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">

            </div>
            <div className="w-full md:w-full px-3 mt-4">
              <button type='submit' className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Sign in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login