import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Radium from "radium";
import styled from "styled-components"
import wiki_img from "./images/wiki.jpg"

function App() {
  const [button0_name, set_button0_name] = useState("Donate");
  const toggle_donate_button = () =>{
    if (button0_name === "Donate"){
      set_button0_name("Donating");
    } else {
      set_button0_name("Donate")
    }
  }


  return (
    <div className="App">
      <h1>Project Name</h1>
      <label>Search: </label><input type = "text"></input>
      <ol style = {{listStyle: "none"}}>
        <div className = "organization" >
          <li id = "organization-0">
            Wikipiedia 
            <div style = {{display: "block"}}>
              <button 
                onClick = {toggle_donate_button}>
                  {button0_name}
              </button>
              {" "}
              <select style = {{width: "60px", height: "25px"}}>
                <option value = "0">5%</option>
                <option value = "1">10%</option>
                <option value = "2">15%</option>
                <option value = "3">20%</option>
              </select>
            </div>
          </li>
          <img style = {{verticalAlign: "middle", padding: "20px"}} src = {wiki_img} width = "150px"></img>
          <p>Description</p>
        </div>
        <div className = "organization">
          <li id = "organization-1">Khan Academy</li>
        </div>
        <div className = "organization">
          <li id = "organization-2">#3 organization</li>
        </div>
      </ol>
    </div>
  );
}

export default Radium(App);
