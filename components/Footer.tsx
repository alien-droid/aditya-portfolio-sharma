import React from 'react'
import { Button } from './ui/moving-border'
import Link from 'next/link'
import { socialMedia } from '@/data'
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/typewriter-effect'

const words = [
  { 'text': 'Thanks' }, { 'text': 'for' }, { 'text': 'visiting' }, { 'text': 'my' }, { 'text': 'digital' }, { 'text': 'playground', className: "text-blue-400 dark:text-blue-400" }
]

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      <div className='flex flex-col items-center'>
        <TypewriterEffectSmooth words={words}/>
        {/* <p className='text-2xl font-medium text-purple md:mt-5 py-5 text-center'>Thanks for visiting my digital playground! </p> */}
        <p className='text-lg text-white-100 md:mt-2 py-2 text-center mb-2'>If you've enjoyed exploring my projects as much as I've loved creating them, let's connect. 🚀✨</p>
        <Button>
          <div className='flex flex-center items-center p-2 md:p-2 lg:p-3'>
            <a className='text-base' href='mailto:sharma.aditya2796@gmail.com'>Let's get in touch 📫</a>
          </div>
        </Button>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © Aditya Sharma | Support from <strong>Aceternity UI</strong></p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
              <a href={profile.link}><img src={profile.img} alt={profile.id} height={20} width={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
