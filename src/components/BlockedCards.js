import React, { useEffect, useState } from 'react'
import CardData from '../card/CardData'

function BlockedCards({cards,searchCards}) {
    const [mycards, setmycards] = useState([])

//  const getDatas = (cards) =>{
//     cards.map((val)=>{
//         console.log(cards,"cardssss")
//         if(val.status === "blocked" ){
//             mycards.push(val) }
//     })
//  }
//     useEffect(() => {
// if(mycards.length == 0)
//     getDatas(cards)
//     }, [cards])

   
const getFilteredCards = (cards) => {
    const filteredCards = cards.filter((val) => {
        return val.status === "blocked" && val.name.toLowerCase().includes(searchCards.toLowerCase());
      });
      setmycards(filteredCards);
  };

  useEffect(() => {
        getFilteredCards(cards)
  }, [cards, searchCards]);

  return (
    <div>
 <CardData mycards={mycards} />

    </div>
  )
}

export default BlockedCards
