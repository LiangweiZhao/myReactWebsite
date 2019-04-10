import React from 'react';

const todo = ({todos,dltFunc,mode}) => {
    const handleDltFunc = (id) => {
        dltFunc(id);
    };
    const rtntodos = todos.map(todo => {
        return (
            <li className="list-group-item" key={todo.id} onClick={()=>handleDltFunc(todo.id)}>{todo.content}</li>
        )
    });
    if(mode === "search" && rtntodos.length === 0)
        return (<p>No Content Found</p>);
    return rtntodos.length !== 0 ?(
        <ul className="list-group">{rtntodos}</ul>
    ): <p>Have a Happy Day!</p>
};

export default todo;