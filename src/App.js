import { useReducer } from "react";
import "./App.css";
import { Card } from "./card";

function App() {

  const data = [
    {
        name: "A",
        counter : 0
    },
    {
        name: "B",
        counter : 0
    },
    {
        name: "C",
        counter : 0
    },
    {
        name: "D",
        counter : 0
    },
    {
        name: "E",
        counter : 0
    },
    {
        name: "F",
        counter : 0
    },
    {
        name: "G",
        counter : 0
    },
]

const sortingData = (data)=>{
  data.sort(function(a,b){return b["counter"]-a["counter"]})
}

const sortedData = sortingData(data)

console.log(sortedData)

  return (
    <div className="App">
      <h1>Hey Cricbuzz, can't wait to work with you</h1>

      <div className="container">
        <div className="wrapper">
        {
          data.map((card)=><Card data={card}/>)
        }
        </div>
      </div>
    </div>
  );
}

export default App;
