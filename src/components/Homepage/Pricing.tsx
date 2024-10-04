import clsx from 'clsx'
import React from 'react'
import { MoonBoy, PricingSvg, StarPattern } from 'src/assets'
import { pricing, PricingCardType } from 'src/utils'
import { Links } from '../Nav/Nav'

type Props = {}

const Pricing = (props: Props) => {
  return (
    <div className='pt-[200px] relative overflow-hidden' id="pricing">
        
        <div className="container ">

            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="hidden lg:flex items-start justify-center top-0 lg:relative absolute md:left-[-2rem] 2xl:left-[0rem] transition-all duration-500">
                <PricingSvg />
              </div>
              <div className="max-w-[743px] h-fit flex flex-col items-start lg:items-end  text-left lg:text-right">
                <p className="border-[1px] border-black uppercase leading-[26px] text-[14px] tracking-[0px] w-[115px] h-[38px] px-[20px] py-[6px] ultrabold whitespace-nowrap">
                      Pricing
                  </p>
                <h2 className="w-full text-[44px] lg:text-[60px] leading-[56px] lg:leading-[normal] tracking-[-4px] lg:tracking-[-3px] pt-[40px] lg:pt-[46px]">
                Select a membership level the right price for you.
                </h2>
                <p className="pt-[20px] leading-[26px] text-[18px] tracking-[0px]">
                  Prices listed in USD. Taxes may apply. <br className='' />
                  By using our program you agree to out terms and policies.
                </p> 
              </div>
              
              <div className="flex w-full md:w-unset lg:hidden items-center justify-center ">
                <PricingSvg  />
              </div>
            </div>

            <div className="mt-[60px] flex flex-col lg:flex-row gap-[24px] justify-between">
             {pricing.map( (item: any, idx: number)  => (
              <div className={clsx(
                'flex flex-col h-fit lg:h-[644px] w-full lg:w-[400px] py-[50px] px-[40px] border-[1px] border-[#151515]', {
                  'bg-black !text-white' : idx === 1 
                }
              )} key={item.price}>
                  <div className="flex">
                    <p className="text-[20px] leading-[28px] tracking-[0px] ultrabold">$</p>
                    <h1 className="text-[80px] leading-[normal] tracking-[-4px] ultrabold">
                      {item.price}
                    </h1>
                    <p className="text-[20px] leading-[28px] tracking-[0px] mt-auto ultrabold ml-[12px]">per month</p>
                  </div>
                  <p className="pt-[20px]">
                    {item.description}
                  </p>
                  <ul className="pt-[60px] list-square">
                    {item.features.map((listItem: string) => (
                      <li key={listItem} className='flex items-center justify-start leading-[28px] text-[18px] mb-[24px]'>
                          <div className={clsx(
                            'relative w-[10px] h-[10px] bg-black ml-[9px] mr-[21px]', {
                              'bg-white' : idx === 1
                            }
                          )} /> 
                          <span>{listItem}</span>
                      </li>
                    ) )}
                  </ul>

                  <button className={clsx(
                    "w-full mt-auto h-[52px] flex items-center justify-center bg-[#151515] text-white", {
                      '!bg-white !text-[#151515]': idx === 1
                    }
                  )}>
                    <a href="/">
                      Join
                    </a>
                  </button>
              </div>
             ))}
            </div>
        </div>
    </div>
  )
}

export default Pricing