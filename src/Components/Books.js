import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { booksData } from './data'
export default function Books() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsModalOpen(true)
        }, 500);
    }, [])
    const handleClick = () => {
        setIsModalOpen(false);
    }
    return (
        <>
            {isModalOpen && <Modal handleClick={handleClick} />}
            <div className="main">
                <h1 className="ncert-head">NCERT Books For Class 1 to 12</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quas est et nihil, rerum velit commodi, non laboriosam autem quidem omnis illo, quod voluptatum itaque dolorem aut minima odit veritatis quo inventore accusamus. Libero, exercitationem accusamus deserunt necessitatibus eum temporibus minus et tempora, dolore itaque vel dolor distinctio reiciendis culpa?</p>
                <div className="grid-img-book">
                    <ol >
                        {
                            booksData.map((book) => {
                                return <li key={book.id}>
                                    <a href={book.location}>{book.title}</a>
                                </li>
                            })
                        }
                    </ol>
                    <img src="https://img.jagranjosh.com/imported/images/E/Articles/Ncert-class-9-science-books.jpg" alt="" />
                </div>
                <h2 id="ncertlinks">Links To Download NCERT Books</h2>
                {
                    booksData.map((book) => {
                        return <div className="table" key={book.id}>
                            <h3 className="download-head" id={book.id}>{book.title}</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{book.books.english}</td>
                                        <td><a href="#download">Download</a></td>
                                    </tr>
                                    <tr>
                                        <td>{book.books.hindi}</td>
                                        <td><a href="#download">Download</a></td>
                                    </tr>
                                    <tr>
                                        <td>{book.books.maths}</td>
                                        <td><a href="#download">Download</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    })
                }
            </div>
        </>
    )
}



const Modal = ({ handleClick }) => {
    return (
        <>
            <div className="main-modal">
                <div className="modal">
                    <button className="close-modal" onClick={handleClick}>X</button>
                    <img className="modal-img" src="https://i.ytimg.com/vi/FS35ryAte_k/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLALcsR_jjTbAlLGSkA4S7Q0VyM2qA" alt="" />
                    <Link to="/install"><button className="modal-btn">Book Now</button></Link>
                </div>
            </div>
        </>
    )
}

