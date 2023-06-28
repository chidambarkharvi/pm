import React from 'react'
import Card from 'react-bootstrap/Card';
import {BsDot} from "react-icons/bs";
import {RiRefreshLine} from "react-icons/ri";
import {GoDotFill} from "react-icons/go";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./Card.css"


function CardData({mycards}) {
  return (

<div className="cardDiv">
{mycards?.map((val) => {
      return ( <div >
            <Card className='cards' style={{ width: 'auto',maxWidth:"400px" ,minWidth:"300px",paddingTop:"20px",paddingBottom:"10px"}}>
    <Card.Body>
      <div style={{display: 'flex',justifyContent: 'space-between'}}>
       <div>
        <h1 className="name" >{val.name}</h1>
        <h6  className='budget'>name <BsDot/> Budget </h6>  
      </div>
      <RiRefreshLine style={{backgroundColor:"pink"}} className='icon'/>
      </div>

      <div style={{display: 'flex',justifyContent:"space-between",width:"85%"}}>
      <div >
        <h1 className="amount" >AMOUNT</h1>
        <h6  className='amountValue'>{val.available_to_spend.value}  {val.available_to_spend.currency} </h6>  
      </div>
      <div>
        <h1 className="amount" >FREQUENCY</h1>
        <h6  className='amountValue'>Monthly  </h6>  
      </div>
      <div>
        <h1 className="amount" >EXPIRY</h1>
        <h6  className='amountValue'>{val.expiry ? val.expiry : "N/A"  }</h6>  
      </div>
      </div>

      <ProgressBar style={{ height: '10px' }} >
      <ProgressBar  variant="success" now={45} key={1} />
      <ProgressBar variant="danger" now={55} key={2} style={{ backgroundColor: 'pink' }} />
    </ProgressBar>

    <div className="balSpent" >
        <h1 className="spent" > <span><GoDotFill  style={{color:"green"}}/></span> Spent </h1>
        <h6  className='bal'>{val.spent.value} {val.spent.currency}  </h6>  
      </div>

      <div className='balSpent'>
      <h1 className="spent" > <span><GoDotFill style={{color:"red"}}/></span> Balance </h1>
        <h6  className='bal'>{val.available_to_spend.value}  {val.available_to_spend.currency}</h6>  
      </div>

    </Card.Body>
  </Card>
    
        </div>)
    })}
</div>




  )
}

export default CardData


