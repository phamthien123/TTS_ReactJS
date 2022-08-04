import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import User from './components/User';
import Home from './components/Home';
import Mycalculator from './Calculater/Mycalculator';
import Mycomponent from './ToDoList/Mycomponent';
import DEmo from './DemoDislayList/demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
        <Route path="todoList" element={<Mycomponent />} />
        <Route path="users" element={<User />} />
        <Route path="calcultors" element={<Mycalculator />} />
        <Route path="demos" element={<DEmo />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
