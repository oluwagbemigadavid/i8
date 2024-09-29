import React from 'react'
import { footerLinks, socialIcons } from 'src/utils'
import { Links } from '../Nav/Nav'
import {ChevronDown } from 'lucide-react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="bg-[#151515] text-white mt-[200px]">
      <div className="container py-[32px]">
         <div className=" flex items-start justify-between ">
          <div className="w-[484px]">
            <img src='/Oval 3.png' alt='logo alt' className='w-[52px] h-[52px]' />
              <h1 className="w-full leading-[60px] text-[52px] tracking-[-4px] pt-[40px]">
                Want to receive our awesome stories?
                </h1>
                <div className="flex item-center justify-start pt-[32px]">
                  <input type="email" className="w-[361px] h-[52px] bg-white py-[14px] px-[16px] border-[1px] border-transparent outline-none focus:border-black leading-[26px] text-[18px] tracking-[0px]" placeholder='Enter your email' />
                  <Links link='Subcribe' url='/'  className="text-white bg-black" />
                </div>
          </div>
          <div className="flex gap-[40px]">

            <div className="flex flex-col gap-[24px] justify-start">
            <p className='text-[20px] leading-[28px] px-[18px] py-[14px] hover:opacity-80 ultrabold'>
                Email
              </p>
              <p className='text-[18px] leading-[26px] px-[18px] py-[14px] opacity-80'>
              koningswealth@gmail.com
              </p>
            </div>

            {footerLinks.map((group, idx) => (
              <div className="flex flex-col gap-[24px] justify-start" key={idx}>
                {group.map((link, index) => (
                  <Links className='!text-[18px] !leading-[26px] opacity-80 hover:opacity-100' link={link.link} url={link.url} key={index} />
                ))}
              </div>
            ))}
            </div>
         </div> 
         <div className="pt-[120px] flex justify-between items-center">
         <p className="text-[18px] leading-[26px] ">
                &copy; i8 Design, Built by David Oluwagbemiga. All right reserved.
              </p>
            <div className="flex gap-[20px]">
            {socialIcons.map(({ Icon, fill }, index) => (
              <div
                key={index}
                className="w-[60px] h-[60px] cursor-pointer flex items-center justify-center group"
              >
                <Icon
                  fill={fill}
                  className="w-[26px] h-[26px] transform scale-100 transition duration-300 group-hover:scale-[1.2]"
                />
              </div>
            ))}
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer