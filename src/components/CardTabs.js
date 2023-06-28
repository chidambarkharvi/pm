import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import { IoFilterSharp } from 'react-icons/io';


function CardTabs({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSearch = () => {
      onSearch(searchTerm);
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
      <button onClick={handleSearch}>Search</button>
      <button>
       filter 
      </button>
    </div>

    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
       
      <Tab eventKey="home" title="Your cards">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="All cards">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Blocked cards" >
        Tab content for Contact
      </Tab>
    </Tabs>

    </div>
  )
}

export default CardTabs

