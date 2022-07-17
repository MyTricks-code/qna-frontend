import React, { useState} from 'react'
import Seo from '../../../components/seo'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { headers } from 'next.config';

const id = ({defaultData}) => {
    const [val, setValue] = useState({
        title: defaultData.attributes.title,
        description: defaultData.attributes.description,
      })
      const { title, description} = val
    
      const router = useRouter()
      const handleSubmit = async (e) => {
        e.preventDefault()
        const emptyFieldCheck = Object.values(val).some((element) => element === "")
        if (emptyFieldCheck) {
          toast.error("Please Fill All The Field")
        } else {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions/${defaultData.id}`, {
            method: "PUT",
            headers: {
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
            toast.success("Changes Updated")
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
    <>
    <Seo title={"Edit This Question"}></Seo>
    <div className='mt-16 mb-6'>
      <Seo title={"Edit this Question"}></Seo>
      <div className="pt-6 flex">
        <h1 className='text-4xl font-bold text-center w-50'>Edit this Question</h1>
        <ToastContainer />
      </div>
      <div className="mx-6 rounded-sm shadow-md bg-neutral-50 mt-6">
        <form onSubmit={handleSubmit} className="text-center mr-6">
            <div className=' flex text-left ml-16 pr-16'>
              <label htmlFor="title" className='font-bold text-2xl px-2 py-2 ml-2' >Title:</label>
              <input className='w-full px-2 text-xl rounded bg-gray-300 w-90' type="text" name='title' id="title" value={title} onChange={handelInputChange} />
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
            <input type="submit" name="submit" id="submit" value="Update" className='btn bg-orange-500 font-bold text-xl w-40 shadow-sm hover:shadow-lg hover:bg-orange-400' />
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default id

export async function getServerSideProps({params : {id}, req }){
    console.log ( "JWT "+ req.headers.cookie)
    const url = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions/${id}`)
    const defaultData = await url.json()
    return{
        props : {
            defaultData : defaultData.data
        }
    }
}