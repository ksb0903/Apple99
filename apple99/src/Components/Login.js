import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {

    render() {
        return (
            <div id="login_div">
                <div className="input_div">
                    <h3>아이디:&nbsp;&nbsp;&nbsp;&nbsp;</h3><input type="text" className="input" />
                </div>
                <div className="input_div">
                    <h3>비밀번호:&nbsp;</h3><input type="password" className="input" />
                </div>
                <div id="login_button_div">
                    <button className="login_button">로그인</button>
                    <Link to='/Signup'><button className="login_button">회원가입</button></Link>
                </div>
            </div>
        );
    }
}

export default Login;