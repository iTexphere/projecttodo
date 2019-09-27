import React, { Component } from 'react'
import AddTodo from './AddTodo';
import {connect} from 'react-redux'
import Todo from './Todo';

class TodoApp extends Component {
    render() {
        return (
            <div className="container">
                 <AddTodo/>
                 <div className="collection">

                {
                    this.props.todos.length == 0 ?
                     (
                        <div align="center" className="collection">
                             <a href="#" className="collection-item">No TODO Avaialbe</a>
                        </div>
                     )
                    :
                    this.props.todos.map((todo)=>{
                        return(<Todo key={todo.id} todo={todo} ></Todo>)
                    })
                }

                </div>
                
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };
  
  export default connect(
    mapStateToProps,
    null
  )(TodoApp);
  
  