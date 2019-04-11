import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Navbar from "./component/navbar";
import Home from "./component/home";
import Contact from './component/contact';
import TodoDetail from './component/todoDetails';

/*
    Container Component: Home, Contact, TodoDetail
    UI (Function) Component: Navbar, AddTodo, SearchTodo, Todo
 */
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/:todo_id' component={TodoDetail}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
