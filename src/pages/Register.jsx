import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (e) => {

    e.preventDefault();
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "name": name,
      "email": email,
      "password": password
    });

    let reqOptions = {
      url: "https://eternal-backend.onrender.com/auth/register",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }

    axios(reqOptions).then(
      function (response) {
        if(response.data.token){
          // const auttoken = response.data.token
          // localStorage.setItem('authtoken', auttoken);
          toast(response.data.message)
          toast.success('Login after user registerd', {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
            iconTheme: {
              primary: '#713200',
              secondary: '#FFFAEE',
            },
          });

         return navigate("/");
        }
      }
    ).catch(
      function (error) {
        console.log(error)
        toast.error('Successfully toasted!')
        return Promise.reject(error)
      }
    )
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")

  return (
    <div>
      <div className="text-center mt-8">
        <div className="flex items-center justify-center">
          <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-4xl tracking-tight">
          Register
        </h2>
        <span className="text-sm mt-2">or
          <Link to="/">
            <p className="text-blue-500">
              login
            </p>
          </Link>
        </span>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form onSubmit={handleRegister} className="w-full max-w-xl bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-full px-3 mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='name'>Name</label>
              <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                value={name}
                onChange={e => setName(e.target.value)}
                type='text' required />
            </div>
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
              <button type='submit' className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register