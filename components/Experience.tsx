'use client'
import React from 'react'
import { Button } from './ui/moving-border'
import { workExperience } from '@/data'
import { AnimatedTooltip } from './ui/animated-tooltip';
import type { Chrono as ChronoType } from "react-chrono";
import dynamic from 'next/dynamic'

export const Chrono = dynamic(() => import('react-chrono').then(lib => lib.Chrono), {
  ssr: false,
}) as typeof ChronoType
import CCardTitle from './CCardTitle';


const Experience = () => {

    const items = [{
        title: "Aug 2018 - Aug 2022",
        cardTitle: <div><img className="max-w-xs max-h-12" src={workExperience[0].thumbnail} alt="thumbnail" /></div>,
        cardSubtitle: <CCardTitle title="Developer/Team Lead" skills={workExperience[0].skills} />,
        cardDetailedText: [`<ul><li><strong>Innovative Feature Development</strong>: Designed and implemented 60+ features using Java (Spring Boot/MVC) for Swiss Re, enhancing premium calculations, coverage management, and system reliability.</li>      <li><strong>Exemplary Code Quality</strong>: Achieved 80% code coverage with JUnit/Mockito in a TDD environment. Managed workflows with JIRA and improved development with CI/CD integration via BitBucket and Bamboo.</li>      <li><strong>Cloud Transition Expertise</strong>: Orchestrated the transition to Microsoft Azure and optimized databases, reducing downtime by 40% and boosting performance.</li>      <li><strong>Leadership in Action</strong>: Led a cross-functional team of 7, ensuring effective communication and timely feature delivery within 3 months.</li>      <li><strong>Award-Winning Performance</strong>: Earned 'Best Performer' accolades for two consecutive years, recognized for outstanding performance and leadership.</li>    </ul>`],
        media: {
            type: "IMAGE",
            source: {
                url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }
        }
    }, {
        title: "Jan 2018 - Jun 2018",
        cardTitle: <div><img className="max-w-xs max-h-14" src={workExperience[1].thumbnail} alt="thumbnail" /></div>,
        cardSubtitle: <CCardTitle title="Research Intern" skills={workExperience[1].skills} />,
        cardDetailedText: [`<ul><li><strong>Test Case Migration</strong>: Migrated 80+ test cases to a proprietary Java-based framework, enhancing efficiency and reliability with design patterns, replacing traditional TTCN.</li>      <li><strong>Automation Efficiency</strong>: Automated test case execution, reducing manual execution time by 3 hours, and deployed tests seamlessly in Linux Container.</li>      <li><strong>Strategic Enhancements</strong>: Improved test case management, boosting efficiency and accuracy in testing processes.</li>    </ul>`],
        media: {
            type: "IMAGE",
            source: {
                url: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        }
    },];

    return (
        <div id="experience">
            <h1 className='heading'>Professional <span className='text-red-400'>Experience</span></h1>
            <div className='flex justify-center items-center w-full mt-5'>
                <div className='w-4/5 lg:w-3/4'>
                    <Chrono items={items} mode="VERTICAL_ALTERNATING" disableToolbar theme={{
                        primary: 'white',
                        secondary: 'blue',
                        cardBgColor: '#2C3E50',
                        titleColor: 'white',
                        titleColorActive: 'white',
                        cardSubtitleColor: "#097969",
                        cardDetailsColor: "#AED6F1"
                    }} fontSizes={{
                        cardSubtitle: '1.2rem',
                        cardText: '0.9rem',
                        title: '1.5rem',
                    }} mediaSettings={{ align: 'right' }} parseDetailsAsHTML mediaHeight={300} highlightCardsOnHover cardHeight={200}
                    >
                    </Chrono>
                </div>
            </div>

            {/* <div className='w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10'>
                {workExperience.map((card) => (
                    <Button key={card.id} borderRadius='1.8rem' className='flex text-white border-neutral-200' duration={Math.floor(Math.random() * 5000) + 5000}>
                        <div className='flex lg:flex-row flex-col lg:items-center p-2 py-2 md:p-5 lg:p-7'>
                            <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                            <div className='lg:ms-10'>
                                <h1 className='text-start text-xl md:text-2xl font-bold underline'>{card.title}</h1>
                                <div className='text-start text-white-100 mt-3 font-semibold text-lg' dangerouslySetInnerHTML={{ __html: card.desc }}></div>
                                <div className='mt-10'>
                                    <h1 className='text-start text-xl font-semibold underline'>Skills</h1>
                                    <div className="flex flex-row items-center mb-10 w-full mt-4">
                                        <AnimatedTooltip items={card.skills}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Button>
                )
                )}
            </div> */}
        </div>
    )
}

export default Experience
