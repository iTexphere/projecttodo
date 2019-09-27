import React, { Component } from 'react'
import TodoApp from './components/TodoApp'
import Login from './components/Login'
import NavBar from './components/NavBar'
import {connect} from 'react-redux'

 class App extends Component {
  render() {
      return (
        <div className="container">
            <NavBar/>
            {    
              this.props.isLogin ? (<Login/>) :    <TodoApp/>
            }
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
      todos: state.todos,
      changes: state.changes,
      isLogin : state.isLogin
  };
};

export default connect(
  mapStateToProps,
  null
)(App);