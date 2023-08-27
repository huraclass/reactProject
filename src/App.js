import './App.css';
import React,{Component} from "react";

export default class App extends Component {
  state = {
    todoData : [
      {
        id:"1",
        title:"공부하기",
        complete : false,
      },
      {
        id:"2",
        title:"청소하기",
        complete : false,
      }
    ],
    value:"",

  }

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    float: "right",
  }
  getStyle = (completed) => {
    return{
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      // textDecoration:'line-through'
      textDecoration: completed ? "line-through" : "none",

    }
  }


  handleClick = (id) =>{
    let filteringTodoData= this.state.todoData.filter(data => data.id !== id);
    this.setState({todoData: filteringTodoData})
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const newTodoData = {
      id : Date.now(),
      title:this.state.value,
      completed : false,
    };
    // const arr = [...this.state.todoData,newTodoData];
    // console.log('arr',arr);
    // this.state.todoData.push(newTodoData);
    // this.setState({todoData : [...this.state.todoData]});
    this.setState({todoData: [...this.state.todoData, newTodoData],value : ""});
    // this.setState({todoData : arr});
  }
  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map(data => {
      if(data.id === id){
        data.complete = !data.complete;
      }
      return data;
    });
    this.setState({todoData: newTodoData});
  }

    render(){
      return(
      <div className="container">
        <div className="todoBlock">

          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map((data) => (
              <div style={this.getStyle(data.complete)} key={data.id}>
                <input type="checkbox" defaultChecked={false}
                onChange={() => this.handleCompleteChange(data.id)}/>
                {data.title}
                <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
              </div>
          ))}

          <form style={{display:'flex'}} onSubmit={this.handleSubmit}>
            <input type="text" name="value" style={{flex:'10',padding:'5px'}}
            placeholder="해야 할일을 입력하세요" value={this.state.value}
            onChange={this.handleChange}/>
            <input type='submit' value="enter" className="btn" style={{flex:'1'}} />
          </form>

        </div>
      </div>
    );
  }
}

// const App = () => {
//   const btnStyle = {
//     color: "#fff",
//     border: "none",
//     padding: "5px 9px",
//     borderRadius: "50%",
//     float: "right",
//   };
//   const getStyle = () => {
//     return{
//       padding: "10px",
//       borderBottom: "1px #ccc dotted",
//       textDecoration:'none'
//     }
//   };
//
//   const todoData = [
//     {
//       id:"1",
//       title:"공부하기",
//       complete : false,
//     },
//     {
//       id:"2",
//       title:"청소하기",
//       complete : false,
//     }
//   ];
//
//   return(
//       <div className="container">
//         <div className="todoBlock">
//           <div className="title">
//             <h1>할 일 목록</h1>
//           </div>
//
//           <div style={getStyle()}>
//             <input type="checkbox" defaultChecked={false}/>
//             공부하기
//             <button style={btnStyle}>x</button>
//           </div>
//
//           {
//             this.todoData.map((data) => {
//
//             });
//           }
//
//         </div>
//       </div>
//   );
// };


// export default App;