
export default async (req, res ,)=>{
    const {username} = req.query
    console.log(username)
    if(req.method === "GET"){
        // const {username} = params.username
        const StrapiRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users?filters[username]=${username}&populate=*`, {
            method: "GET",
        })
        const user = await StrapiRes.json()
        if(StrapiRes.ok){
            res.status(200).json({user})
        }else{
            res.status(403).json({message: "Some Thing wen wrong"})
        }
    }else{
        res.setHeader("Allow", ["GET"])
        res.status(405).json({message : `Method ${req.method} not allowed`})
    }
}