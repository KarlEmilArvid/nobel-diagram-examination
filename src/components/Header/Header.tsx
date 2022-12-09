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
                <nav className={animationSelected + " menu"}>
                    <li className={animation === "slide" ? "activated" : ""} onClick={(e) => setAnimation("slide")}>Slide</li>
                    <li className={animation === "fade" ? "activated" : ""} onClick={(e) => setAnimation("fade")}>Fade</li>
                    <li className={animation === "rolldown" ? "activated" : ""} onClick={(e) => setAnimation("rolldown")}>Roll Down</li>
                </nav>
            </section>
            <section className="charts-wrapper">
                <p>Pick chart:</p>
                <nav className="menu">
                    <Link to="/Category" >Total awards per Category</Link>
                    <Link to="/Gender" >Total awards per gender</Link>
                    <Link to="/Country" >Amount of winners per Country</Link>
                    <Link to="/Price" >Money awarded per Year</Link>
                </nav>
            </section>
        </header>
    )
}

export default Header