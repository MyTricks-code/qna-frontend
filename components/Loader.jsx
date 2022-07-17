import React from 'react'

const Loader = () => {
    return (
        <div>
            <div className="spinner-grow spinner-grow text-primary mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader