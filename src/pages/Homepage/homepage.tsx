
import React from 'react'
import { HOMEPAGEABOUT, HOMEPAGEFAQS, HOMEPAGEHERO, HOMEPAGEHOW, HOMEPAGEPRICING } from 'src/components'



type Props = {}

const homepage = (props: Props) => {
  return (
    <div>
      <HOMEPAGEHERO/>
      <HOMEPAGEABOUT />
      {/*<HOMEPAGEHOW />
      <HOMEPAGEPRICING />
      <HOMEPAGEFAQS /> */}
    </div>
  )
}

export default homepage