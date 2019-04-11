import React,{ Component } from 'react';
import { connect } from 'react-redux';

class todoDetails extends Component{
    componentDidUpdate(nextProps){
        console.log(this.props);
        console.log(nextProps);
    }
    handleDltAction = () => {
        const {cor_todo} = this.props;
        const {handleDltTodos} = this.props;
        const {history} = this.props;
        const {id} = cor_todo;
        if(window.confirm("Are you sure to DELETE it?")){
            handleDltTodos(id);
            history.push("/");
        }
    };
    handleSubmit = (e) => {
        console.log(document.getElementById("detailInput").value);
    };
    render(){
        const {cor_todo} = this.props;
        if(!cor_todo){
            return (<div className="noRes"><h1>No Result Found</h1></div>);
        }
        const {details} = cor_todo;
        const {content} = cor_todo;
        return (
            <div className="detailContainer">
                <div className="detailTitle">
                    <h2>{content}</h2>
                </div>
                <div className="detailContent">
                    <div className="subContent">
                        <h4>{details}</h4>
                        <textarea id="detailInput"/>
                        <br/>
                        <button className="btn waves-effect waves-light" type="submit" onClick={this.handleDltAction}>
                            Delete<i className="material-icons right">delete</i>
                        </button>
                        <button className="btn waves-effect waves-light" type="submit" onClick={this.handleSubmit}>
                            Submit<i className="material-icons right">send</i>
                        </button>
                    </div>
                    <div className="subContent">
                        <h4>You Can Upload Your Photo Here</h4>
                        <div className="imgsInput">
                            <label htmlFor="imgInput">
                                <i className="material-icons">image</i>
                            </label>
                            <input type="file" id="imgInput"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    const id = ownProps.match.params.todo_id;
    console.log(`Got id: ${id}`);
    return ({
        cor_todo : state.todos.find((todo) => {return id+"" === todo.id+""})
    });
};
const mapDispatchToProps = (dispatch) => {
    return ({
        handleDltTodos : (id) => dispatch({type:"DELETE_TODO",id:id}),
    })
};
export default connect(mapStateToProps,mapDispatchToProps)(todoDetails);