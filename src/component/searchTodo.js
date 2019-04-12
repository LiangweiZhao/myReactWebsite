import React from 'react';
import {connect} from 'react-redux';

const searchTodo = (props) => {
    const handleKeywords = (e) => {
        const {handleMatchTodos} = props;
        handleMatchTodos(e.target.value);
    };
    return (
        <div className="searchpart">
            <h2>Search for Your Todos</h2>
            <div className="input-field">
                <input type="text" id="searchKey" className="form-control" onChange={handleKeywords}/>
                <label htmlFor="searchKey">Keywords</label>
            </div>
        </div>
    )
};
const mapDispatchToProps = (dispatch) => {
    return ({
        handleMatchTodos : (keyword) => dispatch({type:"MATCH_TODO",keyword:keyword})
    })
};
export default connect(null,mapDispatchToProps)(searchTodo);