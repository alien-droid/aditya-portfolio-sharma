import React from 'react'
import { LampDemo } from './ui/lamp'
import { BackgroundBeams } from './ui/background-beams';
import { FlipWords } from './ui/flip-words';

const Hero = () => {
    const words = ["Software", "Full-Stack", "Backend", "Frontend", "AI", "Cloud"];

    return (
        <div className='pb-20 pt-35'>
            <div>
                <LampDemo />
                <BackgroundBeams />
                <div className='flex flex-col items-center' id="about">
                    <div>
                        <img className='rounded-full w-100 h-96 border-2 border-sky-200' src={`/pp.jpg`} alt="profile" />
                    </div>

                    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mt-5">
                        <div className='flex justify-center items-center'>Hi 👋, I'm Aditya <br /></div>
                        I'm a <FlipWords words={words} /> Developer and an <span className='text-cyan-300'><strong>Architect</strong></span> in making.
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Hero
