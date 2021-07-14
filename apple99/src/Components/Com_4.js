import React from 'react';
import axios from 'axios';

class Com_4 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            markets: [],
            value: "",
            price: []
        }
    }

    getMarket = async() =>{
        const markets = await axios.get(
            "/marketList"
        );
        this.setState({markets:markets.data.marketName})
    }

    getPrice = async(url) =>{
        const price = await axios.get(
            `/applePrice?market=${url}`
        );
        this.setState({price:price.data.products})
    }

    componentDidMount(){
        this.getMarket()
    }

    HandleChange(e){
        this.setState({value:e.target.value})
        this.getPrice(e.target.value)
        e.preventDefault()
    }

    render(){
        return(
            <div id = "com4_div">
                <div id = "select">
                    <select value={this.state.value} onChange={this.HandleChange.bind(this)}>
                        <option></option>
                    {
                        this.state.markets.map((market)=>(
                                <option value={market} key={market}>
                                    {market}
                                </option>
                    ))}
                    </select>
                </div>
                <div id = "result">
                    {
                        this.state.price.map((product, index)=>(
                            <h3 key={index}>{product.date}&nbsp;&nbsp;&nbsp;가격: {product.price}원</h3>
                        ))}
                </div>
            </div>
        );
    }
}

export default Com_4;