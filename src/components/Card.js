import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render(){
        return(
            <div className="card-container">
                <h1>{this.props.data.name} </h1>
                <ul>
                    <li>{this.props.data.hobbies[0]}</li>
                    <li>{this.props.data.hobbies[1]}</li>
                </ul>
                <h6>{this.props.data.number}</h6>
            </div>
        )
    }
}


export default Card;