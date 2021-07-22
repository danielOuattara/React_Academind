import React from 'react';

export class Home extends React.Component {
    render() {
        let content = true;
        if (true) {
            content = <p>Hello World !</p>
        }

        return (
            <div>
                <p>I am a new Component</p>
                { 2 + 2}
                {content}
                { 5 === 2 ? "Yes":"No"}
            </div>
        );
    }
}