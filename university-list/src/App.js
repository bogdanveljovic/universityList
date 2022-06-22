import React, {useState, useEffect} from "react";
import Universities from "./components/Universities";

function App() {
  const [loading, setLoading] = useState(true);
  const [universities, setUniveristies] = useState([]);
  
  const apiUrl = "https://api.jsonbin.io/b/62b1bd16402a5b3802324935" ;

  useEffect(() => {
    const getUniversitiesList = async () => {
        // setLoading(true);
        const universityList = await fetch(apiUrl);
        const result = await universityList.json();      
        setUniveristies(result);
        setLoading(false)
      }
     getUniversitiesList()
    //  console.log(loading)
  },[])



  if (loading) {
    return <h1>
      <div className="App">
       <header>
          {loading ? <h1>Loading...</h1> : <Universities universities={universities} />}
       </header>
      </div>
    </h1>
  }

  return (
    <div className="App">
      <Universities universities= {universities} />
    </div>
  );
}

export default App;
