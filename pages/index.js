import QuestionCard from '../components/QuestionCard'
import Seo  from '../components/seo'
import Link from 'next/link'
import MainSidebar from '../components/MainSidebar'

export default function Home({questions , meta}) {
  return (
    <>
    <Seo title={"Qna Site -Ask Experts"}/>
    <div className="flex">
      <div className="mt-16 hidden lg:flex">
        <MainSidebar width={"15"}/>
      </div>
    <QuestionCard key={Math.random()} meta={meta} questions={questions}/>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const url = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions?populate=*&sort=id:DESC&pagination[limit]=6`)
  const res = await url.json() 
  console.log(res)
  return {
    props : {
      questions : res.data,
      meta : res.meta,
      revalidate: 1
    }
  }
}
