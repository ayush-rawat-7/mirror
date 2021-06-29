import React from 'react'
import { Link } from 'react-router-dom'
export default function Videos() {
    return (
        <div className="videos-container">
            <h1>Free Concept Videos</h1>
            <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae cumque error minus labore, <br /> pariatur hic dicta necessitatibus eos quas eligendi Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Laboriosam, ipsum?.</p>
            <div className="class10-row">
                <h2 className="small-screen-head">Class 10th Videos</h2>
                <div className="video">
                    <Link to='/videoplayer10'>
                        <img className="video-img" src="https://i.ytimg.com/vi/eUfBUKKEDcM/maxresdefault.jpg" alt="" />
                        <p>Class 10- Introduction to Real Numbers</p>
                    </Link>
                </div>
                <div className="video">
                    <Link to='/videoplayer10'>
                        <img className="video-img" src="https://i.ytimg.com/vi/eUfBUKKEDcM/maxresdefault.jpg" alt="" />
                        <p>Class 10- Introduction to Real Numbers</p>
                    </Link>
                </div>
                <div className="video">
                    <Link to='/videoplayer10'>
                        <img className="video-img" src="https://i.ytimg.com/vi/eUfBUKKEDcM/maxresdefault.jpg" alt="" />
                        <p>Class 10- Introduction to Real Numbers</p>
                    </Link>
                </div>
                <div className="video">
                    <Link to='/videoplayer10'>
                        <img className="video-img" src="https://i.ytimg.com/vi/eUfBUKKEDcM/maxresdefault.jpg" alt="" />
                        <p>Class 10- Introduction to Real Numbers</p>
                    </Link>
                </div>
            </div>
            <div className="class10-row">
                <h2 className="small-screen-head">Class 11th Videos</h2>
                <div className="video">
                    <Link to='/videoplayer11'>
                        <img className="video-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3_FmT36g9P089OniBzwPqDeyI-IdEnFaqw&usqp=CAU" alt="" />
                        <p>Class 11- Introduction to Sets</p>
                    </Link>
                </div>
                <div className="video">
                    <Link to='/videoplayer11'>
                        <img className="video-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3_FmT36g9P089OniBzwPqDeyI-IdEnFaqw&usqp=CAU" alt="" />
                        <p>Class 11- Introduction to Sets</p>
                    </Link>
                </div>
                <div className="video">
                    <Link to='/videoplayer11'>
                        <img className="video-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3_FmT36g9P089OniBzwPqDeyI-IdEnFaqw&usqp=CAU" alt="" />
                        <p>Class 11- Introduction to Sets</p>
                    </Link>
                </div>
                <div className="video">
                    <Link to='/videoplayer11'>
                        <img className="video-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3_FmT36g9P089OniBzwPqDeyI-IdEnFaqw&usqp=CAU" alt="" />
                        <p>Class 11- Introduction to Sets</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
