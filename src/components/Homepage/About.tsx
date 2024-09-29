import React from 'react'
import { MoonBoy, StarPattern } from 'src/assets'
import { Links } from '../Nav/Nav'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='pt-[200px] relative' id="about-us">
        
        <div className="container flex items-start justify-between">
            <div className="flex items-start justify-center top-0 lg:relative absolute md:left-[-2rem] 2xl:left-[0rem] transition-all duration-500">
              <StarPattern/>
              <MoonBoy className='absolute  mt-[106.25px]' />
            </div>
            <div className="w-[750px]">
                <p className="border-[1px] border-black uppercase leading-[26px] text-[14px] tracking-[0px] w-[115px] h-[38px] px-[20px] py-[6px] ultrabold whitespace-nowrap">
                    About us
                </p>
              <h2 className="w-full text-[60px] leading-[normal] tracking-[-3px] pt-[46px]">
              Faster, friendlier feedback 
loops make life easier.
              </h2>
              <p className="pt-[20px] leading-[26px] text-[18px] tracking-[0px]">
              Add a Viewer to your team so they can see everything you share, or invite 
people to individual documents. It’s up to you. Stakeholders can check 
out designs in their web browser, test prototypes and leave feedback for free.
              </p>
              <ul className="pt-[60px] list-square">
                <li className='flex items-center justify-start leading-[28px] text-[20px]'>
                    <div className='relative w-[10px] h-[10px] bg-black ml-[9px] mr-[29px]' /> 
                    <span>Shared Cloud Libraries, for a single source of truth</span>
                </li>
                <li className='flex items-center justify-start leading-[28px] text-[20px]'>
                    <div className='relative w-[10px] h-[10px] bg-black ml-[9px] mr-[29px]' /> 
                    <span>Prototype previews for user testing and research</span>
                </li>
                <li className='flex items-center justify-start leading-[28px] text-[20px]'>
                    <div className='relative w-[10px] h-[10px] bg-black ml-[9px] mr-[29px]' /> 
                    <span>Easy organization with projects</span>
                </li>
                <li className='flex items-center justify-start leading-[28px] text-[20px]'>
                    <div className='relative w-[10px] h-[10px] bg-black ml-[9px] mr-[29px]' /> 
                    <span>Free developer handoff, right inside the browser</span>
                </li>
                <li className='flex items-center justify-start leading-[28px] text-[20px]'>
                    <div className='relative w-[10px] h-[10px] bg-black ml-[9px] mr-[29px]' /> 
                    <span>Two-factor authentication and SSO</span>
                </li>
                
              </ul>
            </div>
        </div>
    </div>
  )
}

export default About