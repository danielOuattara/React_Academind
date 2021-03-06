import React from 'react';
import PropTypes from "prop-types";
export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: "ChangedLink"
        };

        setTimeout( () => {
            this.setState({ status: 1 }) }, 3000)
        }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
        console.log(this.age)
    }

    render() {
        return (
            <div>
                <p>I am a new component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age} y.o</p>
                <p> Status: { this.state.status}</p>
                <hr />

                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older</button>
                <button className="btn btn-dark" onClick={()=> this.onMakeOlder()}>Make me older</button>
                <hr />

                <button className="btn btn-primary" onClick={this.props.greet} >Greet</button>
            </div>
        );
    }
}

Home.protoType = { 
    name: PropTypes.string,
    initialAge: PropTypes.number, 
    greet: PropTypes.func,
}

