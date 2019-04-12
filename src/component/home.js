import React, { Component } from 'react';
import Todo from './todo';
import AddTodo from './addTodo';
import Search from './searchTodo';
import plant from '../imgs/g0.jpg';
import home1 from '../imgs/home1.jpeg';
import listbg from '../imgs/listbg.jpeg';
import home2 from '../imgs/home2.jpeg';

class Home extends Component{

    render() {
        return (
            <div className="home">
                <div className="card text-center">
                    <div className="card-header" style={{backgroundImage:`url(${plant})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
                        <h1 style={{color:"lighten-1"}}>Things You Need to Do</h1>
                    </div>
                    <div className="card-body">
                        <div className="bodyImg"><img src={home1} alt="homeLeft"/></div>
                        <div className="bodyList" style={{backgroundImage:`url(${listbg})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
                            <Todo/>
                            <AddTodo/>
                        </div>
                        <div className="bodyImg"><img src={home2} alt="homeRight"/></div>
                    </div>
                    <div className="card-footer text-muted">
                        Good Good Study, Day Day Up!
                    </div>
                </div>
                <div className="searchPart">
                    <Search/>
                    <Todo mode="search"/>
                </div>
            </div>
        );
    }
}

export default Home;