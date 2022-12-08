import anime from 'animejs';
import { useEffect } from 'react';

type animationType = {
    animation: string
}

const Start = ({ animation }: animationType) => {
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
        <div className='wrapper'>Start</div>
    )
}

export default Start