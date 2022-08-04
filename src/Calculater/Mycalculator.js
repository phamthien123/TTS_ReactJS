import React from "react";
import  './CSS/Calculator.css';
import { useState } from "react";
import { toast } from 'react-toastify';
import DisplayHistory from "./DisplayHistory";
import InputCal from "./InputCal";

/*eslint-disable no-eval */ 

const Mycalculator = () =>  {

   const [message, setMessage] = useState("");
   const [totals,setTotal] = useState([]);
   
    const getValue = (value) => {
    setMessage(message + value);
  };

  //Thông Báo:toastify
 
    const notify = () => toast("Kết Quả đã được lưu");
    const notify1 = () => toast.error("Chưa Nhập phép tính");
    
    const TotalValue = () => {
    setTotal((prev) => [...prev, message + ` = ` + eval(message)]); //[...prev]:bảo lưu mảng cũ  
    setMessage(eval(message));

    if(!message) {
      notify1();
    }
    else{
      notify();
    }
  };

   const RemoveValue = () => {
    setMessage(message.slice(0, -1));
  };

   const clearValue = () => {
    setMessage("");
  };

   const deleteTotal = () => {
    // const revmoe = [...totals].filter(total => total.number !== number);
    // setTotal(revmoe);
    setTotal([]); 
  }

    return(
    <> 
<div className="main vh-100">
    <div className="casio">
      <InputCal value={message}/>
       <div className="flex-container">
          <div onClick={() => getValue("1")}>1</div>
          <div onClick={() => getValue("2")}>2</div>
          <div onClick={() => getValue("3")}>3</div>
          <div onClick={() => getValue("+")}>+</div>
      </div>
        <div className="flex-container">
          <div onClick={() => getValue("4")}>4</div>
          <div onClick={() => getValue("5")}>5</div>
          <div onClick={() => getValue("6")}>6</div>
          <div onClick={() => getValue("-")}>-</div>
        </div>
        <div className="flex-container">
          <div onClick={() => getValue("7")}>7</div>
          <div onClick={() => getValue("8")}>8</div>
          <div onClick={() => getValue("9")}>9</div>
          <div onClick={() => getValue("*")}>*</div>
        </div>
        <div className="flex-container">
          <div onClick={() => getValue(".")}>.</div>
          <div onClick={() => getValue("0")}>0</div>
          <div onClick={TotalValue}>=</div>
          <div onClick={() => getValue("/")}>/</div>
        </div>
        <div className="flex-container">
          <div onClick={RemoveValue}>C</div>
          <div onClick={clearValue}>Clear</div>
        </div>
      </div>
    </div>
    <DisplayHistory history={totals}/>
  </>
  )
}

export default Mycalculator;