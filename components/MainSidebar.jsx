import React, {useContext, useState} from 'react'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'

const MainSidebar = ({ width }) => {

    const {user, signOut} = useContext(AuthContext) 
    // const [askQuestionLink, setAskQuestionLink] = useState(null)
    // if (!user){
    //     setAskQuestionLink("/auth/signin")
    // }else {

    // }
    
    return (
        <div style={{ width: `${width}rem` }} className='h-screen bg-neutral-50 px-2'>
            <h3 className='font-bold text-2xl text-gray-700 '>QuickLinks</h3>
            <div className='bg-red-600 w-20 -my-1 mx-3 py-1 rounded transition hover:mx-6'></div>
            <div className='mt-8 '>
                <Link href = "/me/dashboard">
                    <a href="#" className=''>
                    <div className='shadow rounded bg-gray-200 mt-3 group hover:pb-2 hover:bg-slate-200 transition-ease-in'>
                    <h4 className='text-xl text-slate-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg> DashBoard
                    </h4>
                </div>
                    </a>
                </Link>
                {user? (
                    <Link href={"/question/ask"}>
                    <div className='shadow rounded bg-gray-200 mt-3'>
                        <h4 className='text-xl text-slate-700 group hover:pb-2 hover:bg-slate-200 '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Ask Question
                        </h4>
                    </div>
                    </Link>
                ): (
                    <Link href={"/auth/signin"}>
                <div className='shadow rounded bg-gray-200 mt-3'>
                    <h4 className='text-xl text-slate-700 group hover:pb-2 hover:bg-slate-200 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Ask Question
                    </h4>
                </div>
                </Link>
                )}
                

                <Link href = "/question/unanswered">
                <div className='shadow rounded bg-gray-200 mt-3 '>
                    <h4 className='text-xl text-slate-700 group hover:pb-2 hover:bg-slate-200 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                        </svg>
                        Answer Questions
                    </h4>
                </div>
                </Link>

                <a href="https://www.manuscripts.tech/" target="_blank">
                <div className='shadow rounded bg-gray-200 mt-3 '>
                    <h4 className='text-xl text-slate-700 group hover:pb-2 hover:bg-slate-200 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        View blogs
                    </h4>
                </div>
                </a>
                <Link href="#">
                <div className='shadow rounded bg-gray-200 mt-3'>
                    <h4 className='text-xl text-slate-700 group hover:pb-2 hover:bg-slate-200 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg> Logout
                    </h4>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default MainSidebar
