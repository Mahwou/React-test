import React, { Component } from 'react';
import './student.css';

class Student extends Component {
    render() {
        return (
            <div className='container card'>

                <div className='card-block'>
                    <div className='img block'>
                    <img className='card-img-top' src={this.props.pic} alt='Student Image' height={100} width={100}></img>
                    </div>
                    
                    <div className='block text'>
                        <p className='card-text name'><b>{this.props.firstName} {this.props.lastName}</b></p>
                        <ul className='list-style'>
                            <li>Email: {this.props.email}</li>
                            <li>Company: {this.props.company}</li>
                            <li>skill: {this.props.skill}</li>
                            <li>Average: {this.props.average}%</li>
                        </ul>
                    </div>


                </div>

            </div>
        );
    }
}

export default Student;