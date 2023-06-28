import React, { useEffect, useState } from 'react'
import CardData from '../card/CardData'

function MyCards({cards}) {
    const [mycards, setmycards] = useState([])
    const [ownerId, setownerId] = useState(2)

 const getDatas = (cards) =>{
    cards.map((val)=>{
        if(val.owner_id === ownerId ){
            mycards.push(val)
        }
    })
    
 }
    useEffect(() => {
if(mycards.length == 0)
    getDatas(cards)

    }, [cards])


  return (
    <div>
 <CardData mycards={mycards} />

    {/* </div>)
})} */}
    </div>
  )
}

export default MyCards
