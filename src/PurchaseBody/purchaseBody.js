import React, { useState } from "react"
import visaIMG from "../images/visa.png"
import masterCardIMG from "../images/mastercard.png"
import DonateButton from "./DonateButton/DonateButton"


const PurchaseBody = (props) => {
    const [selected_card_msg, set_selected_card_msg] = useState("")

    return (
        <div id = "creditCardSelect">
        <input 
          id = "visa" 
          type = "image" 
          src = {visaIMG}
          onClick = {() => {set_selected_card_msg("Visa")}}
          style = {{width: "80px", marginRight: "2%"}}/>
        <input 
          id = "masterCard" 
          type = "image" 
          src = {masterCardIMG}
          onClick = {() => {set_selected_card_msg("MasterCard")}}
          style = {{width: "80px", border: "solid",  borderColor: "gainsboro"}}

          />
        <p>Selected: <span style = {{fontWeight: "bold"}}>{selected_card_msg}</span></p>
        <p>Name</p>
        <input placeholder = "Name On the Card" type = "text"/>
        <div>
          <p>Card Numbers</p>
          <input placeholder = "0000" className = "cardNumbers" type = "text"/>
          <input placeholder = "0000" className = "cardNumbers" type = "text"/> 
          <input placeholder = "0000" className = "cardNumbers" type = "text"/> 
          <input placeholder = "0000" className = "cardNumbers" type = "text"/>
        </div>
        <p>Expiration Date</p>
        <input placeholder = "MM" style = {{width: "5%", marginRight: "0.5%"}} type = "text"/>
        <input placeholder = "YY" style = {{width: "5%"}} type = "text"/> 
          <p>CVC</p>
        <input 
          type = "text"
          placeholder = "000" 
          style = {{marginBottom: "3%"}}/>
        
        
        <DonateButton/>
      </div>
    )
}

export default PurchaseBody