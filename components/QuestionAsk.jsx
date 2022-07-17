import React, { useState } from 'react'
import Seo from './seo'
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Js cookie

const QuestionAsk = () => {

  const [val, setValue] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  })
  const { title, description, date, time } = val
  const router = useRouter()
  const handleSubmit = async (e, req) => {
    e.preventDefault()
    const emptyFieldCheck = Object.values(val).some((element) => element === "")
    if (emptyFieldCheck) {
      toast.error("Please Fill All The Field")
    } else {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions`, {
        method: "POST",
        headers: {
          'Authorization': 'Bearer ' +  token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: { title: title, description: description } })
      })

      if (!response.ok) {
        toast.error("Something Went Wrong")
        // console.log(value)
      } else {
        const question = await response.json()
        console.log(question)
        router.push(`/question/${question.data.attributes.slug}`)
      }
    }
  }

  const handelInputChange = (e) => {
    const { name, value } = e.target
    setValue({ ...val, [name]: value })
  }

  console.log(title)

  return (
    <div className='mt-16 mb-6'>
      <Seo title={"Ask Questions from the community"}></Seo>
      <div className="pt-6 flex">
        <h1 className='text-4xl font-bold text-center w-50'>Ask a Question</h1>
        <ToastContainer />
        <p className='text-lg font-semibold block md:inline-flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus, nobis voluptate est, officiis voluptatibus aliquam culpa pariatur libero dolorem dolores, modi ipsa recusandae voluptates.</p>
      </div>
      <div className="mx-6 rounded-sm shadow-md bg-neutral-50 mt-6">
        <form onSubmit={handleSubmit} className="text-center mr-6">
          <div className="lg:flex">
            <div className='text-left ml-16 pr-16'>
              <label htmlFor="title" className='font-bold text-2xl px-2 py-6' >Title:</label>
              <input className='text-xl rounded bg-gray-300 w-90' type="text" name='title' id="title" value={title} onChange={handelInputChange} />
            </div>
            <div className='text-left ml-16 pr-16 pb-6'>
              <label htmlFor="time" className='font-bold text-2xl px-2 py-6' >Time:</label>
              <input className='text-xl  bg-gray-300 w-90' type="time" name='time' id="time" value={time} onChange={handelInputChange} />
            </div>
            <div className='text-left ml-16 pr-16'>
              <label htmlFor="date" className='font-bold text-2xl px-2 py-6' >Date:</label>
              <input className='text-xl rounded bg-gray-300 w-90' type="date" name='date' id="date" value={date} onChange={handelInputChange} />
            </div>
          </div>
          <div className='bg-white mx-6 mb-6'>
            {/* <Editor
              value={description}  
              // editorState={description}            
              // editorRef={description}
              onEditorStateChange={handleSubmit}
            /> */}
            <div className='text-left ml-16 pr-16'>
              <label htmlFor="description" className='font-bold text-2xl px-2 py-6' >Description:</label>
              <textarea className='text-xl w-full h-screen rounded bg-gray-300 w-90' type="text" name='description' id="description" value={description} onChange={handelInputChange} />
            </div>
          </div>
          <div className="py-6  rounded-sm ">
            <input type="submit" name="submit" id="submit" value="Ask Question" className='btn bg-orange-500 font-bold text-xl w-40 shadow-sm hover:shadow-lg hover:bg-orange-400' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default QuestionAsk