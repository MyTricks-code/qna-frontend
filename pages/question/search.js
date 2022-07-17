import QuestionCard from '../../components/QuestionCard'
import Seo from '../../components/seo'
import {useRouter} from 'next/router'

export default function Search({questions , meta}) {
    // console.log(meta.pagination.total)
    const router = useRouter()
  return (
    <>
    <Seo title={"Qna Site -Ask Experts"}/>
    <div className='shadow-lg mt-16 pb-4'> 
        <h1 className='text-4xl font-bold text-center'>Search Results</h1>
        <p className="text-center font-bold text-xl pt-6">About {meta.pagination.total} search results for the term "<span className='text-slate-700'>{router.query.term}</span>"</p>
    </div>
    <QuestionCard key={Math.random()} questions={questions}/>
    </>
  )
}

export async function getServerSideProps({query : {term}}) {
  // const query = qs.stringify
  const url = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions?_q=${term}&populate=*`)
  const res = await url.json() 
  console.log(res)
  return {
    props : {
      meta : res.meta,  
      questions : res.data,
    }
  }
}