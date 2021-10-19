import React from 'react';
import PropTypes from "prop-types";
export class Home extends React.Component {
    render() {
        console.log(this.props);
        console.log(this.props.children);
        let text = "A something text";
        return (
            <div>
                <h2>{this.props.admin}</h2>
                <h2>{this.props.spouse}</h2>
                <p>I am a new component</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}, your age is {this.props.age} y.o</p>
                <p> User Object Name: {this.props.user.name}</p>
                <div>
                     <h4>Hobbies</h4>
                     <ul>
                        {this.props.user.hobbies.map( (hobby, i) => <li key={i}>{ hobby }</li> )}
                     </ul>
                </div>
                <hr />
                {this.props.children}
            </div>
        );
    }
};

Home.protoType = {
    name: PropTypes.string,
    age: PropTypes.number, 
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};

