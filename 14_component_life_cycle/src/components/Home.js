import React from 'react';
import PropTypes from "prop-types";
export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };

        setTimeout( () => {
            this.setState({
                status: 1
            })
        }, 3000)
    }

    //------------------------------------------------------------

    componentWillMount() {
        return alert("Component will mount !");
    }

    componentDidMount() {
        return alert("Component did mount !");
    }

    componentWillReceiveProps(nextProps) {
        return alert("Component will receive props !", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        alert(" Should component update !", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        alert("Component will update !", nextProps, nextState);
        // if(nextState.status === 1 ) {
        //   return true
        // }
    }

    componentDidUpdate(prevProps, prevState) {
        alert("Component did update !", prevProps, prevState);
    }

    componentWillUnmount() {
        alert("Component Will unmount !")
    }


    // -----------------------------------------------------------

    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
    }

    onChangeLink() {
        this.props.onChangeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({ homeLink: event.target.value })

    }

    render() {
        return (
            <div>
                <p>I am a new component</p>
                <p>Your name is { this.props.name }, your age is {this.state.age} y.o</p>
                <p> Status: { this.state.status }</p>
                <hr />
                <button className="btn btn-primary" onClick={ this.onMakeOlder.bind(this) }>Make me older</button>
                <button className="btn btn-dark" onClick={ ()=> this.onMakeOlder() }>Make me older</button>
                <hr />
                <button className="btn btn-primary" onClick={ this.props.greet } >Greet</button>
                <hr />
                <input type="text" value={ this.state.homeLink } 
                       onChange={ (event) => this.onHandleChange(event) } />
                <button onClick={ this.onChangeLink.bind(this) } className="btn btn-primary">Change Header Link</button>

            </div>
        );
    }
}

Home.protoType = {
    name: PropTypes.string,
    initialAge: PropTypes.number, 
    greet: PropTypes.func,
    initialLinkName: PropTypes.string,
}

