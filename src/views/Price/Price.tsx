import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { priceData } from '../../data/dataExport';
import { animationType } from '../../types/types';
import anime from 'animejs';
import 'chart.js/auto';

const Price = ({ animation }: animationType) => {

    useEffect(() => {
        if (animation === "slide") {
            anime({
                targets: '.selected-animation',
                duration: 1200,
                translateX: ["100%", 0],
                easing: "easeInOutQuad"
            })
        } else if (animation === "fade") {
            anime({
                targets: '.selected-animation',
                duration: 1500,
                opacity: [0, 1],
                easing: "easeInOutQuad"
            })
        } else if (animation === "rolldown") {
            anime({
                targets: '.selected-animation',
                duration: 1000,
                translateY: ["100deg", 0],
                easing: "easeInOutQuad"
            })
        }
    }, [])

    return (
        <main className='selected-animation'>
            <h1>Money awarded each year</h1>
            <div className='chart-wrapper'>
                <Line data={priceData} />
            </div>
        </main>
    )
}

export default Price