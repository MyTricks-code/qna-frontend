import cookie from "cookie"

export default async (req, res)=>{
    if(req.method === "GET"){
        if(!req.headers.cookie){
            res.status(403).json({message : "Not Authorized"})
            return;
        }
        const {token} = cookie.parse(req.headers.cookie) 
        const StrapiRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/me?populate=*`, {
            method: "GET",
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        const user = await StrapiRes.json()
        if(StrapiRes.ok){
            res.status(200).json({user})
        }else{
            res.status(403).json({message: "User forbidden"})
        }
    }else{
        res.setHeader("Allow", ["POST"])
        res.status(405).json({message : `Method ${req.method} not allowed`})
    }
}