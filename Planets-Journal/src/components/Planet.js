import React from "react"

export default function Planet(props) {
    return (
            <nav className="section--planet">
                <section className="section--img">
                    <img src={`../images/${props.planetImg}`} />
                </section>
                <div className="section--content">
                    <nav className="section--tittle">
                        <h1>{props.planetName}</h1>
                        <a href={props.planetLink} className="section--link">NASA overview</a>
                    </nav>
                    <h2 className="section--subtittle">{props.planetSatelites} Satelites</h2>
                    <nav className="section--stats">
                        <h3>Orbital preriod</h3>
                        <h4>Synodic: {props.planetOrbital.synodic} days</h4>
                        <h4>Sidereal: {props.planetOrbital.sidereal} hours</h4>
                    </nav>
                    <p className="section--info">{props.planetDescription}</p>
                </div>
            </nav>
    )
}