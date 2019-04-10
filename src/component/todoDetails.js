import React,{ Component } from 'react';
import { connect } from 'react-redux';


class todoDetails extends Component{
    render(){
        console.log(this.props);
        const {cor_todo} = this.props;
        if(!cor_todo){
            return (<div className="noRes"><h1>No Result Found</h1></div>);
        }
        const {details} = cor_todo;
        const {time} = cor_todo;
        return (
            <div className="detailContainer">
                <h1>{details}</h1>
                <h4>{time}</h4>
                <input />
                <button>Edit</button>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    const id = ownProps.match.params.todo_id;
    return ({
        cor_todo : state.todos.find((todo) => {return id+"" === todo.id+""})
    });
};
const mapDispatchToProps = (dispatch) => {
    return ({
        handleAddTodos : (todo) => dispatch({type:"ADD_TODO",todo:todo}),
    })
};
export default connect(mapStateToProps,mapDispatchToProps)(todoDetails);