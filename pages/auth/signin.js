import React, { useState, useEffect, useContext } from 'react'
import Seo from '../../components/seo'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '@/context/AuthContext'


export default function signIn(){
  const {signIn, error} = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(()=>{
    error && toast.error(error)
  }, [error])

  const handleSubmit = async(e)=>{
    e.preventDefault();
    signIn({email, password})
  }

  return (
    <div className='mt-16'>
      <Seo title={"Login User"}></Seo>
      <div className="pt-16 flex align-middle justify-center">
        <ToastContainer />
        <div className='fx w-50 md:w-50 md:mx-auto bg-neutral-50 shadow-xl rounded-xl h-50 '>
          <h1 className='text-4xl text-center mt-4 font-bold text-gray-800'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 pb-2 w-10 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Login User
          </h1>
          <div className='text-center'>
          <form onSubmit={handleSubmit}>
            <div className="my-2 mx-auto font-bold text-xl px-2">
              <label htmlFor="email">Email: &nbsp;</label>
              <input type="email" name="email" id='email' value={email} className="text-xl my-2 bg-slate-300" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="my-2 lg:mr-10  font-bold text-xl px-2">
              <label htmlFor="password">Password: &nbsp;</label>
              <input type="password" name="password" id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className="text-xl my-2 bg-slate-300"  />
            </div>
            <input type="submit" value="Sign In" className='w-40 text-center bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-neutral-100 text-lg font-bold mb-2' />
            <h4 className="mb-6 text-slate-600">Don't have an Account? <Link href="/auth/signup"><a href="#" className='text-blue-600'> Register</a></Link></h4>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}
