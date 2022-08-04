import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';



export default function App() {
    return (
      <div>
        <div className="app-container">
            <Header/>
      </div> 
      <div className="app-container">
          <Outlet/>
    </div>
      <ToastContainer />
      </div>   
    
    )
}