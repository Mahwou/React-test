import React, {Component} from 'react';
import './student.css';

class Student extends Component {
    render() {
        return (
            <div className='card'>
                <img className='card-img-top' src= {this.props.pic} alt='Student Image'></img>
                <div className='card-block'>
                    <p className='card-text'><b>{this.props.firstName} {this.props.lastName}</b></p>
                    <p className='card-text'>Email: {this.props.email}</p>
                    <p className='card-text'>Company: {this.props.company}</p>
                    <p className='card-text'>skill: {this.props.skill}</p>
                    <p className='card-text'>Average: {this.props.average}</p>
                </div>
                
            </div>
        );
    }
}

export default Student;