import React from 'react';

export default class User extends React.Component {

    onNavigateToHome() {
        this.props.history.push("/home")
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h3>The User Page</h3>
                        {/* <p>User ID :{this.props.match.params}</p> */}
                        {console.log(this.props.match.params)}
                        <button 
                            className="btn btn-primary" 
                            onClick={this.onNavigateToHome.bind(this)}
                        > Go to Home</button> 
                    </div>
                </div>
            </div>
        )
    }
}
