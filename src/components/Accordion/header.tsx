import React from 'react'
import {ChevronDown } from 'lucide-react'
import clsx from 'clsx'

type Props = {
  title: string,
  image?: any,
  imageAlt?: string
  open: any
  id: number
  active: number
}

const AccordionHeader = ({title, image, imageAlt, id, open, active}: Props) => {

    const handleClick = () => {
      open(id)
    }
  return (
    <div className="flex items-start justify-between  cursor-pointer pb-[20px]" onClick={handleClick}>
        <div className="flex items-center justify-start gap-2">
          {image && <img className='w-[35px] h-[35px] rounded-full overflow-hidden object-center' src={image} alt={imageAlt} loading="lazy" />}
          <p className="w-fit ultrabold leading-[28px] text-[20px] tracking-[0px]">
            {title}
          </p> 
        </div>
        <ChevronDown className={clsx('transform rotate-0 transition duration-500', {
          'rotate-180' : active === id
        })} />
      </div>
  )
}

export default AccordionHeader