import React,{ Component } from 'react';
import {connect} from 'react-redux';

class searchTodo extends Component{
    handleKeywords = (e) => {
        const {handleKeywordsChange} = this.props;
        const {handleMatchTodos} = this.props;
        handleKeywordsChange(e.target.value);
        handleMatchTodos(e.target.value);
    };
    render(){
        return (
            <div className="searchpart">
                <h2>Search for Your Todos</h2>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="searchKey">Keywords</label>
                    </div>
                    <input type="text" id="searchKey" className="form-control" onChange={this.handleKeywords}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        keyword : state.keyword
    })
};
const mapDispatchToProps = (dispatch) => {
    return ({
        handleKeywordsChange : (value) => dispatch({type:"INPUT_UPDATE",value:value}),
        handleMatchTodos : (keyword) => dispatch({type:"MATCH_TODO",keyword:keyword})
    })
};
export default connect(mapStateToProps,mapDispatchToProps)(searchTodo);