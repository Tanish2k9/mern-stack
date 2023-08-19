
// import TodoList from './component/todolist/TodoList';

import Navbar from "./component/navbar/Navbar";
import useAuthContext from "./hooks/useAuthContext";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Signup from "./page/signup/signup";
import TodoList from "./page/taskManager/TodoList";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={user?<Navigate to="/todolist" />:<Login/>} />
        <Route path="/signup" element={user?<Navigate to="/todolist" />:<Signup/>} />
        <Route path="/todolist" element = {!user?<Navigate to ="/login"/>:<TodoList/>} />
      </Routes>
    </div>
  );
}

export default App;
