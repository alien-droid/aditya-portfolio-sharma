import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'

const CCardTitle = ({ title, skills }: {title: string, skills: any[]}) => {
    return (
        <div className='flex flex-col p-2'>
            <h1 className='text-start text-xl font-semibold underline'>{title}</h1>
            <div className="flex flex-row items-center mb-5 w-full mt-4 justify-center">
                <AnimatedTooltip items={skills} />
            </div>
        </div>
    )
}

export default CCardTitle
