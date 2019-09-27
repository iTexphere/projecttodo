import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/todo'
import './style.css'
import Select from 'react-select';

class AddTodo extends Component {

    state= {
        id : '',
        todoText : '',
        completed :false,
        priority: 'Medium'
    }

    handleOnChange=(e)=>{
        this.setState({
            todoText : e.target.value
        }
        )
    }

    handlePriority=(value)=>{
        this.setState({
            priority : value.value
        }
        )

    }

    handleOnSubmit=(e)=>{
        e.preventDefault();
        if(this.state.todoText)
         this.props.addTODO({id :new Date().getTime(), todoText : this.state.todoText, priority : this.state.priority , completed :false})

        this.setState({
            todoText:''
        })
    }

    render() {

        const options = [
            { value: 'High', label: 'High' },
            { value: 'Medium', label: 'Medium' },
            { value: 'Low', label: 'Low' },
          ];
         return (
            <div  className="container add-todo">
                <p>*Default Prority will be Medium</p>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="row">
                       <div className="col">
                            <a onClick={this.handleOnSubmit} className="waves-effect waves-light btn">Add TODO</a>
                         </div>
                    </div>
                       <div className="row">
                         <div className="col sm6">
                                <label>Add New</label>
                                  <input placeholder="Add New Task" type="text" value={this.state.todoText} onChange={this.handleOnChange} />
                                </div>
                                <div className="col sm3">
                                     <Select placeholder="Medium" className="dropdown" isSearchable  options={options} onChange={this.handlePriority}  />
                                </div>
                        </div>
                </form>
            </div>
        )
    }
}

  const mapDispachToProps = dispatch => {
    return {
      addTODO: (todo) => dispatch(actionCreators.addToDo(todo))
    };
  };
  export default connect(
    null,
    mapDispachToProps
  )(AddTodo);
  