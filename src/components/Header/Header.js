import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem("user")
    }
  }
  delete () {
    localStorage.removeItem("user")
    window.open(process.env.PUBLIC_URL + "/#/login", '_self')
    document.location.reload();
  }
  render() {
    return <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="#!">E SNARSKAYA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          {!this.state.user && <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href={process.env.PUBLIC_URL + "/#/login"}>Login</a></li>
              <li className="nav-item"><a className="nav-link" href={process.env.PUBLIC_URL + "/#/registration"}>Sing up</a></li>
            </ul>
          </div>}
          {this.state.user && <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <a className="navbar-brand">{JSON.parse(this.state.user).firstname}</a>
            <li className="nav-item"><a className="nav-link active" aria-current="page" href={ process.env.PUBLIC_URL + "/#/"}>User list</a></li>
            <li className="nav-item"><a className="nav-link" href="#" onClick={this.delete}>Log out</a></li>
          </ul>}
        </div>
      </nav>
    </div>
  };
}


export default Header;