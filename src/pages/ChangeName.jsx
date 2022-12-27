import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const ChangeName = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("")

  useEffect(() => {
    const token = localStorage.getItem('authtoken')
    if (token === null) {
      navigate("/")
    }
  }, [navigate])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let headersList = {
      "Accept": "*/*",
      "Authorization": `Bearer ${localStorage.getItem('authtoken')}` ,
      "Content-Type": "application/json" 
     }
     
     let bodyContent = JSON.stringify({
     "name": name
     });
     
     let reqOptions = {
       url: "https://eternal-backend.onrender.com/auth/name",
       method: "POST",
       headers: headersList,
       data: bodyContent,
     }

     axios(reqOptions).then(
      function (response) {
        console.log(response.data)
        navigate("/home");
      }
    ).catch(
      function (error) {
        console.log(error.message)
      }
    )

  }
  return (
    <div>
       <div>
      <div class="text-center mt-12">
        <div class="flex items-center justify-center">
          {/* <svg fill="none" viewBox="0 0 24 24" class="w-12 h-12 text-blue-500" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg> */}
        </div>
        <h2 class="text-4xl tracking-tight">
          Change Name
        </h2>
        
      </div>
      <div class="flex justify-center my-2 mx-4 md:mx-0">
        <form onSubmit={handleSubmit} class="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div class="flex flex-wrap -mx-3 mb-6">

            <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>New Username</label>
              <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                value={name}
                onChange={e => setname(e.target.value)}
                type='text' required />
            </div>
            {/* <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Password</label>
              <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                value={password}
                onChange={e => setPass(e.target.value)}
                type='password' required />
            </div> */}
            <div class="w-full flex items-center justify-between px-3 mb-3 ">

            </div>
            <div class="w-full md:w-full px-3 mt-4">
              <button type='submit' class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Change name</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default ChangeName