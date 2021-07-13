import React from 'react';
import axios from 'axios';

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

    render(){
        return(
            <div id = "com3_div">
                <h1>{this.state.nowWeather.location}</h1>
                <div id = "nowWeather_div">
                    <h2>현재 날씨</h2>
                    <h3>{this.state.currentWeather.Date} &nbsp; {this.state.currentWeather.DayOfWeek}</h3>
                    <h3>기온: {this.state.currentWeather.Temp} &nbsp; 강수 확률: {this.state.nowWeather.rainPercent}</h3>
                </div>
                
                <div id = "todayWeather_div">
                    <h2>오늘 날씨</h2>
                    {
                        this.state.todayWeather.map((today)=>(
                            <div key={today.Hour}>
                                <h3>{today.Hour}시 &nbsp;&nbsp; {parseFloat(today.Temp).toFixed(2)}℃</h3>
                            </div>
                        ))
                    }

                </div>

                <div id = "weekWeather_div">
                    <h2>주간 날씨</h2>
                    {
                        this.state.weekWeather.map((week)=>(
                            <div key={week.Date}>
                                <h3>{week.Date} &nbsp; {week.DayOfWeek}요일</h3>
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