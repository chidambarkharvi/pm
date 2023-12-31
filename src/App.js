import React, { useEffect, useState } from 'react'
import CardTabs from './components/CardTabs'
import "./App.css"


function App() {
  const [cards, setCards] = useState([]);
  // const [mycards, setmycards] = useState([]);



  const fetchCards = async () => {
    try {
      const response = await fetch('http://localhost:3004/data');
      const data = await response.json();
      console.log(data, "dataa")
      setCards(data);
      // mycards()
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };


  useEffect(() => {
    fetchCards();
  }, []);

  const appFunctionRun = () => {
    console.log("appFunctionRun clicked")
  }

  return (
    <div>

      <CardTabs appFunctionRunForcard={appFunctionRun} allData={cards} />

    </div>
  )
}

export default App
