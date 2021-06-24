import React from 'react';
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <div id = "header_div">
                <div  id = "title">
                    <h1><a href="http://172.30.1.38:3000">title</a></h1>
                </div>
            </div>
        );
    }
}

export default Header;