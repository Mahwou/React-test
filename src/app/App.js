import './App.css';
import HttpServices from '../services/http-service';
import React, { Component } from 'react';
import Student from '../students/student';


const http = new HttpServices();

class App extends Component {

  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = { students: [], searchTerm:""}

    // Bind functions

    this.studentList = this.studentList.bind(this);
    this.studentList();
  }

  componentWillMount() {
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }

  loadData = (searchValue) => {
    var self = this;
    http.getStudent().then(data => {
      self.setState({ 
        students: data.students, 
        searchTerm: searchValue
      });
      console.log(data);
    }, err => {

    });
  }

  studentList = () => {
    var data = [];
    var searchInput = this.state.searchTerm;
    // console.log(searchInput);
    const list = this.state.students.filter((student) => {
      if(this.state.searchTerm !== ""){
        data = student;
      }
      else{
        data = student.firstName.toLowerCase().includes(searchInput);
      }
      return data;
    }).map((student) => {
      return <div key={student.id}>
        <Student pic={student.pic} firstName={student.firstName} lastName={student.lastName}
          email={student.email} company={student.company} skill={student.skill}
          average={student.grades.reduce((sum, curr) => sum + Number(curr), 0) / student.grades.length}
          grades = {student.grades}
          index = {student.grades.indexOf()} />
      </div>
    });
    return (list);
  }

  render() {
    return (
      <div className="App">
        <div >
          <div className='App-main'>
            <div className='App-Card'>
            <input className='search' type="text" placeholder="Search by name" onChange={(e)=>this.loadData(e.target.value)} />
            {this.studentList()}
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default App;
