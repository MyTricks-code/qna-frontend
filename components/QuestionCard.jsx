import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/Loader'

const QuestionCard = ({ questions, meta }) => {
    const [questionData, setQuestionData] = useState(questions)
    // const [metaData, setMetaData] = useState(meta)

    const getMoreQuestion = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions?populate=*&sort=id:DESC&pagination[start]=${questionData.length}&pagination[limit]=12`)
        const newQuestion = await res.json()
        setQuestionData([...questionData, ...newQuestion.data])
    }

    const [hasMore, setHasMore] = useState(true)
    useEffect(() => {
        setHasMore(meta.pagination.total > questionData.length ? true : false)
    }, [questionData])

    return (
        <div>
                <InfiniteScroll
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 mt-16'
                    dataLength={questionData.length}
                    next={getMoreQuestion}
                    hasMore={hasMore}
                    loader={<div className='flex align-middle justify-center mt-5'><Loader /></div>}
                    endMessage={
                        <p className="text-center font-bold px-2 m-2">Holy Moly! You have reached the End.
                            <img src="/images/accomplish.gif" alt="accomplish" />
                        </p>
                    }
                >
                    {
                        questionData.map((item) => {
                            return (
                                <>
                                    <div className="card mx-1 md:mx-4 my-4" key={item.id}>
                                        <h4 className='text-right bg-rounded z-10 bg-red-400 text-neutral-50'>
                                            <Moment format='MM, Do, YYYY'>
                                                {item.attributes.createdAt}
                                            </Moment>
                                        </h4>
                                        <h3 className='text-xl mx-2 mt-2'>{item.attributes.title}</h3>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link href={`/question/${item.attributes.slug}`}>
                                                <a href="#" className="btn btn-primary mt-6">Check Answer</a>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </InfiniteScroll>



            </div>
    )
}

export default QuestionCard