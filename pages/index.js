import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import QuestionCard from '../components/QuestionCard'
import Seo  from '../components/seo'

export default function Home({questions}) {
  return (
    <>
    <Seo title={"Qna Site -Ask Experts"}/>
    <QuestionCard key={Math.random()} questions={questions}/>
    </>
  )
}

export async function getStaticProps() {
  const url = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions?populate=*`)
  const res = await url.json() 
  console.log(res)
  return {
    props : {
      questions : res.data,
      revalidate: 1
    }
  }
}
