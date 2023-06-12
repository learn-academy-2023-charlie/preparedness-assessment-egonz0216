import React, {useState} from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [modal, setModal] = useState(false);  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setInputValue("")
  }
  const toggle = () => setModal(!modal);


  return (
    <div className="entire-content">
      <h1 style={{color: "white"}}>Preparedness Assessment</h1>
      <br/>
      <br/>
      <div className="form">
        <div className="input">
          <Label 
            for="name" 
            className="label"
          >
            Enter your name:
          </Label>
          <Input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <ModalComponent inputValue={inputValue}/> 
        <div className="btns">
          <Button onClick={toggle} id="btn1" >
            Click Me
          </Button>
          <Button onClick={handleClick} id="btn2">Reset</Button>
        </div>
      </div>
    </div>
  )
}

export default App

