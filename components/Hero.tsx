import React from 'react';
import { LampDemo } from './ui/lamp';
import { BackgroundBeams } from './ui/background-beams';
import { FlipWords } from './ui/flip-words';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Hero = () => {
    const words = ["Software", "Full-Stack", "Backend", "Frontend", "AI", "Cloud"];

    return (
        <div className='pb-10 md:pb-20 md:pt-35'>
            <div>
                <LampDemo />
                <BackgroundBeams />
                <div className='flex flex-col items-center' id="about">
                    <div>
                        <img
                            className='rounded-full w-45 h-40 sm:w-61 sm:h-56 md:w-77 md:h-72 lg:w-101 lg:h-96 border-2 border-sky-200'
                            src={`${basePath}/pp.jpg`}
                            alt="profile"
                        />
                    </div>

                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mt-8 text-center">
                        <div className='flex justify-center items-center'>Hi 👋, I'm Aditya <br /></div>
                        I'm a <FlipWords words={words} /> Developer and an <span className='text-cyan-300'><strong>Architect</strong></span> in making.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
