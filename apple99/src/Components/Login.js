import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            pw: ""
        }
    }

    onChangeID(e){
        this.setState({id: e.target.value})
        e.preventDefault()
    }

    onChangePW(e){
        this.setState({pw: e.target.value})
        e.preventDefault()
    }
    
    render() {
        return (
            <div id="login_div">
                <h2>로그인</h2>
                <div className="input_div">
                    <div className="text_div"><h3>아이디:</h3></div>
                    <div className="box_div"><input type="text" className="input" onChange={this.onChangeID.bind(this)}/></div>
                </div>
                <div className="input_div">
                    <div className="text_div"><h3>비밀번호:</h3></div>
                    <div className="box_div"><input type="password" className="input" onChange={this.onChangePW.bind(this)}/></div>
                </div>
                <div className="login_button_div">
                    <button className="login_button" onClick={function(){
                        this.props.login(this.state.id, this.state.pw)
                    }.bind(this)}>로그인</button>
                    <Link to='/Signup'><button className="login_button" >회원가입</button></Link>
                </div>
            </div>
        );
    }
}

export default Login;