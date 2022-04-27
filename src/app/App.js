import logo from './logo.svg';
import './App.css';
import HttpServices from '../services/http-service';
import React, { Component } from 'react';
import Student from '../students/student';


const http = new HttpServices();

class App extends Component{

  
  constructor(props) {
    super(props);
    this.state = {students:[]};

    // Bind functions
    
    this.studentList = this.studentList.bind(this);
    this.studentList();
  }

  componentWillMount() {
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getStudent().then(data => {
      self.setState({students: data.students});
      console.log(data);
    }, err =>{

    });
  }

  studentList = () => {
    const list = this.state.students.map((student) =>
      <div key={student._id}>
        <Student pic = {student.pic}  firstName = {student.firstName} lastName= {student.lastName} 
        email= {student.email} company= {student.company} skill= {student.skill} 
        average = {student.grades.reduce((sum, curr) => sum + Number(curr), 0) /student.grades.length} />
      </div>
    );
    return (list);
  }

  render() {
    return (
      <div className="App">
        <div className='App-main'>
          {this.studentList()}
        </div>
      </div>
    );
  }
  
}

export default App;
