
import React from 'react'
import { HOMEPAGEABOUT, HOMEPAGEHERO, HOMEPAGEHOW } from 'src/components'



type Props = {}

const homepage = (props: Props) => {
  return (
    <div>
      <HOMEPAGEHERO/>
      <HOMEPAGEABOUT />
      <HOMEPAGEHOW />
    </div>
  )
}

export default homepage