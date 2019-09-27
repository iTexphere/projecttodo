import React, { Component } from 'react'
import {connect} from 'react-redux'
class Login extends Component {

    state={
        username:'',
        password: ''
    }

    handleOnChangeUserName=(e)=>{
        this.setState({
            username : e.target.value
        }
        )
    }

    handleOnChangePassword=(e)=>{
         this.setState({
            password : e.target.value
        }
        )

    }

    handleOnSubmit=(e)=>{
        
        e.preventDefault();
        this.props.login(this.state)
      
    }

    render() {
        return (
            <div className="container">
                <p>Use chathura as username and efuture as password !!</p>
                <div className="row">
                    <div className="col m6">
                        <h2 className="center-align">EFuture Login</h2>
                        <div className="row">
                            <form onSubmit={this.handleOnSubmit} className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input onChange={this.handleOnChangeUserName} id="text" type="text" className="validate"/>
                                        <label htmlFor="text">User Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input onChange={this.handleOnChangePassword} id="pass" type="password" className="validate"/>
                                        <label htmlFor="pass">Password</label>
                                    </div>
                                </div>
                            
                                <div className="row">
                                    <div className="col m12">
                                        <p className="right-align">
                                            <button className="btn btn-large waves-effect waves-light" type="submit" name="action">Login</button>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

  
  const mapDispachToProps = dispatch => {
    return {
        login: (credentials) => dispatch({ type: "LOGIN", value: credentials }),
    };
  };
  export default connect(
    null,
    mapDispachToProps
  )(Login);


