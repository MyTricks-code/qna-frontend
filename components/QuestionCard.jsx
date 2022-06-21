import React from 'react'

const QuestionCard = ({ questions }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 mt-16'>
            {/* Card Start*/}
            {
                questions.map((item) => {
                    return (
                        <div className="card mx-1 md:mx-4 my-4" >
                            <h4 className='text-right bg-rounded z-10 bg-red-400 text-neutral-50'>{item.attributes.date}</h4>
                            <h3 className='text-xl mx-2 mt-2'>{item.attributes.title}</h3>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary mt-6">Check Answer</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QuestionCard