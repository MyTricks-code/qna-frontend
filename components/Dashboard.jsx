import React, { useContext } from 'react'
import Link from 'next/link'
import Seo from './seo'
import AuthContext from '@/context/AuthContext'
import Moment from 'react-moment'

const Dashboard = ({ user }) => {
  const { signOut, error } = useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault
    signOut()
  }

  return (
    <div className='mt-6'>
      <Seo title={"Dashboard -QNA Site"}></Seo>
      <div className="pt-6">
        <h1 className='text-center text-4xl pt-6 font-bold'>DashBoard</h1>
      </div>
      <p className='-mt-2 text-center'>Namaste <span className='underline decoration-red-500 font-bold'>{user.username}!</span> Manage your content here.</p>

      <div className='shadow-lg bg-neutral-50 rounded-b mx-6 mb-2 mt-6'>
        <h3 className='text-2xl mx-16'>Quick Links</h3>
        <div className="mx-16 lg-w-50 grid grid-cols-3 gap-6">
          <Link href="/question/ask">
            <a href="#" className='text-green-600 hover:text-green-700 px-16'>Ask Question</a></Link>
          <Link href="/question/ask">
            <a href="#" className='text-green-600 hover:text-green-700 px-16'>Ask Question</a></Link>
          <Link href="/question/ask">
            <a href="#" className='text-green-600 hover:text-green-700 px-16'>Ask Question</a></Link>
        </div>
      </div>
      <div className='shadow-lg bg-neutral-50 rounded-b mx-6 mb-2 mt-6'>
        <h2 className='text-4xl font-bold text-left mx-6'>Questions Asked</h2>
        <div className='mt-2 mx-2'>
          <table className="w-full table-fixed">
            <thead>
              <tr className='border-b-2 border-gray-700'>
                <th className='text-xl md:text-2xl text-slate-700 w-30'>Title</th>
                <th className='text-xl md:text-2xl text-slate-700 w-50 mx-2'>Description</th>
                <th className='text-xl md:text-2xl text-slate-700 text-right'>Date</th>
              </tr>
            </thead>
            <tbody>
              {
                user.questions.map((item) => {
                
                  return (
                    <Link href={`/question/${item.slug}`}>
                    <tr className='border-b-2 border-gray-400 cursor-pointer hover:bg-gray-300 transition'>
                      <td>{item.title}</td>
                      <td>{item.description.substring(0, 60) + "..." || "Nil"}</td>
                      <td className='text-right'>
                        <Moment format='MMM Do, YYYY'>{item.createdAt}</Moment>
                      </td>
                    </tr>
                    </Link>

                  )
                })
              }
            </tbody>
          </table>
          <div className="p-2"></div>
        </div>
      </div>
      <div className='mx-auto'>
        <button className='btn btn-danger text-xl font-bold' onClick={handleSubmit}>Sign Out</button>
      </div>
    </div>
  )
}

export default Dashboard