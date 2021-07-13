import React from 'react';
import axios from "axios";
import {ReactComponent as Normal} from "./일반사과.svg"

// 지금까지 측정한 당도를 보는 컴포넌트

class Com_2 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            data_array: []
        }
    }

    getbrixs = async() =>{
        const data = await axios.get(
            "/report?id=admin"
        );
        this.setState({data_array:data.data.report})
    }

    componentDidMount(){
        this.getbrixs()
    }

    getDetail(index, e){
        e.preventDefault()
        let gettedid = document.getElementsByClassName("detaildata")[index]
        gettedid.style.width = "300px"
        gettedid.style.height = "fit-content"
        gettedid.style.color = "black"
        gettedid.style.border = "1px solid black"
    }

    hideDetail(index, e){
        e.preventDefault()
        let gettedid = document.getElementsByClassName("detaildata")[index]
        gettedid.style.width = "0px"
        gettedid.style.height = "0px"
        gettedid.style.color = "whitesmoke"
        gettedid.style.border = "0px"
    }

    getGrade(data){
        if(data.brix >= 14)
            return <h2>등급: 특등</h2>
        else if(data.brix >=12 && data.brix < 14)
            return <h2>등급: 상</h2>
        else return <h2>등급: 일반</h2>
    }

    render(){
        return(
            <div id="com2_div">
            {
                this.state.data_array.map((data, index)=>(
                    <div key={index} id="showdatadiv">
                        <button className="showdata" onClick={this.getDetail.bind(this, index)}>
                            <Normal></Normal>
                            <h1>{data.brix}</h1>
                        </button>
                        <button className="detaildata" onClick={this.hideDetail.bind(this, index)}>
                            <div>
                                <h2>측정 날짜: {data.date}</h2>
                                {this.getGrade(data)}
                            </div>    
                        </button>
                    </div>
                ))
                }       
            </div>
        );
    }

}

export default Com_2;