import React, { useEffect } from 'react'
import CardData from '../card/CardData'

function AllCards({cards}) {

  return (
    <div>
 <CardData  mycards={cards} />
    </div>
  )
}

export default AllCards
