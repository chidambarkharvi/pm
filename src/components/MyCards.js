import React, { useEffect, useState } from 'react'
import CardData from '../common/CardData'

function MyCards({cards,searchCards}) {
    const [mycards, setmycards] = useState([])
    const [ownerId, setownerId] = useState(2)

const getFilteredCards = (cards) => {
    const filteredCards = cards.filter((val) => {
        return val.owner_id === ownerId && val.name.toLowerCase().includes(searchCards.toLowerCase());
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

export default MyCards

