import React,{Component} from 'react';
import { connect } from 'react-redux';

class addTodo extends Component{
    /*
        handle input change
     */
    handleChange = (e) => {
        const {handleInputChange} = this.props;
        handleInputChange(e.target.value);
    };
    /*
        Handle Adding Todo Evenet, while the Add button is clicked
     */
    handleAddTodo = (e) => {
        e.preventDefault();//Prevent the page refresh
        //console.log(e);
        const {content} = this.props;
        const {handleInputChange} = this.props;
        const {handleAddTodos} = this.props;
        if(content === "" || content === undefined){
            alert("Todo input should not be null");
            return;
        }
        console.log(`${content} will be added`);
        handleInputChange("");
        handleAddTodos({content:content});
    };
    render(){
        return (
            <form onSubmit={this.handleAddTodo}>
                <div className="file-field input-field">
                    <button className="btn btn-floating pulse" style={{borderRadios:"50%"}}>Add</button>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" placeholder="Your Todo Here" type="text" onChange={this.handleChange} value={this.props.content}/>
                    </div>
                </div>
            </form>
        )
    }
}
/*
    Get the content state from the store
 */
const mapStateToProps = (state) => {
    return ({
        content : state.content
    })
};
/*
    Handle input change dispatch action
 */
const mapDispatchToProps = (dispatch) => {
    return ({
        handleInputChange : (strInput) => dispatch({type:"INPUT_UPDATE",value:strInput,input_id:1}),
        handleAddTodos : (todo) => dispatch({type:"ADD_TODO",todo:todo})
    })
};
export default connect(mapStateToProps,mapDispatchToProps)(addTodo);