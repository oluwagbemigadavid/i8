import React, { useEffect, useRef, useState } from 'react'
import { Links } from '../Nav/Nav'
import { HeroMan, HeroPattern, VISALogo } from 'src/assets'


type Props = {}

const Hero = (props: Props) => {

  const [autoMargin, setAutoMargin] = useState(0)
  const [autoWidth, setAutoWidth] = useState(0)

  let widthRef = useRef(window.innerWidth)

  useEffect(() => {
    window.onload = function () {
      const element: any = document.querySelector('.hero__container');
      
      if (element) {
        const computedStyles = window.getComputedStyle(element);
        const computedMarginLeft = computedStyles.marginLeft;
    
        const marginLeftValue = parseFloat(computedMarginLeft); // Converts "20px" to 20
        setAutoMargin(window.innerWidth > 640 && window.innerWidth < 1024  ? marginLeftValue / 2 : 0)
        const newWidth = parseFloat(computedStyles.width) + marginLeftValue
        setAutoWidth(window.innerWidth > 640 && window.innerWidth < 1024  ? newWidth : 0)
        console.log('Width:', computedStyles.width);
        console.log('Margin Left:', computedStyles.marginLeft);
        console.log('Margin Right:', computedStyles.marginRight);
        console.log(window.innerWidth)
      } else {
        console.error("Element not found");
      }
    };
  }, [widthRef.current])

  return (
    <div className='pt-[204px] w-full overflow-hidden'>
        <div className="container hero__container lg:h-[604px] relative flex items-start justify-between overflow-hidden sm:!pr-[0px] sm:!mr-[0px] lg:!mr-[auto] lg:!pr-[2rem]" style={{ marginLeft: `${autoMargin > 0 ? autoMargin + 'px' : 'auto'}`, width: `${autoWidth > 0 ? autoWidth + 'px' : '100%'}`, maxWidth: `${autoWidth > 0 && autoWidth + 'px'}` }}>
            <div className="w-full sm:min-w-[450px] lg:w-[721px]">
              <h1 className="w-full leading-[60px] sm:leading-[80px] text-[52px] sm:text-[70px] capitalize tracking-[-4px]">
                Always track  & analyze your business statistics to succeed.
              </h1>
              <p className="pt-[20px] leading-[26px] text-[18px] tracking-[0px]">
                A better way to manage your sales, team, clients & marketing <br />
              — on a single platform. Powerful, affordable & easy.
              </p>
              <div className="flex item-center justify-start pt-[40px]">
                <input type="email" className="w-[180px] lg:w-[361px] h-[52px] bg-white py-[14px] px-[16px] border-[1px] border-transparent outline-none focus:border-black leading-[26px] text-[18px] tracking-[0px]" placeholder='Enter your email' />
                <Links link='Get started' url='/'  className="text-white bg-black" />
              </div>
              <div className="flex items-center gap-[28px] pt-[80px] w-[400px] lg:w-fit">
                <VISALogo />
                <VISALogo />
                <VISALogo />
              </div>
            </div>
            <div className="hidden sm:flex items-start justify-center w-100">
              <HeroPattern/>
              <HeroMan className='absolute mt-[24.12px]' />
            </div>
        </div>
    </div>
  )
}

export default Hero