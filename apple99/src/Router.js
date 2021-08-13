import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import Com0 from './Components/Com_0'
import Com1 from './Components/Com_1'
import Com2 from './Components/Com_2'
import Com3 from './Components/Com_3'
import Com4 from './Components/Com_4'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Buttons from './Components/Buttons'

class Router extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            is_logined: false
        }
    }

    componentDidMount(){
        if(window.sessionStorage.getItem("AC_KEY") == null){
            this.setState({is_logined: false})
        }
        else{
            this.setState({is_logined: true})
        }
    }

    componentWillUnmount(){
        window.sessionStorage.clear()
    }

    logout() {
        this.setState({ is_logined: false })
        window.sessionStorage.clear()
    }

    login = async(id, pw)=>{
        const config = {
            headers: {"content-type": "application.json", "Authorization": "Bearer FirstLogin"}
        }
        
        var loginData = {
            id: id,
            password: pw
        }
        
        try{
            const jwt = await axios.post(
                "/signin", loginData, config
            )
            window.sessionStorage.setItem("AC_KEY", jwt.data.key.ACCESSKEY)
            window.sessionStorage.setItem("RF_KEY", jwt.data.key.REFRESHKEY)
            window.sessionStorage.setItem("ID", id)
            this.setState({is_logined:true})
            window.history.back()
        }catch(error){
            alert("로그인 실패")
        }
    }

    render() {
        return (
            <div id="component_div">
                <BrowserRouter>
                    <Buttons is_logined={this.state.is_logined} logout={this.logout.bind(this)}/>
                    <Route path="/" component={Com0} exact />
                    <Route path="/Com1" render={()=><Com1 is_logined={this.state.is_logined}/>} />
                    <Route path="/Com2" render={()=><Com2 is_logined={this.state.is_logined}/>}/>
                    <Route path="/Com3" render={()=><Com3 is_logined={this.state.is_logined}/>}/>
                    <Route path="/Com4" render={()=><Com4 is_logined={this.state.is_logined}/>}/>
                    <Route path="/Login" render={()=><Login login={this.login.bind(this)}/>}/>
                    <Route path="/Signup" component={Signup}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;