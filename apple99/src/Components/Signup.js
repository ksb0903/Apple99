import React from 'react';

class Signup extends React.Component{
    render(){
        return(
            <div id="signup_div">
                <div className="input_div">
                    <h3>아이디:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3><input type="text" className="input" />
                </div>
                <div className="input_div">
                    <h3>비밀번호:&nbsp;&nbsp;&nbsp;&nbsp;</h3><input type="password" className="input" />
                </div>
                <div className="input_div">
                    <h4>비밀번호 확인:&nbsp;</h4><input type="password" className="input" />
                </div>
                <div id="login_button_div">
                    <button className="login_button">회원가입</button>
                </div>
            </div>
        );
    }
}

export default Signup;