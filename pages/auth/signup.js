import React, { useState, useEffect, useContext } from 'react'
import Seo from '../../components/seo'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '@/context/AuthContext';

export default function signUp(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [username, setUsername] = useState("")
  const {signUp ,error} = useContext(AuthContext)
  useEffect(()=>{
    error && toast.error(error)
  }, [error])

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (password !== passwordConfirm){
      toast.error("Those passwords doesn't matched")
    }else{
      signUp({username, email, password})
    }
  }
  

  return (
    <div className='mt-16'>
      <Seo title={"Register User"}></Seo>
      <div className="pt-16 flex align-middle justify-center">
        <ToastContainer />
        <div className='fx w-50 md:w-50 md:mx-auto bg-neutral-50 shadow-xl rounded-xl h-100 '>
          <h1 className='text-4xl text-center mt-4 font-bold text-gray-800'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-10 inline-flex mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
</svg>
            Register User
          </h1>
          <div className='text-center'>
          <form onSubmit={handleSubmit}>
            <div className="my-2 mx-auto font-bold text-xl px-2">
              <label htmlFor="email">Email: &nbsp;</label>
              <input type="email" name="email" id='email' value={email} className="text-xl my-2 bg-slate-300" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            
            <div className="my-2 lg:mr-10  font-bold text-xl px-2">
              <label htmlFor="name">Username: &nbsp;</label>
              <input type="name" name="name" id='name' value={username} onChange={(e)=>{setUsername(e.target.value)}} className="text-xl my-2 bg-slate-300"  />
            </div>
            <div className="my-2 lg:mr-10  font-bold text-xl px-2">
              <label htmlFor="password">Password: &nbsp;</label>
              <input type="password" name="password" id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className="text-xl my-2 bg-slate-300"  />
            </div>
            <div className="my-2 lg:mr-28 font-bold text-xl px-2">
              <label htmlFor="password-confirm">Confirm Password: &nbsp;</label>
              <input type="password" name="password" id='password-confirm' value={passwordConfirm} onChange={(e)=>{setPasswordConfirm(e.target.value)}} className="text-xl my-2 bg-slate-300"  />
            </div>
            <input type="submit" value="Sign Up" className='w-40 text-center bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-neutral-100 text-lg font-bold mb-2' />
            <h4 className="mb-6 text-slate-600">Already have an account? <Link href="/auth/signin"><a href="#" className='text-blue-600'> Login</a></Link></h4>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}


