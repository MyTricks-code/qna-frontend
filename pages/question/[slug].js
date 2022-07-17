import React from 'react'
import QuestionDetail from '../../components/QuestionDetail'

const slug = ({question}) => {
  return (
    <div>
        <QuestionDetail question={question}/>
    </div>
  )
}

export default slug

export async function getStaticProps({params : {slug}}) {
    const questionFilter = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions?filters[slug]=${slug}&populate=*`)
    const questionRes =  await questionFilter.json()
    return {
      props: {
        question : questionRes.data[0]
      }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    const url = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions?populate=*`)
    const res = await url.json()
    
    return {
        paths : res.data.map(item=> ({
          params : {slug: String(item.attributes.slug)},
        })),
        fallback : false
    }
}

