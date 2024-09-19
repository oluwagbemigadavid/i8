import React from 'react'
import { Links } from '../Nav/Nav'
import { HeroMan, HeroPattern, VISALogo } from 'src/assets'


type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='pt-[204px]'>
        <div className="container h-[604px] relative flex items-start justify-between">
            <div className="w-[721px]">
              <h1 className="w-full leading-[80px] text-[70px] capitalize tracking-[-4px]">
                Always track  & analyze your business statistics to succeed.
              </h1>
              <p className="pt-[20px] leading-[26px] text-[18px] tracking-[0px]">
                A better way to manage your sales, team, clients & marketing <br />
              — on a single platform. Powerful, affordable & easy.
              </p>
              <div className="flex item-center justify-start pt-[40px]">
                <input type="email" className="w-[361px] h-[52px] bg-white py-[14px] px-[16px] border-[1px] border-transparent outline-none focus:border-black leading-[26px] text-[18px] tracking-[0px]" placeholder='Enter your email' />
                <Links link='Get started' url='/'  className="text-white bg-black" />
              </div>
              <div className="flex items-center gap-[28px] pt-[80px]">
                <VISALogo />
                <VISALogo />
                <VISALogo />
              </div>
            </div>
            <div className="flex items-start justify-center w-100">
              <HeroPattern/>
              <HeroMan className='absolute mt-[24.12px]' />
            </div>
        </div>
    </div>
  )
}

export default Hero