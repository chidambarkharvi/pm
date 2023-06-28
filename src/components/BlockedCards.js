import React, { useEffect } from 'react'

function BlockedCards({cards}) {
    useEffect(() => {
        console.log(cards,"blocked cards")
        }, [])
  return (
    <div>
      <h1>BlockedCards</h1>
    </div>
  )
}

export default BlockedCards
