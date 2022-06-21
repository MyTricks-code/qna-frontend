import React from 'react'
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t-2 border-black mt-6 flex align-middle justify-center">
        <Link href={"/"}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="text-blue-500 px-4 text-3xl">
            Qna Site
          </span>
        </a>
        </Link>
    </footer>    
  )
}

export default Footer