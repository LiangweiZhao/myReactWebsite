import React, { Component } from 'react';
import Todo from './todo';
import AddTodo from './addTodo';
import Search from './searchTodo';
import plant from '../imgs/g0.jpg';
import {connect} from 'react-redux';

class Home extends Component{
    handleAddTodo = (todo) => {
        console.log(`${todo.content} will be added`);
        const {handleAddTodos} = this.props;
        handleAddTodos(todo);

    };

    render() {
        return (
            <div className="home">
                <div className="card text-center">
                    <div className="card-header" style={{backgroundImage:`url(${plant})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
                        <h1 style={{color:"lighten-1"}}>Things You Need to Do</h1>
                    </div>
                    <div className="card-body">
                        <Todo/>
                        <AddTodo addTodo={this.handleAddTodo}/>
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

const mapStateToProps = (state) => {
    return ({
        id : state.id,
        todos : state.todos,
        matchTodos : state.matchTodos
    });
};
const mapDispatchToProps = (dispatch) => {
    return ({
        handleAddTodos : (todo) => dispatch({type:"ADD_TODO",todo:todo}),
    })
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);