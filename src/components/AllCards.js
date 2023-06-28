import React, { useEffect, useState } from 'react'
import CardData from '../card/CardData'

function AllCards({cards,searchCards}) {
    const [mycards, setmycards] = useState([])


    const getFilteredCards = (cards) => {
        const filteredCards = cards.filter((val) => {
            return  val.name.toLowerCase().includes(searchCards.toLowerCase());
          });
          setmycards(filteredCards);
      };
    
      useEffect(() => {
            getFilteredCards(cards)
      }, [cards, searchCards]);
    

  return (
    <div>
 <CardData  mycards={mycards} />
    </div>
  )
}

export default AllCards
