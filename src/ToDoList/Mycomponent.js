import { React,useState } from "react";
import  './CSS/todolist.css';
import { toast } from 'react-toastify'; 
//Components
import ShowList from "./Showlist";
import Addtodo from "./Addtodo";
import InputValue from "./InputValue";
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
                let ojbIndex = listTodoCopy.findIndex(item => item.id === event.id);
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
    <div>
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="input-list">
          <InputValue
          HandleChangeValue={HandleChange}
          />
          <Addtodo
          handleAddValue = {handleAdd}
          />
        </div>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="card mask-custom">
              <div className="card-body p-4 text-white">
                <div className="text-center pt-3 pb-2">
                  <h2 className="my-4" style={{marginRight:80}}>To Do List</h2>
                </div>
               <ShowList
               //hiển thị
                ShowlistTodo = {Listtodos}
                //Sửa todo
                newJobs = {ojbTodo}
                newTodoValue = {newTodo}
                handleOnchangeEditValue ={handleOnchangeEdit}
                handleOnclickEditValue ={handleOnclickEdit}
                //Xóa todo
                handleRemoveValue ={handleRemove}
               />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};
export default Mycomponent;
