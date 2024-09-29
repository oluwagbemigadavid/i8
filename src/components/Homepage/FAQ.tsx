import React from 'react'
import { FaqGiraffe, FaqMan, FaqPattern, HowPattern, SpannerChick } from 'src/assets'
import { faqs } from 'src/utils/faqs'
import { Accordion } from '../Accordion'

type Props = {}

const FAQs = (props: Props) => {
  return (
    <div className="pt-[200px]" id='faqs'>
          <div className="container flex items-start justify-between">
            <div className="w-[840px]">
                <p className="border-[1px] border-black uppercase leading-[26px] text-[14px] tracking-[0px] w-[79px] h-[38px] px-[20px] py-[6px] ultrabold whitespace-nowrap">
                    FAQs
                </p>
              <h2 className="w-full text-[60px] leading-[normal] tracking-[-3.5px] pt-[46px]">Common Questions.</h2>
                <p className="pt-[20px] leading-[26px] text-[18px] tracking-[0px] w-[532px]">
                The online form also provides links to a set of frequently 
                asked questions, other information materials related to 
                the financial disclosure programme.
                </p> 
              
              <div className="pt-[60px] flex flex-col gap-[20px] "> 
                <Accordion
                  data={faqs}
                  />
              
              </div>
            </div>

            <div className="flex items-start justify-center top-0 lg:relative absolute md:left-[-2rem] 2xl:left-[0rem] transition-all duration-500">
              <FaqPattern/>
              <div className='absolute flex items-end gap-[50px] ml-[90px] mt-[40.87px]'>
                <FaqMan />
                <FaqGiraffe />
              </div>
            </div>
        </div>
    </div>
  )
}

export default FAQs
