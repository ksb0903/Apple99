import React from 'react';
import axios from 'axios';
import {ReactComponent as Sun} from "./해.svg"
import {ReactComponent as Cloud} from "./구름.svg"
import {ReactComponent as Rain} from "./비구름.svg"
import {ReactComponent as Snow} from "./눈.svg"
import {ReactComponent as Thunder} from "./구름+번개.svg"

class Com_3 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            nowWeather: [],
            currentWeather: [],
            todayWeather: [],
            weekWeather: [],
        }
    }

    getNowWeather = async() =>{
        const nowWeather = await axios.get(
            "/nowWeather?id=admin"
        );
        this.setState({nowWeather: nowWeather.data})
        this.setState({currentWeather: nowWeather.data.currentWeather})
    }

    getWeekWeather = async() =>{
        const weekWeather = await axios.get(
            "/weekWeather?id=admin"
        );
        this.setState({todayWeather: weekWeather.data.weather.currentWeather})
        this.setState({weekWeather: weekWeather.data.weather.futureWeather})
    }

    componentDidMount(){
        this.getNowWeather()
        this.getWeekWeather()
    }

    getNowWeatherSVG(category){
        if(category === 1)
            return <Sun></Sun>
        else if(category === 2)
            return <Cloud></Cloud>
        else if(category === 3)
            return <Rain></Rain> 
        else if(category === 4)
            return <Snow></Snow>
    }

    getWeekWeatherSVG(category){
        if(category === 1)
            return <Sun></Sun>
        else if(category === 2)
            return <Cloud></Cloud>
        else if(category === 3)
            return <Rain></Rain> 
        else if(category === 4)
            return <Snow></Snow>
        else if(category === 5)
            return <Thunder></Thunder>
    }

    render(){
        return(
            <div id = "com3_div">
                <h1>{this.state.nowWeather.location}</h1>
                <div id = "nowWeather_div">
                    <h2>현재 날씨</h2>
                    <h3>{this.state.currentWeather.Date} &nbsp; {this.state.currentWeather.DayOfWeek} &nbsp; {this.getNowWeatherSVG(this.state.currentWeather.Category)}</h3>
                    <h3>기온: {this.state.currentWeather.Temp} &nbsp; 강수 확률: {this.state.nowWeather.rainPercent}</h3>
                </div>
                
                <div id = "todayWeather_div">
                    <h2>오늘 날씨</h2>
                    {
                        this.state.todayWeather.map((today)=>(
                            <div key={today.Hour}>
                                <h3>{today.Hour}시 &nbsp;&nbsp; {this.getWeekWeatherSVG(today.Category)}  &nbsp; {parseFloat(today.Temp).toFixed(2)}℃</h3>
                            </div>
                        ))
                    }

                </div>

                <div id = "weekWeather_div">
                    <h2>주간 날씨</h2>
                    {
                        this.state.weekWeather.map((week)=>(
                            <div key={week.Date}>
                                <h3>{week.Date} &nbsp; {week.DayOfWeek}요일 {this.getWeekWeatherSVG(week.Category)}</h3>
                                <h3>최고 기온: {parseFloat(week.MaxTemp).toFixed(2)}℃ &nbsp;&nbsp;최저 기온: {parseFloat(week.MinTemp).toFixed(2)}℃</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Com_3;