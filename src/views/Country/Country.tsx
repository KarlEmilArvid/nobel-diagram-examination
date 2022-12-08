import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { CountryData } from '../../data/dataExport';
import anime from 'animejs';
import 'chart.js/auto';
import './country.scss';

type animationType = {
    animation: string
}

const Country = ({ animation }: animationType) => {
    useEffect(() => {
        if (animation === "fade-in") {
            anime({
                targets: '.wrapper',
                duration: 1000,
                opacity: [0, 1],
                easing: "easeInOutQuad"
            })
        } else if (animation === "slide-in") {
            anime({
                targets: '.wrapper',
                duration: 1000,
                translateX: ["100%", 0],
                easing: "easeInOutQuad"
            })
        } else if (animation === "rolldown") {
            anime({
                targets: '.wrapper',
                duration: 1000,
                translateY: ["100deg", 0],
                easing: "easeInOutQuad"
            })
        }

    }, [])
    return (
        <main className='wrapper'>
            <h1>The most Wins per country</h1>
            <div className='chart-wrapper'>
                <Bar data={CountryData} />
            </div>
        </main>
    )
}

export default Country