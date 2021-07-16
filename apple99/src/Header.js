import React from 'react';
import './Header.css';
import {ReactComponent as Logo} from './빨간 로고.svg';

class Header extends React.Component{
    render(){
        return(
            <div id = "header_div">
                <div id = "header_wrapper">
                    <Logo className="header_content" id="logo"></Logo>
                    <h1 className="header_content"><a href="http://localhost:3000">사과 쪼는 멧비둘기</a></h1>
                </div>
            </div>
        );
    }
}

export default Header;