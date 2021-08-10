import React from 'react';

class Signup extends React.Component{
    render(){
        return(
            <div id="signup_div">
                <h2>회원가입</h2>
                <div className="input_div">
                    <div className="text_div"><h3>아이디:</h3></div>
                    <div className="box_div"><input type="text" className="input" /></div>
                </div>
                <div className="input_div">
                    <div className="text_div"><h3>비밀번호:</h3></div>
                    <div className="box_div"><input type="password" className="input" /></div>
                </div>
                <div className="input_div">
                    <div className="text_div"><h3>비밀번호 확인:</h3></div>
                    <div className="box_div"><input type="password" className="input" /></div>
                </div>
                <div className="login_button_div">
                    <button className="login_button">회원가입</button>
                </div>
            </div>
        );
    }
}

export default Signup;