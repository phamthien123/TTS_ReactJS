const InputValue = (props) =>{
    const HandleChange =(event) =>{
        props.HandleChangeValue(event)
    }
    return (
<input type="text" onChange={(event) => HandleChange(event)} className="list-input" placeholder="Nhập Task...."/>
    )
}
export default InputValue;