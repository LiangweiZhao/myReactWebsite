import React,{ Component } from 'react';
import { connect } from 'react-redux';

class addTodo extends Component{
    state = {
        content : ""
    };
    /*
        handle input change
     */
    handleChange = (e) => {
        this.setState({
            content : e.target.value
        });
    };
    /*
        Handle Adding Todo Evenet, while the Add button is clicked
     */
    handleAddTodo = (e) => {
        e.preventDefault();//Prevent the page refresh
        //console.log(e);
        const {content} = this.state;
        const {handleAddTodos} = this.props;
        if(content === "" || content === undefined){
            alert("Todo input should not be null");
            return;
        }
        console.log(`${content} will be added`);
        this.setState({
            content : ""
        });
        handleAddTodos({content:content});
    };
    render(){
        return (
            <form onSubmit={this.handleAddTodo}>
                <div className="file-field input-field">
                    <button className="btn-floating pulse" style={{float:"left"}}><i className="material-icons">add</i></button>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" placeholder="Your Todo Here" type="text" onChange={this.handleChange} value={this.state.content}/>
                    </div>
                </div>
            </form>
        )
    }
}
/*
    Handle input change dispatch action
 */
const mapDispatchToProps = (dispatch) => {
    return ({
        handleAddTodos : (todo) => dispatch({type:"ADD_TODO",todo:todo})
    })
};
export default connect(null,mapDispatchToProps)(addTodo);