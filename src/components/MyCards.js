import React, { useEffect } from 'react'

function MyCards({cards,namea}) {
    useEffect(() => {
    console.log(cards,"mycards",namea)
    }, [])

const data = cards.map((val)=>{
 return (
    <div key={val.owner_id    }>
    <h1> {val.name}</h1>
    <h1> {val.name}</h1>

    </div>

 )  
})

  return (
    <div>
      <h1>MyCards{namea} </h1>
{data}
    </div>
  )
}

export default MyCards
