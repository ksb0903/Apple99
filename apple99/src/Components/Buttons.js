import React from 'react';

class Buttons extends React.Component{

    Changenum(num){
        this.props.changeComponent(num);
    }

    render(){
        return(
            <div id = "buttons">
                    <button onClick={function(e){
                        e.preventDefault();
                        this.Changenum(1);
                    }.bind(this)
                    }>
                        당도 측정
                    </button>

                    <button onClick={function(e){
                        e.preventDefault();
                        this.Changenum(2);
                    }.bind(this)
                    }>
                        나의 통계
                    </button>

                    <button onClick={function(e){
                        e.preventDefault();
                        this.Changenum(3);
                    }.bind(this)
                    }>
                        날씨 정보
                    </button>

                    {/*<button onClick={function(e){
                        e.preventDefault();
                        this.Changenum(4);
                    }.bind(this)
                    }>
                        시장 정보
                </button>*/}
                </div>
        );
    }

}

export default Buttons;