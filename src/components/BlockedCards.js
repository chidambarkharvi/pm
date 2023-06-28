import React, { useEffect, useState } from 'react'
import CardData from '../card/CardData'

function BlockedCards({cards}) {
    const [mycards, setmycards] = useState([])

 const getDatas = (cards) =>{
    cards.map((val)=>{
        console.log(cards,"cardssss")
        if(val.status === "blocked" ){
            mycards.push(val) }
    })
 }
    useEffect(() => {
if(mycards.length == 0)
    getDatas(cards)
    }, [cards])

  return (
    <div>
 <CardData mycards={mycards} />

    </div>
  )
}

export default BlockedCards
