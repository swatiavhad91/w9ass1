import React, {Component} from 'react';
import UsersWithReduxThunk from "./redux-thunk/UsersWithReduxThunk";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Home from "./home/Home";


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <div>
                            <Link to='/'>Home</Link>
                            |
                            <Link to='/redux-thunk'>Redux-Thunk</Link>
                            
                           
                        </div>
                        <Switch>
                            <Route path="/redux-thunk" component={UsersWithReduxThunk}/>
                            
                            <Route path="/" component={Home}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;