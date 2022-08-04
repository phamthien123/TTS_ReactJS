import { useState } from "react";
import  './CSS/todolist.css';
import { toast } from 'react-toastify'; 
// import ShowList from "./Showlist";
const Mycomponent = () => {

  const [ojbTodo, setOjbTodo] = useState({});

  const [newTodo, setNewtodo] = useState("");

  const [Listtodos, setListTodos] = useState([
    {id: 1 , name: "Youtube"},
      ],
  );

      //Thông Báo
  const notify = () => toast.success("Thêm Thành Công");
  const notifyErorr = () => toast.error("Thêm Không Thành Công");
  const notifyRemove = () => toast.success("Xóa Thành Công");
      //Event
  const HandleChange = (event) => {
    setNewtodo(event.target.value);
  };

  const handleAdd = () => {
    if(!newTodo){
      notifyErorr();
      return;
    }
    else {
      notify()
    }
      setListTodos([...Listtodos,
        { id: Math.floor(Math.random() * 10000 + 1), name: newTodo },
      ]);
  };


 let text = ("Bạn có chắc muốn xóa không")
  const handleRemove = (todoId) => {
    if(window.confirm(text)=== true){
      let NewFileid = Listtodos.filter((item) => item.id !== todoId);
      setListTodos(NewFileid);
      notifyRemove();
    }
  };
 const handleOnclickEdit = (event) =>{
        if (isEmtyObj === false && ojbTodo.id === event.id) {
           if (ojbTodo.name.length > 0) {
                let listTodoCopy = [...Listtodos];
                let ojbIndex = listTodoCopy.findIndex(item => item.id === event.id);// findIndex: trả về chỉ số của phần tử đầu tiên trong một mảng đáp ứng chức năng kiểm tra được cung cấp.
                listTodoCopy[ojbIndex].name = ojbTodo.name;
                setListTodos(listTodoCopy);
                setOjbTodo({});
                toast.success("Sửa Thành Công!");
                return;
           } else {
                toast.error("Sửa Không Thành Công!");
                return;
           }
        }
        else {
            setOjbTodo(event);
     }
}

    const handleOnchangeEdit = (event) => {
      let editTodo = {...ojbTodo};
      editTodo.name = event.target.value;
      setOjbTodo(editTodo);
  }

    const isEmtyObj = Object.keys(ojbTodo).length === 0
  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="input-list">
          <input type="text" onChange={(event) => HandleChange(event)} className="list-input"/>
          <a href="#!" onClick={() => handleAdd()} ><i className="fa-solid fa-plus"></i></a>
        </div>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="card mask-custom">
              <div className="card-body p-4 text-white">
                <div className="text-center pt-3 pb-2">
                  <h2 className="my-4" style={{marginRight:80}}>To Do List</h2>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mycomponent;
