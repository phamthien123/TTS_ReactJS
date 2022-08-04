import { useState } from "react";
import  './demo.css';
import { toast } from 'react-toastify'; 
import DemoChild from "./Demochild";
// import ShowList from "./Showlist";
const DEmo = () => {



  const [newTodo, setNewtodo] = useState("");

  const [Listtodos, setListTodos] = useState([
    {   id: 1,value: "Youtube1"},
    {   id: 2,value: "Youtube2"},
    {   id: 3,value: "Youtube3"},
    {   id: 1,value: "Youtube4"},
      ],
  );


  const HandleChange = (event) => {
    setNewtodo(event.target.value);
  };

  const handleAdd = () => {
      setListTodos([...Listtodos,
        { id: Math.floor(Math.random() * 10000 + 1), name: newTodo },
      ]);
  };

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
                  <h2 className="my-4">To Do List</h2>
                </div>
               <DemoChild
               child = {Listtodos}
               />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DEmo;
