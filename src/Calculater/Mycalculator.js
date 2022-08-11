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
    const notifyErorr = () => toast.error("Chưa Nhập phép tính");
    const notifyDel = () => toast.success("Xóa thành công!!");

    const TotalValue = () => {
    // eslint-disable-next-line
    let ValueHistory = {
      id: `${new Date().getTime()}`,
      name:message,
    // eslint-disable-next-line
      TotalValueNumber: Function(`"use strict";return (${message})`)()
    }
     // eslint-disable-next-line
    setMessage(Function(`"use strict";return (${message})`)());
    if(!message && totals !== undefined) {
      notifyErorr();
      clearValue();
      return;
    }
    else{
      notify(); 
      // setTotal((prev) => [...prev,message + ` = ` +  Function(`"use strict";return (${message})`)()]);  
      setTotal([...totals,ValueHistory])
    }
  };

   const clearValue = () => {
    setMessage("");
  };

  const deleteTotal = (todoId) => {
      let NewFileid = totals.filter((item) => item.id !== todoId);
      setTotal(NewFileid);
      notifyDel();  
    
  };
    return(
    <> 
<div className="main vh-100">
    <div className="casio">
      <InputCal value={message}/>
      <ButtonValue 
      ButtonValue={getValue}
      btnTotalValue = {TotalValue}
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