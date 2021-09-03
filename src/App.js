import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [repos,setRepos] = useState([{}]);
 const LoadNewChanges = true ;

useEffect(()=>{
  async function fetchData(){
   const response = await fetch('https://api.github.com/users/bilalalam98/repos')
   const data = await response.json();
   setRepos(data);
   console.log(data)
  }
  fetchData()
},[LoadNewChanges])


  return (
    <div className="App">
     <ul>
       <h1>you are watching all the</h1>
       {repos.map((repoObj,ind)=>{
      return(
        <li key={ind}>{repoObj.name}</li>
      )
       })}

     </ul>
    </div>
  );
}

export default App;
