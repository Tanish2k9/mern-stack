import {Link} from "react-router-dom";
import "./home.css"
const Home = () => {
  return (
    <div className="home">
      <h1>Task Manager</h1>
      <h3>here you can create your task </h3>
      <h3>and make your life systematic</h3>
      <button><Link to="/todolist">Check Your Task</Link></button>
    </div>
  )
}

export default Home