import { projects } from '@/data';
import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Link from 'next/link';
import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Projects = () => {
    return (
        <div className='py-10 sm:py-20' id='projects'>
            <h1 className='heading text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-10'>
                A selection of <span className='text-blue-400'>Recent Projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-2 sm:p-4 gap-4 sm:gap-6 md:gap-8'>
                {projects.map(({ id, title, des, link, iconLists, image }) => (
                    <div 
                        key={id} 
                        className='w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-sm'
                    >
                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 sm:p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-xs sm:text-sm mt-2 dark:text-neutral-300"
                                >
                                    {des}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={image}
                                        height="1000"
                                        width="1000"
                                        className="h-40 sm:h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="project thumbnail"
                                    />
                                </CardItem>
                                <div className="flex items-center justify-between mt-4 sm:mt-7">
                                    <div className='flex items-center gap-1'>
                                        {iconLists.map((icon, index) => (
                                            <CardItem
                                                key={icon}
                                                translateZ="60"
                                                className='border border-white/[0.2] rounded-full bg-indigo-500 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex justify-center items-center'
                                                style={{ transform: `translateX(-${3 * index * 2}px)` }}
                                            >
                                                <img src={icon} alt={`icon-${index}`} className='p-1 sm:p-2' />
                                            </CardItem>
                                        ))}
                                    </div>
                                    <CardItem
                                        translateZ={20}
                                        as={Link}
                                        href={link}
                                        target="__blank"
                                        className="px-2 py-1 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white"
                                    >
                                        <Image
                                            src={`${basePath}/git.svg`}
                                            height="300"
                                            width="300"
                                            className="h-8 sm:h-10 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="GitHub link"
                                        />
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;