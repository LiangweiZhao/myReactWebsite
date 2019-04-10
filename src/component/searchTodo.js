import React from 'react';

const searchTodo = ({match})=>{
    const handleKeywords = (e) => {
        //console.log(`Your keywords is: ${e.target.value}`);
        match(e.target.value);
    };
    return (
        <div className="searchpart">
            <h2>Search for Your Todos</h2>
            <div className="input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="searchKey">Keywords</label>
                </div>
                <input type="text" id="searchKey" className="form-control" onChange={handleKeywords}/>
            </div>
        </div>
    )
};

export default searchTodo;