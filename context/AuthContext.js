import {createContext, useState, useEffect} from "react"
import { useRouter } from "next/router"

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const router = useRouter()
    const [user, setUser] = useState()
    const [jwt, SetJwt] = useState()
    const [error, setError] = useState()

    useEffect(()=>{
        checkLoggedIn()
    }, [])

    const signIn = async({email:identifier, password})=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signin`, {
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ 
                identifier,
                password
            })
        })
        const json =  await res.json()
        console.log(json)
        if(res.ok){
            setUser(json.user)
            router.push("/me/dashboard")
        }else {
            setError(res.message)
            
            setUser(null)
        }
    }

    const signUp = async(user)=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signup`, {
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        const json =  await res.json()
        console.log(json)
        if(res.ok){
            setUser(json.user)
            router.push("/me/dashboard")
        }else {
            setError(json.message)
            // setError(null)
            setUser(null)
        }
    }

    const signOut = async()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signout`, {
            method : "POST"
        });
        if(res.ok){
            setUser(null)
            router.push("/")
        }
    }

    const checkLoggedIn = async(user)=>{
       const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/user`);
       const data = await res.json()
       if(res.ok){
        setUser(data.user);
        SetJwt(data)
       }else{
        setUser(null)
       }
    }

    return(
        <AuthContext.Provider value={{user, jwt, error, signIn, signUp, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;