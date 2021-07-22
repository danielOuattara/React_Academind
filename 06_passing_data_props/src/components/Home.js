import React from 'react';
import PropTypes from "prop-types";
export class Home extends React.Component {
    render() {
        console.log(this.props);
        let text = "A something text";
        return (
            <div>
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
}

