import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Radium from "radium";
import styled from "styled-components"

import PurchaseWithCreditCard from "./PurchaseBody/purchaseBody"
import PurchaseWithPaypal from "./PurchaseWithPayPal/PurchaseWithPaypal"

import creditCardIMG from "./images/creditCard.png"
import PayPalIMG from "./images/PayPal.png"



function App() {
  let [credit_card_clicked, set_credit_card_clicked] = useState(false);
  const [purchase_body, set_purchase_body] = useState(null);
  const [credit_card_button_css, set_credit_card_button_css] = useState({marginRight: "1.5%"});
  const [paypal_button_css, set_paypal_button_css] = useState({marginLeft: "1.5%"});

  const toggle_purchase_option = () => {
    if (credit_card_clicked){
      set_credit_card_button_css({marginRight: "1.5%", borderWidth: "medium", borderColor: "black"});
      set_paypal_button_css({marginLeft: "1.5%"});
      set_purchase_body(<PurchaseWithCreditCard/>)

    } else{
      set_credit_card_button_css({marginRight: "1.5%"});
      set_paypal_button_css({marginLeft: "1.5%", borderWidth: "medium", borderColor: "black"});
      set_purchase_body(<PurchaseWithPaypal/>)
    }
  }

  return (
    <div className="App">
      <div className = "summary" style = {{paddingBottom: "3%"}}>
        <h1 id = "intro">Complete Tour Donation</h1>
        <p>Total Donation: [Price]</p>
        <input
          className = "paymentMethod"
          type = "image"
          src = {creditCardIMG}
          onClick = {() => {
            credit_card_clicked = true;
            toggle_purchase_option();
          }}
          style = {credit_card_button_css}
        >
        </input>
        <input
          className = "paymentMethod"
          type = "image"
          src = {PayPalIMG}
          onClick = {() => {
            credit_card_clicked = false;
            toggle_purchase_option();
          }} 
          style = {paypal_button_css}>
        </input>
      </div>
      {purchase_body}

    </div>
  );
}

export default Radium(App);
