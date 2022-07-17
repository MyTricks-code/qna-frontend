import Dashboard from 'components/Dashboard'
import React, {useContext, useState, useEffect} from 'react'
import AuthContext from '@/context/AuthContext'
import { useRouter } from 'next/router'

const dashboard = () => {
  const {user} = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState(null)
  console.log(user)

  // const userDataFunction = async(user)=>{
  //   const url = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/userinfo?username=${user.username}`)
  //   const data = await url.json()
  //   console.log(data)
  //   return data;
  // }
  // useEffect(()=>{
  //   if(user){
  //     console.log(user.username)
  //     userDataFunction(user)
  //     // setUserInfo(data)
  //   }
  // }, [user])
  
  // console.log(user)
  // if(userInfo){
  // console.log(userInfo.user)
  // setUserInfo(userInfo.user)
  // return(
  //   <Dashboard/>
  // )
  // }

  console.log(userInfo)
  if(user){
  return (
    <>
    <Dashboard user = {user}/>
    <div>
      <h1>
        {user.username}
      </h1>
    </div>
    </>
  )}
}

export default dashboard