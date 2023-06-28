import React, { useEffect, useState } from 'react'
import CardData from '../common/CardData'

function MyCards({cards,searchCards,PageNo}) {
    const [mycards, setmycards] = useState([])
    const [filterData, setfilterData] = useState([])

    const [ownerId, setownerId] = useState(2)
    

const getFilteredCards = (cards) => {
    const filteredCards = cards.filter((val) => {
        return val.owner_id === ownerId 
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
    console.log(PageNo,"PageNo")
    getFilteredCards(cards)
  }, [cards, searchCards,PageNo]);


  return (
    <div>
 <CardData mycards={filterData} />
    </div>
  )
}

export default MyCards

