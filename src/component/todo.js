import React from 'react';
import Bowl from '../imgs/warning.png';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Todo = (props) => {
    const {handleDltTodos} = props;
    const {mode} = props;
    const {keyword} = props;
    const todos = mode !== "search" ? props.todos : props.matchTodos;
    const handleDltFunc = (id) => {
        handleDltTodos(id);
    };
    const rtntodos = todos.map(todo => {
        return (
            <li className="list-group-item" key={todo.id} onDoubleClick={()=>handleDltFunc(todo.id)}>
                <img src={Bowl} alt="QingHuaCi"/>
                <Link to={`/${todo.id}`}>{todo.content}</Link>
            </li>
        )
    });
    if(mode === "search" && rtntodos.length === 0) {
        if (keyword !== "" && keyword !== undefined)
            return (<p>No Content Found</p>);
        else
            return null;
    }
    return rtntodos.length !== 0 ?(
        <ul className="list-group" style={{overflowY:"scroll",maxHeight:"220px"}}>{rtntodos}</ul>
    ): (<p>Have a Happy Day!</p>);
};

const mapStateToProps = (state) => {
    return ({
        matchTodos : state.matchTodos,
        todos : state.todos,
        keyword: state.keyword
    });
};
const mapDispatchToProps = (dispatch) => {
    return ({
        handleDltTodos : (id) => dispatch({type:"DELETE_TODO",id:id})
    })
};
export default connect(mapStateToProps,mapDispatchToProps)(Todo);