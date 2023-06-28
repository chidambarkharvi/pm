import React, { useEffect } from 'react'

function AllCards({cards}) {
    useEffect(() => {
        console.log(cards,"allcards")
        }, [])
  return (
    <div>
      <h1>AllCards</h1>
    </div>
  )
}

export default AllCards
