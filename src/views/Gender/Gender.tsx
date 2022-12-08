import anime from 'animejs';
import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { GenderData } from '../../data/dataExport';
import 'chart.js/auto';
import './gender.scss';

type animationType = {
    animation: string
}

const Gender = ({ animation }: animationType) => {
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
            <h1>The Total Awards given between Men and Women</h1>
            <div className='chart-wrapper circle'>
                <Pie data={GenderData} />
            </div>
        </main>
    )
}

export default Gender