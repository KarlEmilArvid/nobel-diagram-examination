import { useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import { GenderData } from '../../data/data'
import { animationType } from '../../types/types'
import anime from 'animejs'
import 'chart.js/auto'

const Gender = ({ animation }: animationType) => {

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
            <h2>Total awards given between men and women</h2>
            <div className='chart-wrapper'>
                <Pie data={GenderData} />
            </div>
        </main>
    )
}

export default Gender