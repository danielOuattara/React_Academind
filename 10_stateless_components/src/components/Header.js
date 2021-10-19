import React from "react";

// component whithout state : the best is stateless component
export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="/" style={{fontSize:"24px"}}>{ props.homeLink }</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};



// import React from 'react'

// export default function Header(props) {
//     return (
//         <nav className="navbar navbar-default">
//             <div className="container">
//                 <div className="navbar-header">
//                     <ul className="nav navbar-nav">
//                         <li>
//                             <a href="/">{ props.homeLink }</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }
