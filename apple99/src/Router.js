import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Com_0 from './Components/Com_0'
import Com_1 from './Components/Com_1'
import Com_2 from './Components/Com_2'
import Com_3 from './Components/Com_3'
import Com_4 from './Components/Com_4'
import Buttons from './Buttons';

function Router(){
    return(
        <div id="component_div">
            <BrowserRouter>
                <Buttons></Buttons>
                <Route path="/" component={Com_0} exact/>
                <Route path="/Com1" component={Com_1}/>
                <Route path="/Com2" component={Com_2}/>
                <Route path="/Com3" component={Com_3}/>
                <Route path="/Com4" component={Com_4}/>
            </BrowserRouter>
        </div>
    );
}

export default Router;