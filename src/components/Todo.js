import React, { Component } from 'react'
import {connect} from 'react-redux'
import './style.css'
class Todo extends Component {

    handleDelete = (e)=>{
        this.props.deleteTODO(e.target.id)
    }

    handlecomplete = (e)=>{
        this.props.completeTODO(this.props.todo.id)
    }

    render() {

        let todoTxt={
            __html: this.props.todo.completed? `<strike>${this.props.todo.todoText}</strike>` : `${this.props.todo.todoText}`
        }
        return (
            <a onClick={this.handlecomplete} href="#!" className="collection-item">
                <div className="row">
                    <div className="col s8">
                        <i className={ this.props.todo.completed ? 'material-icons color-green' : 'material-icons color-black' }>check_circle</i>
                        <span id="txt1" dangerouslySetInnerHTML={todoTxt}></span>
                    </div>
                    <div className="col s4">
                        <div align="center" className={ this.props.todo.priority=='High' ? 'color-red' : this.props.todo.priority=='Medium' ? 'color-yellow' : 'color-orange' }>{this.props.todo.priority}</div>    
                    </div>
                </div>         
            </a>

        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        changes: state.changes
    };
  };
  
  const mapDispachToProps = dispatch => {
    return {
      completeTODO: (id) => dispatch({ type: "COMPLETE_TODO", value: id })
    };
  };
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(Todo);
  