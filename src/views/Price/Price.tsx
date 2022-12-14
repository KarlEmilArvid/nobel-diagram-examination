import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { PrizeData, PrizeDataAdjusted } from '../../data/data'
import { animationType } from '../../types/types'
import anime from 'animejs'
import 'chart.js/auto'
import './price.scss'

const Price = ({ animation }: animationType) => {
    const [data, setData] = useState(PrizeData)
    const [toggle, setToggle] = useState<boolean>(false)

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

    function toggleInflation() {
        if (!toggle) {
            setData(PrizeDataAdjusted)
            setToggle(!toggle)
        } else {
            setData(PrizeData)
            setToggle(!toggle)
        }
    }

    return (
        <main className='selected-animation'>
            <h2>Money awarded each year</h2>
            <div className='toggleInflation'>
                <p>Toggle inflation: </p>
                <input onClick={toggleInflation} type="checkbox"></input>
            </div>
            <div className='chart-wrapper'>
                <Line data={data} />
            </div>
        </main>
    )
}

export default Price