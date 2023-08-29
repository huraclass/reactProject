import React from 'react';
import style from './css/listCss.css'
const List = ({todoData,setTodoData}) => {
    const btnStyle = {
        // color: "#fff",
        // border: "none",
        // padding: "5px 9px",
        // borderRadius: "50%",
        // float: "right",
    }

    const getStyle = (completed) => {
        return{
            // padding: "10px",
            // borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none",
        }
    }

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map(data => {
            if(data.id === id){
                data.complete = !data.complete;
            }
            return data;
        });
        setTodoData(newTodoData);
    }

    const handleClick = (id) =>{
        let filteringTodoData= todoData.filter(data => data.id !== id);
        setTodoData(filteringTodoData);
    }

    return (
        <div>
            {todoData.map((data) => (
                <div style={getStyle(data.complete)} key={data.id} className="textBox">
                    <input
                        type="checkbox"
                        defaultChecked={false}
                        onChange={() => handleCompleteChange(data.id)}
                    />
                    {data.title}
                    <button
                        style={btnStyle}
                        className="deleteButton"
                        onClick={() => handleClick(data.id)}
                    >
                        x
                    </button>
                </div>
            ))}
        </div>
    );
};

export default List;