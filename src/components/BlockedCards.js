import React, { useEffect, useState } from 'react'
import CardData from '../common/CardData'

function BlockedCards({cards,searchCards,PageNo}) {
    const [mycards, setmycards] = useState([])
    const [filterData, setfilterData] = useState([])


const getFilteredCards = (cards) => {
    const filteredCards = cards.filter((val) => {
        return val.status === "blocked" 
      });
      setmycards(filteredCards);
      filteredData()

  };

  const filteredData = () =>{
    const filteredCards = mycards
    .filter((val) => val.name.toLowerCase().includes(searchCards.toLowerCase()))
    .slice(0+PageNo, PageNo+10);

    setfilterData(filteredCards);
  }

  useEffect(() => {
        getFilteredCards(cards)
  }, [cards, searchCards,PageNo]);

  return (
    <div>
 <CardData mycards={filterData} />

    </div>
  )
}

export default BlockedCards
