import React, { useEffect, useState } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import MyCards from './MyCards';
import AllCards from './AllCards';
import BlockedCards from './BlockedCards';
import { Tab, Nav } from 'react-bootstrap';
import FilterCard from '../card/FilterCard';
import {BiFilter} from "react-icons/bi";



function CardTabs({allData}) {
    const [searchCards, setSearchCards] = useState('');
    const [filterOpen, setfilterOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('My cards');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
      console.log('Tab changed:', tab);
    };

    const handleInputChange = (e) => {
      setSearchCards(e.target.value);
    };

    const handleFilterOpen = () =>{
      setfilterOpen(true)
    }
  
  return (
    <>

    <div >
<div style={{float:"right",padding:"10px"}}>
      <input
        type="text"
        value={searchCards}
        onChange={handleInputChange}
        placeholder="search here"
      />
      {/* <button class="search" onClick={handleSearch}>Search</button> */}
      <button className="filter" onClick={handleFilterOpen} > <BiFilter/> Filter</button>
    </div>
    <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="My cards">My cards</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="All cards">All cards</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Blocked cards">Blocked cards</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="My cards">
         <MyCards cards={allData} searchCards={searchCards} />
        </Tab.Pane>
        <Tab.Pane eventKey="All cards">
          <AllCards cards={allData} searchCards={searchCards} />
        </Tab.Pane>
        <Tab.Pane eventKey="Blocked cards">
          <BlockedCards cards={allData} searchCards={searchCards} />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>

    </div>
    <FilterCard filterOpen={filterOpen} setfilterOpen={setfilterOpen}  />

    </>

  )
}

export default CardTabs

