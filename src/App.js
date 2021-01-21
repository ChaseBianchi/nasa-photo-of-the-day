import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import {APIKEY, BASEURL} from './constants'
import Header from './Header'
import {testData} from './testdata'

function App() {
  const {nasaData, setNasaData} = useState({});

  // useEffect(()=>{
  //   axios.get(`${BASEURL}?api_key=${APIKEY}`)
  //   .then(res=> setNasaData(res.data))
  //   .catch(err=>console.log(err))
  // }, [])
  useEffect(()=>{
    setNasaData(testData)
  },[])
  return (
    <div className="App">
      <Header nasaData={nasaData}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaDiv nasaData={nasaData} />
    </div>
  );
}

export default App;
