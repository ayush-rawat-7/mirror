import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div className="error-container">
            <h1>Error 404!</h1>
            <h1>Page Not Found</h1>
            <Link to='/'>
                <button className="home-btn">
                    Back To Home.
                </button>
            </Link>

        </div>
    )
}

