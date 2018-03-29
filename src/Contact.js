import React, { Component } from 'react';
import Media from "react-media";

class Contact extends Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron" style={{marginBottom:'20%'}}>
          <Media query="(max-width: 768px)">
            {matches =>
              matches ? (
                <h1 style={{fontSize:'25px',padding:'20px 20px 10px'}}>Contact me</h1>
              ) : (
                <h1 style={{padding:'20px 20px 10px'}}>Contact me</h1>
              )
            }
          </Media>
          <div className='large' style={{textIndent:'20px', marginLeft: '30px',marginRight: '30px'}}>
            <p>Thank you for visiting! If you would like to get in touche with me, here is my e-mail address: <a href="mailto:weitian.me@gmail.com?Subject=Hello%20blog" target="_top">weitian.me@gmail.com</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;