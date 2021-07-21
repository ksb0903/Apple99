import React from 'react';
import { Link } from 'react-router-dom';

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <div id="login_zone">
                    {this.props.is_logined ?
                        <Link to='/'><button className="loginzone_button" onClick={function () {
                            this.props.logout()
                        }.bind(this)}>로그아웃</button></Link> :
                        <Link to='/Login'><button className="loginzone_button">로그인</button></Link>
                    }
                </div>

                <div id="buttons">
                    <button>
                        {this.props.is_logined ? <Link to='/Com1'>당도 측정</Link> : <Link to='/ComX'>당도 측정</Link>}
                    </button>
                    <button>
                        {this.props.is_logined ? <Link to='/Com2'>나의 통계</Link> : <Link to='/ComX'>나의 통계</Link>}
                    </button>
                    <button>
                        {this.props.is_logined ? <Link to='/Com3'>날씨 정보</Link> : <Link to='/ComX'>날씨 정보</Link>}
                    </button>
                    <button>
                        {this.props.is_logined ? <Link to='/Com4'>시장 정보</Link> : <Link to='/ComX'>시장 정보</Link>}
                    </button>
                </div>
            </div>
        );
    }
}

export default Buttons;