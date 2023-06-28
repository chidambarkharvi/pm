import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { Dropdown } from 'react-bootstrap';

function FilterCard({filterOpen,setfilterOpen}) {
    const [show, setShow] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const handleClose = () => setfilterOpen(false);

    const handleSelect = (eventKey) => {
      setSelectedValue(eventKey);
    };
  return (
    <>
    <Modal  show={filterOpen} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Filter</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <h2 style={{fontSize:"16px",color:"grey"}}>Type</h2>
    <div style={{display:"flex",justifyContent:"space-between",width:"70%",marginBottom:"10px"}}>

    <div style={{display:"flex",alignItems:"center",justifyContent:"center",}}>
        <input type="checkbox" />
        <h2 style={{fontSize:"16px",fontweight:"bold",color:"black",marginLeft:"10px"}}>Subscription</h2>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <input type="checkbox" />
        <h2 style={{fontSize:"16px",fontweight:"bold",color:"black",marginLeft:"10px"}}>Burner</h2>
    </div>
    </div>
    <h2 style={{fontSize:"16px",color:"grey"}}>Cardholder</h2>

    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="grey" style={{border:"1px solid grey",width:"90%",textAlign:"start",marginTop:"10px"}} id="dropdown-basic">
        Select cardholder
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"90%"}}>
        <Dropdown.Item eventKey="action1">Action 1</Dropdown.Item>
        <Dropdown.Item eventKey="action2">Action 2</Dropdown.Item>
        <Dropdown.Item eventKey="action3">Action 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    </Modal.Body>
    <Modal.Footer style={{display:"flex",justifyContent:"space-between",paddingLeft:"40px",paddingRight:"40px"}} >
      <Button  style={{backgroundColor:"red",paddingLeft:"40px",paddingRight:"40px"}} onClick={handleClose}>
        Apply 
      </Button>
      <Button style={{backgroundColor:"grey",paddingLeft:"40px",paddingRight:"40px"}} onClick={handleClose}>
        Clear
      </Button>
    </Modal.Footer>
  </Modal>
    </>
  )
}

export default FilterCard

