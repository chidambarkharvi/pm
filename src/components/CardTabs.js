import React, { useEffect, useState } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import MyCards from './MyCards';
import AllCards from './AllCards';
import BlockedCards from './BlockedCards';
import cardsData from '../data/cards.json';
import { Tab, Nav } from 'react-bootstrap';

// import { IoFilterSharp } from 'react-icons/io';


function CardTabs() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cards, setCards] = useState([]);
    const [activeTab, setActiveTab] = useState('All cards');
    const ownerId = 3
    const [mycards, setmycards] = useState([])
    const [blockedCards, setblockedCards] = useState([])
    const [allCards, setallCards] = useState([])


    const handleTabChange = (tab) => {
      setActiveTab(tab);
      console.log('Tab changed:', tab);
    };

    useEffect(() => {

      const filteredCards = cardsData.data.filter(card => {
        // if (activeTab === 'Your') {
        //   return card.owner_id === 1; 
        // } else if (activeTab === 'All') {
        //   return true; 
        // } else if (activeTab === 'Blocked') {
        //   return card.status === 'blocked'; 
        // }
        console.log(card,"card")
        if(card.owner_id === ownerId ){
          mycards.push(card)
        }else if(card.status === "blocked"){
            blockedCards.push(card)
        }

       allCards.push(card)
console.log(mycards,"mycards")
      });
    }, []);

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  



    
  
  return (
    <div >

<div style={{float:"right",padding:"10px"}}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="search here"
      />
      {/* <button class="search" onClick={handleSearch}>Search</button> */}
      <button class="filter" ><i class="fa fa-filter"></i> Filter</button>
    </div>
    <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="My cards">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="All cards">Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Blocked cards">Tab 3</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="My cards">
         <MyCards cards={mycards} />
        </Tab.Pane>
        <Tab.Pane eventKey="All cards">
          <AllCards cards={allCards} />
        </Tab.Pane>
        <Tab.Pane eventKey="Blocked cards">
          <BlockedCards cards={blockedCards} />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>

    </div>
  )
}

export default CardTabs

