import React, { useEffect, useState } from 'react'
import CardData from '../common/CardData'

function AllCards({cards,searchCards,PageNo}) {
    const [mycards, setmycards] = useState([])

    const getFilteredCards = (cards) => {
        const filteredCards = cards
          .filter((val) => val.name.toLowerCase().includes(searchCards.toLowerCase()))
          .slice(0+PageNo, PageNo+10);
                     
        setmycards(filteredCards);
      };
    
      useEffect(() => {
            getFilteredCards(cards)
      }, [cards, searchCards,PageNo]);
    

  return (
    <div>
 <CardData  mycards={mycards} />
    </div>
  )
}

export default AllCards
