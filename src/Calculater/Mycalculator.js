import React from "react";
import  './CSS/Calculator.css';
import { useState } from "react";
import { toast } from 'react-toastify';
//Components
import DisplayHistory from "./DisplayHistory";
import InputCal from "./InputCal";
import ButtonValue from "./Button";

const Mycalculator = () =>  {

   const [message, setMessage] = useState("");
   const [totals,setTotal] = useState([]);
   
    const getValue = (value) => {
      setMessage(message + value);
  };

  //Thông Báo:toastify
    const notify = () => toast.success("Kết Quả đã được lưu");
    const notify1 = () => toast.error("Chưa Nhập phép tính");
    

    const TotalValue = () => {
    // eslint-disable-next-line
    setMessage( Function(`"use strict";return (${message})`)());
    if(!message && totals !== undefined) {
      notify1();
      clearValue();
      return;
    }
    else{
      notify(); 
       // eslint-disable-next-line
      setTotal((prev) => [...prev, message + ` = ` +  Function(`"use strict";return (${message})`)()]); 
    }
  };

   const RemoveValue = () => {
    setMessage(message.slice(0, -1));
  };

   const clearValue = () => {
    setMessage("");
  };

   const deleteTotal = () => {
    setTotal([]); 
  }
    return(
    <> 
<div className="main vh-100">
    <div className="casio">
      <InputCal value={message}/>
      <ButtonValue 
      ButtonValue={getValue}
      btnTotalValue = {TotalValue}
      btnRemoveValue={RemoveValue}
      btnClearValue={clearValue}
      />
    </div>
</div>
    <DisplayHistory history={totals}
    deleteTotalInParent={deleteTotal}
    />
  </>
  )
}

export default Mycalculator;