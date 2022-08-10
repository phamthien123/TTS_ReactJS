const ShowList =(props) =>{
    
    const Listtodos = props.ShowlistTodo;
    const ojbTodo = props.newJobs;
    const newTodo = props.newTodoValue;
    const handleRemove = (id) =>{
        props.handleRemoveValue(id);
    }
    const handleOnchangeEdit = (event) =>{
        props.handleOnchangeEditValue(event);
    }
    const handleOnclickEdit = (id) =>{
        props.handleOnclickEditValue(id);
    }
    const isEmtyObj = (Object.keys(ojbTodo).length === 0)

    return(
        <table className="table text-white mb-0" style={{marginLeft:15}}>
        <tbody>
            <th>
              <span className="ms-2">
                <h2>ID</h2>
              </span>
            </th>
            <td className="align-middle">
              <span>
                <h2>Task List</h2>
              </span>
            </td>
            
          {Listtodos.map((todo, index) => {
            return (
              <tr className="fw-normal">
                <th>
                  <span className="ms-2">{index + 1}</span>
                </th>
                <td className="align-middle">{todo.name}</td>
    
                <td className="align-middle">
                <a  href="#!" className="todo-child" key = {todo.id}>
                      {
                          isEmtyObj === true ? 
                          <td className="align-middle" value={newTodo}></td> :
                          <>
                              {
                                  ojbTodo.id === todo.id ?
                                  <span><input value={ojbTodo.name} onChange={(event) => handleOnchangeEdit(event)} size={10} className="input-btn"></input></span>:
                                  <span></span>
                              }
                          </>
                      }
                      <button onClick={() => handleOnclickEdit(todo)} className="btnedit">
                          {isEmtyObj === false && ojbTodo.id === todo.id  ? 'Save' : 'Edit'}
                      </button>
              </a>
              <button onClick={() => handleRemove(todo.id)} className="btnremove">Xóa</button>
            </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  
}
export default ShowList;