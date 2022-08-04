const InputCal = (props) =>{
    const message = props.value
    return (
        <input type="text" size={48} value={message} disabled  className="input-text"/>
    )
}
export default InputCal;