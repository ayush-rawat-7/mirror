import React from 'react'

const Home = ({playStore}) => {
    
    return (
        <>
            <h1 className="tagline">The only app you will need for complete learning</h1>
            <div className="home-grid">
                <div className="content">
                    <h1>Learn better with <br /> the best doubt <br />clearing app</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste omnis eum illo expedita reprehenderit sunt unde cumque, dignissimos, laboriosam minus illum a vero consectetur animi maxime tempora nulla. Nisi adipisci quidem repellendus itaque quaerat vitae pariatur impedit, delectus mollitia? Veritatis molestiae eveniet modi omnis tempora. Culpa ducimus id ipsum saepe.</p>
                    <button className="btn-playstore" onClick={()=>playStore()}>Playstore</button>
                </div>
                <div className="home-img">
                    <img className="home-img" src="https://www.mirrorscore.com/static/images/mirrorscore-classes.png" alt="img" />
                </div>
            </div>
            <div className="info">
                <h4>15K <br />Downloads</h4>
                <h4>15K <br />Happy Student</h4>
                <h4>15K <br />Doubt Solved</h4>
                <h4>15K <br />Classes Completed</h4>
            </div>
        </>
    )
}
export default Home