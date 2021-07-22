import React from 'react';
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.age = props.age
    }

    onMakeOlder() {
        this.age++;
        console.log(this.age)  
    }
    render() {
        return (
            <div>
                <p>I am a new component</p>
                <p>Your name is {this.props.name}, your age is {this.age} y.o</p>
                <hr />
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older</button>
                <button className="btn btn-dark" onClick={()=> this.onMakeOlder()}>Make me older</button>
            </div>
        );
    }
}

Home.protoType = {
    name: PropTypes.string,
    age: PropTypes.number, 
}

