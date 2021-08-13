import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Buttons extends React.Component {
    render() {
        return (
            <div id="menubar">
                <div id="login_zone">
                    {this.props.is_logined ?
                        <div>
                            <h3>{window.sessionStorage.getItem("ID")}님<br/>환영합니다</h3>
                            <Link to='/'><button className="loginzone_button" onClick={function () {
                                this.props.logout()
                            }.bind(this)}>로그아웃</button></Link>
                        </div> :
                        <div>
                            <h3>로그인<br/>해주세요</h3>
                            <Link to='/Login'><button className="loginzone_button">로그인</button></Link>
                        </div>
                    }
                </div>

                <div id="buttons">
                    <button>
                        <NavLink to='/Com1' activeStyle={{ color: 'rgb(159, 137, 161)', fontWeight: '520' }}>당도 측정</NavLink>
                    </button>
                    <button>
                        <NavLink to='/Com2' activeStyle={{ color: 'rgb(159, 137, 161)', fontWeight: '520' }}>나의 통계</NavLink>
                    </button>
                    <button>
                        <NavLink to='/Com3' activeStyle={{ color: 'rgb(159, 137, 161)', fontWeight: '520' }}>날씨 정보</NavLink>
                    </button>
                    <button>
                        <NavLink to='/Com4' activeStyle={{ color: 'rgb(159, 137, 161)', fontWeight: '520' }}>시장 정보</NavLink>
                    </button>
                </div>
            </div>
        );
    }
}

export default Buttons;