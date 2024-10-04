import React from 'react'
import { HowPattern, SpannerChick } from 'src/assets'
import { howItWorks, HowItWorksType } from 'src/utils'

type Props = {}

const CustomListItem = ({title, description, icon: Icon}: HowItWorksType) => {
    return (
        <div className="flex flex-col md:flex-row justify-start gap-[20px] lg:gap-[28px] item-start" >
            <div><Icon /></div>
            <div className="">
                <h5 className="w-full text-[28px] leading-[normal] tracking-[-1.4px]">
                {title}
                </h5>
                <p className="pt-[16px] leading-[26px] text-[18px] tracking-[0px]">
                {description}
                </p>
            </div>
        
    </div>
    )
}

const HowItWorks = (props: Props) => {
  return (
    <div className="pt-[200px] overflow-hidden" id='how-it-works'>
          <div className="container flex items-start justify-between">
            <div className="w-full md:w-[659px]">
                <p className="border-[1px] border-black uppercase leading-[26px] text-[14px] tracking-[0px] w-[160px] h-[38px] px-[20px] py-[6px] ultrabold whitespace-nowrap">
                    How it works
                </p>
              <h2 className="w-full -z-100 relative text-[44px] md:text-[60px] leading-[56px] md:leading-[normal] tracking-[-4px] md:tracking-[-3.5px] pt-[40px] md:pt-[46px]">Building the best space
for collaboration.</h2>


            <div className="flex flex-col relative py-[40px] h-[720px] lg:hidden items-center justify-center">
              <HowPattern/>
              <SpannerChick className='absolute -z-10 top-0' />
            </div>
              
              <div className="lg:pt-[60px] w-full lg:w-[627px] flex flex-col gap-[48px]"> 
              {howItWorks.map((item: HowItWorksType, idx: number) => (
                <CustomListItem key={idx} title={item.title} description={item.description} icon={item.icon} />
              ))}
              </div>
              
            </div>

            <div className="hidden lg:flex items-start justify-center top-0 lg:relative absolute md:left-[-2rem] 2xl:left-[0rem] transition-all duration-500">
              <HowPattern/>
              <SpannerChick className='absolute  mt-[40.87px]' />
            </div>
        </div>
    </div>
  )
}

export default HowItWorks
