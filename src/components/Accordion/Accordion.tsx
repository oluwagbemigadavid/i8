import clsx from 'clsx'
import React, { useState } from 'react'
import { FAQsType } from 'src/utils'
import AccordionItem from './accordion-item'

type Props = {
  data: FAQsType[],
  className?: string
}

const Accordion = ({data, className}: Props) => {
 const [open, setOpen] = useState(0)

 const handleOpen = (idx: number) => {
  setOpen(idx === open ? -1 : idx)
 }
  return (
    <div className={clsx('accordion w-full', className)}>
      <div className="accordion__container flex flex-col gap-[20px]">
        {data.map((item: FAQsType, idx: number) => (
          <AccordionItem key={item.header.title} listItem={item} setActive={handleOpen} isActive={open === idx} id={idx} active={open} />
        ))}
      </div>
    </div>
  )
}

export default Accordion