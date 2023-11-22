import React from "react"
import Header from "./components/Header"
import Planet from "./components/Planet"
import PlanetsData from "./PlanetsData"

export default function App() {
    const planets = PlanetsData.map(planet => {
        return (
            <Planet
                key={planet.id}
                {...planet}
            />
        )
    })
    return (
        <div>
            <Header />
            <section className="main--section">{planets}</section>
        </div>
    )
}