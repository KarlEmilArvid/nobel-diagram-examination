import { useState } from "react";
import { Link } from "react-router-dom";
import './header.scss';

type animationType = {
    animation: string,
    setAnimation: any
}

const Header = ({ animation, setAnimation }: animationType) => {
    const [animationSelected, setAnimationSelected] = useState<string>("")
    const [chartSelected, setChartSelected] = useState<string>("")

    function selectAnimation() {
        setAnimationSelected("selected")
        setChartSelected("")
    }

    function selectChart() {
        setAnimationSelected("")
        setChartSelected("selected")
    }

    return (
        <header className="header">
            <section className="animations-wrapper">
                <p onClick={selectAnimation} className={animationSelected}>Pick animation:</p>
                <nav className={animationSelected + " menu"}>
                    <li className={animation === "fade-in" ? "activated" : ""} onClick={(e) => setAnimation("fade-in")}>Fade-In</li>
                    <li className={animation === "slide-in" ? "activated" : ""} onClick={(e) => setAnimation("slide-in")}>Slide-In</li>
                    <li className={animation === "rolldown" ? "activated" : ""} onClick={(e) => setAnimation("rolldown")}>Roll Down</li>
                </nav>
            </section>
            <section className="charts-wrapper">
                <p onClick={selectChart} className={chartSelected}>Pick chart:</p>
                <nav className={chartSelected + " menu"}>
                    <Link to="/CategoryTotal" >Total awards per Category</Link>
                    <Link to="/Gender" >Men/Women awarded</Link>
                    <Link to="/Country" >Amount of winners per Country</Link>
                    <Link to="/Price" >Money awarded per Year</Link>
                </nav>
            </section>
        </header>
    )
}

export default Header