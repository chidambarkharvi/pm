import React, { useEffect, useState } from 'react'
import CardTabs from './components/CardTabs'
import "./App.css"


function App() {
  const [cards, setCards] = useState([]);
  const [mycards, setmycards] = useState([]);



  const fetchCards = async () => {
    try {
      const response = await fetch('http://localhost:3004/data');
      const data = await response.json();
      console.log(data,"dataa")
      const slicedData = data.slice(0, 10);
      setCards(slicedData);
      mycards()
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };


  useEffect(() => {
    fetchCards();
  }, []);


  return (
    <div>
      <CardTabs allData={cards} />
    </div>
  )
}

export default App
