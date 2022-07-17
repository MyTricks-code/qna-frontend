import React from 'react'
import Moment from "react-moment"
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Seo from './seo'
import {useRouter} from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionDetail = ({question}) => {
  const router = useRouter()
  const deleteItem = async(e)=>{
    e.preventDefault()
    if(window.confirm("Are Sure Want to delete this question")){
      const url = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions/${question.id}` ,{
        method : "DELETE"
      })
      router.push("/")
      toast.success("Question Deleted")
    }
  }

  return (
    <div className='mt-16'>
        <Seo title={question.attributes.title + " | Qna Site"}></Seo>
        <div className='pt-6 bg-neutral-100 shadow-lg border-b-1 curved border-blue-500 lg:mx-6'>

        <ToastContainer/>

            <h4 className='text-small text-left font-semibold rounded-sm mx-4 bg-red-600 text-neutral-50 inline-flex'>Published:
                <Moment format='MM, Do, YYYY'>
                    {question.attributes.createdAt}
                </Moment>
            </h4>
            <div className='inline-flex text-right'>
            
                <h5 className='text-slate-600'> &nbsp; 
                Updated:  
                <Moment format='MM, Do, YYYY'>
                    {question.attributes.createdAt}
                </Moment>
                </h5> 
            </div>
        
            <div className="flex">
              <div className="w-60">

                <button onClick={deleteItem} href="#" className=' ml-2 btn btn-danger '>Delete</button>
            
              </div>
            <div className='ml-auto mr-2 flex align-middle justify-end '>
                <Link href={`/question/edit/${question.id}`}>
                <a  href="#" className='btn btn-secondary mx-2'>Edit</a>
                </Link>
                
                <Link href="/question/ask">
                <a  href="#" className='btn btn-primary'>Ask Question</a>
                </Link>
                
            </div>
            </div>
            <h1 className='text-4xl text-gray-800 text-center font-bold mb-2'>{question.attributes.title}</h1>
            <div className='flex border-b-2 border-slate-600 ml-6'>
            
            <ReactMarkdown
                  children={question.attributes.description}
                //   escapeHtml={false}
                  className = "flex prose-headings:text-gray-700  text-gray-700  prose-blockquote:text-gray-700  prose-strong:text-gray-200 prose-lg prose xl:prose-xl prose-img:border-2px prose-img:border-gray-600 prose-h1:underline prose-a:bg-cyan-400 hover:prose-a:bg-blue-200 hover:prose-a:no-underline prose-a:no-underline prose-code:max-w-xl  prose-code:text-gray-200"
                  style={{ textDecoration: 'none' }}
            /> 
            </div>
            <div className="text-4xl font-bold text-left ml-6">Answers</div>
            <div className="flex align-items justify-center">
              <div>
                {question.attributes.answers.data.map((item)=>{
                  return(
                    <div className='my-2 px-2 border-blue-200 border-2 p -4'>
                      <ReactMarkdown
                  children={item.attributes.description}
                //   escapeHtml={false}
                  className = "prose-headings:text-gray-700  text-gray-700  prose-blockquote:text-gray-700  prose-strong:text-gray-200 prose-lg prose xl:prose-xl prose-img:border-2px prose-img:border-gray-600 prose-h1:underline prose-a:bg-cyan-400 hover:prose-a:bg-blue-200 hover:prose-a:no-underline prose-a:no-underline prose-code:max-w-xl  prose-code:text-gray-200"
                  style={{ textDecoration: 'none' }}
            />
                    </div>
                  )
                })}
              </div>
            </div>
        </div>

    </div>
  )
}

export default QuestionDetail