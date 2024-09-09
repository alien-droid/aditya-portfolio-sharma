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
        cardTitle: <div><img className="max-w-xs max-h-12 sm:max-w-sm sm:max-h-10" src={workExperience[0].thumbnail} alt="thumbnail" /></div>,
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
        cardTitle: <div><img className="max-w-xs max-h-14 sm:max-w-sm sm:max-h-10" src={workExperience[1].thumbnail} alt="thumbnail" /></div>,
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
            <h1 className='heading text-2xl sm:text-3xl md:text-4xl'>Professional <span className='text-red-400'>Experience</span></h1>
            <div className='flex justify-center items-center w-full mt-5'>
                <div className='w-11/12 md:w-4/5 lg:w-3/4'>
                    <Chrono 
                        items={items} 
                        mode="VERTICAL_ALTERNATING" 
                        disableToolbar 
                        theme={{
                            primary: 'white',
                            secondary: 'blue',
                            cardBgColor: '#2C3E50',
                            titleColor: 'white',
                            titleColorActive: 'white',
                            cardSubtitleColor: "#097969",
                            cardDetailsColor: "#AED6F1"
                        }} 
                        fontSizes={{
                            cardSubtitle: '1rem sm:1.1rem md:1.2rem',
                            cardText: '0.8rem sm:0.85rem md:0.9rem',
                            title: '1.3rem sm:1.4rem md:1.5rem',
                        }} 
                        mediaSettings={{ align: 'right' }} 
                        parseDetailsAsHTML 
                        mediaHeight={250} 
                        highlightCardsOnHover 
                        cardHeight={200}
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience;
