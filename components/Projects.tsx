import { projects } from '@/data'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from 'next/link'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';


const Projects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>A small selection of {' '}<span className='text-blue-400'>Recent Projects</span></h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-28 gap-y-4 mt-6'>
                {projects.map(({ id, title, des, link, iconLists, image }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-96 w-[600px]'>
                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {des}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className='flex items-center gap-1'>
                                        {iconLists.map((icon, index) => (
                                            <CardItem key={icon}
                                                translateZ="60"
                                                className='border border-white/[0.2] rounded-full bg-indigo-500 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                                style={{ transform: `translateX(-${5 * index * 2}px)` }}
                                            >
                                                <img src={icon} alt={icon} className='p-2' />
                                            </CardItem>
                                        )
                                        )}
                                    </div>
                                    <CardItem
                                        translateZ={20}
                                        as={Link}
                                        href={link}
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-s font-normal dark:text-white"
                                    >
                                        <Image
                                        src={`${basePath}/git.svg`}
                                        height="300"
                                        width="300"
                                        className="h-10 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Projects
