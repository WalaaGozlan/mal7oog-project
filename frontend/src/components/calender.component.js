import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NoteList from "./NoteList";
 
//declare a component that holds arrows of tasks 
const Task = props => (
  <tr>
    <td>{props.task.material}</td>
    <td>{props.task.description}</td>
    <td>{props.task.duration}</td>
    <td>
      <Link className="btn btn-warning" to={"/edit/"+props.task._id}>edit</Link> | <a href="/calender" className="btn btn-danger" onClick={() => { props.deleteTask(props.task._id) }}>delete</a>
    </td>
  </tr>
)
export default class calender extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this)
    this.state = {
      tasks: [],
      
     };
  }
  componentDidMount() {
    axios.get('http://localhost:1300/api/materials/')
      .then(response => {
        this.setState({
          tasks: response.data,
          
        })
        })
      .catch((error) => {
         console.log(error);
        })
  }

  deleteTask(id) {
    axios.delete('http://localhost:1300/api/materials/'+id)
      .then(response => { console.log(response.data)});

      //use filter to render elements except the deleted item 
    this.setState({
      tasks: this.state.tasks.filter(el => el._id !== id)
    })
  }

  //use this function to render every added task 
  taskList() {
    return this.state.tasks.map(currenttask => {
      console.log(currenttask._id)
      return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>
    })
  }
 
  render() {
    
    return (
      
      <div>
        <div>
       
          <h3 className="deep-purple-text" style={{fontFamily:"Courier"}}>Daily Calender</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
            <th scope="col" className="deep-purple-text h5" style={{fontFamily:"Courier"}}>Material</th>
              <th scope="col" className="deep-purple-text h5" style={{fontFamily:"Courier"}}>Description</th>
              <th scope="col" className="deep-purple-text h5" style={{fontFamily:"Courier"}}>Duration</th>
              <th scope="col" className="deep-purple-text h5" style={{fontFamily:"Courier"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.taskList() }
          </tbody>
        </table>
        </div>

        <div className = "note-app">
      <NoteList/>
    </div>
    </div>
  )
};
}