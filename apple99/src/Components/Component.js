import React from 'react';
import './Component.css';
import Comp0 from './Com_0';
import Comp1 from './Com_1';
import Comp2 from './Com_2';
import Comp3 from './Com_3';
import Buttons from './Buttons';

class Component extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            component_number: 0
        }
    }

    changeComponent(num){
        this.setState({component_number:num})
    }

    getComponent(num){
        if(num === 0){
            return <Comp0></Comp0>;
        }
        else if(num === 1){
            return <Comp1></Comp1>;
        }
        else if(num === 2){
            return <Comp2></Comp2>;
        } 
        else if(num === 3){
            return <Comp3></Comp3>;
        }
    }

    render(){
        return(
            <div id = "component_div">
                <Buttons changeComponent = {this.changeComponent.bind(this)}></Buttons>
                <div id = "component">
                    {this.getComponent(this.state.component_number)}
                </div>
            </div>
        );
    }

}

export default Component;