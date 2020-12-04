import React, { Component } from 'react';
import axios from 'axios';
export default class EditTask extends Component {
  constructor(props) {
    super(props);
    this.onChangeMaterial = this.onChangeMaterial.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      material: '',
      description: '',
      duration: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:1300/api/materials/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          material: response.data.material,
          description: response.data.description,
          duration: response.data.duration
          })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  onChangeMaterial(e) {
    this.setState({
      material: e.target.value
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  } 
  onSubmit(e) {
    e.preventDefault();
    const task = {
      material: this.state.material,
      description: this.state.description,
      duration: this.state.duration,
    }
     console.log(this.props)
     // console.log(task);
    axios.post('http://localhost:1300/api/materials/update/'+this.props.match.params.id, task)
   // console.log(this.props.params.id)
      .then( res => console.log(res.data))
  .catch(function (error) {
    console.log(error);
  });
  //go back to calender after editing 
window.location = "/calender"
  }
  render() {
    return (
    <div>
      <h3 className="font-weight-bold deep-purple-text" style={{fontFamily:"Courier"}}>Edit Your Task</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label  className="deep-purple-text" style={{fontFamily:"Courier"}}>Material: </label>
          <input style={{fontFamily:"Courier"}} placeholder="choose subject"
              type="text"
              required
              className="form-control"
              value={this.state.material}
              onChange={this.onChangeMaterial}
              />
        </div>
        <div className="form-group">
          <label  className="deep-purple-text" style={{fontFamily:"Courier"}}>Description: </label>
          <input style={{fontFamily:"Courier"}} placeholder="your plan to this material"
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label  className="deep-purple-text" style={{fontFamily:"Courier"}}>Duration (in minutes): </label>
          <input style={{fontFamily:"Courier"}} placeholder="choose your time wisely"
              type="text"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="EditTask" className="btn btn-primary btn btn-outline-#4a148c purple darken-4" />
        </div>
      </form>
    </div>
    )
  }
}