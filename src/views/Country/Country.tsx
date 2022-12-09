import { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { CountryData } from '../../data/data'
import { animationType } from '../../types/types'
import anime from 'animejs'
import 'chart.js/auto'

const Country = ({ animation }: animationType) => {

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
        } else if (animation === "spin") {
            anime({
                targets: '.chart-wrapper',
                rotate: {
                    value: 360,
                    duration: 1000,
                    easing: 'easeInOutSine'
                },
                translateY: ["100%", 0],
                opacity: [0, 1],
                easing: "easeInOutQuad"
            })
        }
    }, [])

    return (
        <main className='selected-animation'>
            <h2>The amount of awards per country</h2>
            <div className='chart-wrapper'>
                <Bar data={CountryData} />
            </div>
        </main>
    )
}

export default Country