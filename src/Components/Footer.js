import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer-main">
                <div className="logo-left">
                    <img className="footer-logo" src="data:image/png;base64,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    " alt="img" />
                    <h4>Mirror Score</h4>
                </div>
                <div className="links-right">
                    <div className="all-links">
                        <div className="quicklinks">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/books">NCERT Books</Link></li>
                                <li><Link to="/solutions">Solutions</Link></li>
                                <li><Link to="/videos">Videos</Link></li>
                            </ul>
                        </div>
                        <div className="quicklinks">
                            <h4>NCERT Books</h4>
                            <ul>
                                <li><Link to="/books">Class 10</Link></li>
                                <li><Link to="/books">Class 8</Link></li>
                                <li><Link to="/books">Class 7</Link></li>
                                <li><Link to="/books">Class 4</Link></li>
                                <li><Link to="/books">Class 2</Link></li>
                            </ul>
                        </div>
                        <div className="quicklinks">
                            <h4>Video Lectures</h4>
                            <ul>
                                <li><Link to="/videos">Class 10 lectures</Link></li>
                                <li><Link to="/videos">Class 10 lectures</Link></li>
                                <li><Link to="/videos">Class 10 lectures</Link></li>
                                <li><Link to="/videos">Class 11 lectures</Link></li>
                                <li><Link to="/videos">Class 11 lectures</Link></li>
                            </ul>
                        </div>
                        <div className="quicklinks">
                            <h4>Study Materials</h4>
                            <ul>
                                <li><Link to="/solutions">Solutions</Link></li>
                                <li><Link to="/solutions">Solutions</Link></li>
                                <li><Link to="/solutions">Solutions</Link></li>
                                <li><Link to="/solutions">Solutions</Link></li>
                                <li><Link to="/solutions">Solutions</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer