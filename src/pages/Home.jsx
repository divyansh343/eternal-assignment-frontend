import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [details, setdetails] = useState({})

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authtoken')
    if (token === null) {
      navigate("/")
    }

    let headersList = {
      "Accept": "*/*",
      "Authorization": `Bearer ${localStorage.getItem('authtoken')}`
    }

    let reqOptions = {
      url: "https://eternal-backend.onrender.com/auth/details",
      method: "GET",
      headers: headersList,
    }
    axios(reqOptions).then(
      function (response) {
        console.log(response.data[0])
        setdetails(response.data[0])
      }
    ).catch(
      function (error) {
        console.log(error)
      }
    )



  }, [navigate]);

  return (
    <div className='mt-[200px]'>
      <section className="relative block h-500-px">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" >
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                  Welcome, {details.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold lowercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400 "></i>
                  {details.email}
                </div>
                <div>
                  <div>
                    <Link to="/name">
                      <p className='text-sm text-blue-600 hover:underline cursor-pointer'>Change Name</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/password">
                      <p className='text-sm text-blue-600 hover:underline cursor-pointer'>Change Password</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <p className="font-normal text-pink-500">Show more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home