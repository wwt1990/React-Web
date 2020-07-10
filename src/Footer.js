import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div className="container mt-4" style={{position:'relative',bottom:0,width:'100%',height:'10%'}}>
      <footer className="page-footer font-small stylish-color-dark pt-4 mt-4">
        <hr/>
        <div className="text-center">
            <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm btn-github mx-1"
                     href='https://github.com/wwt1990'
                     target='_blank'
                     rel="noopener noreferrer">
                     <i className="fa fa-github"> </i>
                  </a>
                </li>
              </ul>
          </div>
          <div className="footer-copyright py-3 text-center">
            <div className="container-fluid">
                &copy; 2018-2020 Copyright: <a href="/" className='text-muted'> weitian.me </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}


export default Footer;
