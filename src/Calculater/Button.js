const ButtonValue = (props) =>{

    const TotalValue =() =>{
        props.btnTotalValue()
    }
    const getValue = (value) => {
        props.ButtonValue(value)
    }
    const clearValue =() =>{
        props.btnClearValue()
    }
    
   return(
    <div>
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
          <div onClick={clearValue}>C</div>
          <div onClick={() => getValue("/")}>/</div>
        </div>
        <div className="flex-container1">
          <div onClick={TotalValue} className="btn-Onclick">=</div>
        </div>
    </div>
   )
}

export default ButtonValue