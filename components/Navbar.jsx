import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter("")

  // Search
  const [term, setTerm] =useState()
  const searchFunction = (e)=>{
    e.preventDefault()
    if(term===""){
      setTerm("Enter Here")
    } else {
      router.push(`/question/search?term=${term}`)
    }
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-2xl shadow-xl">
  <div className="container-fluid">
    <Link href="/"><a className="navbar-brand text-2xl font-bold" href="#">The Secret Society of KOTA</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
           </ul> 
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" onSubmit={searchFunction}>
        <input 
        className="form-control me-2" 
        type="text" 
        value={term}
        placeholder="Search"  
        aria-label="Search"  
        onChange={(e)=>setTerm(e.target.value)} />
        <button className="btn btn-outline-success" type="submit" onClick={searchFunction}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar