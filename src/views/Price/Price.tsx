import anime from 'animejs';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { priceAverageData } from '../../data/dataExport';
import './Price.scss';

type animationType = {
    animation: string
}

const Price = ({ animation }: animationType) => {
    const [price, setPrice] = useState(priceAverageData)

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
            <h1>Money awarded each year</h1>
            <div className='chart-wrapper'>
                <Line data={price} />
            </div>
        </main>
    )
}

export default Price