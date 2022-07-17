import cookie from "cookie"

export default async (req, res)=>{
    if(req.method === "POST"){
        const {identifier, password} = req.body
        
        const login = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/local`, {
            method : "POST",
            headers : {
                'Accept' : "application/json",
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({identifier:identifier, password: password})
        })
        const loginRes = await login.json();
        console.log(loginRes)

        if(login.ok){
            res.setHeader("Set-Cookie", cookie.serialize("token" , loginRes.jwt, {
                httpOnly : true,
                secure : process.env.NODE_ENV !== "production",
                sameSite: "strict",
                // maxAge : 60*60*24*7, //age of cookie
                 path : "/"
            }))
            res.status(200)
            res.send(loginRes)
        }else{
            res.status(400)
            res.send(loginRes)
        }

    }else{
        res.setHeader("Allow", ["POST"])
        res.status(405).json({message : `Method ${req.method} not allowed`})
    }
}