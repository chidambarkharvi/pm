import React, { useEffect, useState } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import MyCards from './MyCards';
import AllCards from './AllCards';
import BlockedCards from './BlockedCards';
import { Tab, Nav } from 'react-bootstrap';

function CardTabs({allData}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('My cards');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
      console.log('Tab changed:', tab);
    };

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
      <button className="filter" ><i class="fa fa-filter"></i> Filter</button>
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
         <MyCards cards={allData} />
        </Tab.Pane>
        <Tab.Pane eventKey="All cards">
          <AllCards cards={allData} />
        </Tab.Pane>
        <Tab.Pane eventKey="Blocked cards">
          <BlockedCards cards={allData} />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>

    </div>
  )
}

export default CardTabs

