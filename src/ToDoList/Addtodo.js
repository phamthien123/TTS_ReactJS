const Addtodo =(props) =>{
    const handleAdd =() =>{
        props.handleAddValue()
    }
 return (
    <a href="#!" onClick={() => handleAdd()} ><i className="fa-solid fa-plus"></i></a>
 )
}

export default Addtodo;