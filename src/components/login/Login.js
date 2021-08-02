import React from 'react';
import './Login.css';
import {errorHandler} from "../utils/error-handler";



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hasError: false
    }
  }

    login () {
      fetch('http://localhost:8000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: this.state.email, password: this.state.password}),
      })
        .then(response => errorHandler(response))
        .then(response => response.json())
        .then((response) => {
          console.log(response)
          localStorage.setItem("user", JSON.stringify (response))
          window.open(process.env.PUBLIC_URL + "/#", '_self')
          document.location.reload();
        })
        .catch(() => {
          this.state.hasError = true
          this.setState(this.state)
        });

    };

  emailChange(event) {
    this.setState({
      ...this.state,
      email: event.target.value
    });
  }

  passwordChange(event) {
    this.setState({
      ...this.state,
      password: event.target.value
    });
  }

  render() {
    return <div className='form-container'>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control"
               aria-describedby="emailHelp" value={this.state.email}
               onChange={this.emailChange.bind(this)}  />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password}
               onChange={this.passwordChange.bind(this)} />
      </div>
        {this.state.hasError && <div className="alert alert-danger" role="alert">Your email or password incorrect></div>}
      <button type="submit" className="btn btn-primary" onClick={this.login.bind(this)}>Login</button>
    </div>
  };
}

export default Login;