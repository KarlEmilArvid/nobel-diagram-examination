import { useState } from "react";
import { Link } from "react-router-dom";
import './header.scss';

type animationType = {
    animation: string,
    setAnimation: any
}

const Header = ({ animation, setAnimation }: animationType) => {
    const [animationSelected, setAnimationSelected] = useState<string>('')

    function selectAnimation() {
        setAnimationSelected("selected")
    }

    return (
        <header className="header">
            <section className="animations-wrapper">
                <p onClick={selectAnimation}>Pick animation:</p>
                <nav className="menu">
                    <li className={animation === "slide" ? "active-animation" : ""} onClick={() => setAnimation("slide")}>Slide</li>
                    <li className={animation === "fade" ? "active-animation" : ""} onClick={() => setAnimation("fade")}>Fade</li>
                    <li className={animation === "rolldown" ? "active-animation" : ""} onClick={() => setAnimation("rolldown")}>Roll Down</li>
                </nav>
            </section>
            <section className="charts-wrapper">
                <p>Pick chart:</p>
                <nav className="menu">
                    <Link to="/Category" >Total awards per category</Link>
                    <Link to="/Gender" >Total awards per gender</Link>
                    <Link to="/Country" >Amount of winners per country</Link>
                    <Link to="/Price" >Money awarded per year</Link>
                </nav>
            </section>
        </header>
    )
}

export default Header