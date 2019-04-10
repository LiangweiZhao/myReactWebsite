import React,{Component} from 'react';

class addTodo extends Component{
    state = {
        content : ""
    };
    handleInputChange = (e) => {
        this.setState({
            content : e.target.value
        });
    };
    handleAddBtn = () => {
        if(this.state.content === ""){
            alert("Todo input should not be null");
            return;
        }
        this.setState({
            content : ""
        });
        this.props.addTodo(this.state);
    };
    render(){
        return (
            <form onSubmit={this.handleAddBtn}>
                <div className="file-field input-field">
                    <button className="btn">Add</button>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" placeholder="Your Todo Here" type="text" onChange={this.handleInputChange} value={this.state.content} />
                    </div>
                </div>
            </form>
        )
    }
}

export default addTodo;