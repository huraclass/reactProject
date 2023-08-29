import './App.css';
import React,{useState} from "react";
import List from "./components/list";
import Form from "./components/form";

export default function  App() {

  const [todoData, setTodoData] = useState([]);
  const [value,setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodoData = {
      id : Date.now(),
      title:value,
      completed : false,
    };

    setTodoData(prevState => [...prevState, newTodoData]);
    setValue("");
  }

  return(
  <div className="container">
    <div className="todoBlock">

      <div className="title">
        <h1>할 일 목록</h1>
      </div>

      <List todoData = {todoData} setTodoData = {setTodoData}/>
      <Form value = {value} setValue = {setValue} handleSubmit = {handleSubmit}/>

    </div>
  </div>
  )
}

