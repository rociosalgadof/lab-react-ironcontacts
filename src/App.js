import { useState } from "react";
import "./App.css";
import data from "./contacts.json"

function App() {
  let firstSix = data.filter((month,idx) => idx < 6)
  const [contacts, setContacts] = useState(firstSix)
  function handleClick(){
    let arr = []
    data.forEach((item)=>{
      if(!contacts.includes(item)){
        arr.push(item)
      }
    })
    let random = Math.floor((Math.random()*arr.length) + 0); 
    setContacts([...contacts, arr[random]])
  }

  function sortByName(){
    let sortedArray = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name));
    console.log(sortedArray)
    setContacts(sortedArray)
  }

  function sortByPopularity(){
    let sortedArray = [...contacts].sort((a, b) => b.popularity-a.popularity);
    setContacts(sortedArray)
  }

  function handleDelete(id){
    let withoutDeleted = contacts.filter((item, i)=>i!==id)
    setContacts(withoutDeleted)
  }

  return (
    <>
    <div className="row justify-content-center">
    <div className="col-8">
    <div className="row justify-content-center text-center">
    <div className="col-8">
    <h1 className="text-center">IronContacts</h1>
    <button className="text-center" onClick={handleClick}>Add Random Contact</button>
    <button className="text-center" onClick={sortByPopularity}>Sort by Popularity</button>
    <button className="text-center" onClick={sortByName}>Sort by name</button>
    </div>
    </div>
  <div className="App">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Picture</th>
      <th scope="col">Popularity</th>
      <th scope="col">Won an Oscar</th>
      <th scope="col">Won an Emmy</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((item, i)=>{return (<tr>
      <th scope="row">{i+1}</th>
      <td>{item.name}</td>
      <td><img style={{width: "100px", height:"100px"}}src={item.pictureUrl}/></td>
      <td>{parseFloat(item.popularity).toFixed(2)}</td>
      <td>{item.wonOscar && "🏆"}</td>
      <td>{item.wonEmmy && "🏆"}</td>
      <td><button onClick={()=>{handleDelete(i)}}>Delete</button></td>
    </tr>)})}
  </tbody>
</table>
</div>
</div>
</div>
</>
);
}
export default App;
