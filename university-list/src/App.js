import React, {useState, useEffect} from "react";
import Universities from "./components/Universities";

function App() {
  const [loading, setLoading] = useState(true);
  const [universities, setUniveristies] = useState([]);
  const apiUrl = "https://api.jsonbin.io/b/62b1bd16402a5b3802324935";

  const deletedCard = (id) => {
    const filtered = universities.filter ((university) => {
     return university.id !== id   
    })
    setUniveristies(filtered)
  }

  
  useEffect(() => {
    const getUniversitiesList = async () => {
        // setLoading(true);
        const universityList = await fetch(apiUrl);
        const result = await universityList.json();      
        setUniveristies(result);
        setLoading(false)
      }
     getUniversitiesList()
  },[])

  if (loading) {
    return <h1>
      <div className="App">
       <header>
        <h1>Loading...</h1> 
       </header>
      </div>
    </h1>
  }

  return (
    <div className="App">
      <Universities universities= {universities} deletedCard = {deletedCard} />
      {universities.length > 0 ?  <Universities universities= {universities} deletedCard = {deletedCard} /> : <h1>No more Universities</h1> }
    </div>
  );
}

export default App;
