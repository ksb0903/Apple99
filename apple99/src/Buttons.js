import React from 'react';
import {Link} from 'react-router-dom';

function Buttons(){
    return(
        <div id="buttons">
            <button>
                <Link to='/Com1'>당도 측정</Link>
            </button>
            <button>
                <Link to="/Com2">나의 통계</Link>
            </button>
            <button>
                <Link to="/Com3">날씨 정보</Link>
            </button>
            <button>
                <Link to="/Com4">시장 정보</Link>
            </button>
        </div>
    );
}

export default Buttons;