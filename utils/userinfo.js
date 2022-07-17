export default async function(user){

    console.log("user info in command")
    const url = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/userinfo?username=${user}`)
    const res = url.json
}