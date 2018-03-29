import React, { Component } from 'react';

class Header extends Component {
  render() {
    var url = window.location.href.substring(17);
    const bgStyle = {background: '#c9c9c9', borderRadius:'3px'}
    const homeBg = url === '/' ? bgStyle : null;
    const projBg = url === '/react-projects' ? bgStyle : null;
    const otherBg = url === '/other-projects' ? bgStyle : null;
    const contactBg = url === '/contact' ? bgStyle : null;
    return (
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-faded">
          <div className='container'>
            <a className="navbar-brand" href="/">Weitian&apos;s Blog</a>
            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/" style={homeBg}>Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/react-projects" style={projBg}>React Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/other-projects" style={otherBg}>Other projects</a>
                </li>
              </ul>
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/contact" style={contactBg}>Contace me</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle"
                     href='/'
                     id="navbarDropdownMenuLink"
                     data-toggle="dropdown"
                     aria-haspopup="true"
                     aria-expanded="false">
                    External links
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <button className="btn btn-link"
                            style={{cursor:'pointer',textDecoration:'none'}}
                            type="button" >
                      <a className="dropdown-item"
                         href='https://github.com/wwt1990/projects/tree/master/react%20projects'
                         target='_blank'
                         rel="noopener noreferrer">GitHub
                      </a>
                    </button>
                    <button className="btn btn-link"
                            style={{cursor:'pointer',textDecoration:'none'}}
                            type="button" >
                      <a className="dropdown-item"
                         href='https://www.linkedin.com/in/weitian-wu-85867785'
                         target='_blank'
                         rel="noopener noreferrer">Linkedin
                      </a>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;