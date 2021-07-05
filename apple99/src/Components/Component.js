import React from 'react';
import './Component.css';
import Comp0 from './Com_0';
import Comp1 from './Com_1';
import Comp2 from './Com_2';
import Buttons from './Buttons';

class Component extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            com_num: 0
        }
    }

    changeComponent(num){
        this.setState({com_num:num})
    }

    getComponent(num){
        var returncomp;
        if(num === 0){
            returncomp = <Comp0></Comp0>;
        }
        else if(num === 1){
            returncomp = <Comp1></Comp1>;
        }
        else if(num === 2){
            returncomp = <Comp2></Comp2>;
        }
        return returncomp;
    }

    render(){
        return(
            <div id = "component_div">
                <Buttons changeComponent = {this.changeComponent.bind(this)}></Buttons>
                <div id = "component">
                    {this.getComponent(this.state.com_num)}
                </div>
            </div>
        );
    }

}

export default Component;