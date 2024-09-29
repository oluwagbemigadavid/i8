import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { FAQsType } from 'src/utils'
import AccordionHeader from './header'

type Props = {
  listItem: FAQsType,
  isActive: boolean,
  setActive: any,
  id: number,
  active: number

}

const AccordionItem = ({listItem, isActive, setActive, id, active} :Props)  => {
  const [maxHeight, setMaxHeight] = useState(0)
  const contentRef = useRef<any>()
  useEffect(() => {
    console.log(contentRef)
    if(id === active ) {
      setMaxHeight(contentRef.current.offsetHeight + 20)
    } else {
      setMaxHeight(0)
    }
  }, [active])
  
  return (
    <div className="item border-b-[1px] border-[#151515]">
      <AccordionHeader {...listItem.header} open={setActive} id={id} active={active} />
      <div className={clsx("accordion-item h-0 overflow-hidden tranition duration-500")} style={{height: `${maxHeight}px`}} >
        <div ref={contentRef} > 
          {listItem.content}
        </div>

      </div>
    </div>
  )
}

export default AccordionItem