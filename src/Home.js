import React, { Component } from 'react';
import Media from "react-media";

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron jumbotron-fluid" style={{padding:'5rem 0'}}>
          <Media query="(max-width: 768px)">
            {matches =>
              matches ? (
                <div className='container'>
                  <h1 className="text-small text-center">Welcome!</h1>
                  <p className='lead text-center'>Hey, this is Weitian Wu.</p>
                </div>
              ) : (
                <div className='container'>
                  <h1 className="display-2 text-center">Welcome!</h1>
                  <p className='lead text-center'>Hey, this is Weitian Wu and thank you for visiting my personal blog.</p>
                </div>
              )
            }
          </Media>
        </div>

        <div className='row'>
          <div className='col-lg'>
            <div className="card bg-light mb-3" >
              <div className="card-body">
                <p className="card-text">I am a <span className='font-weight-bold font-italic'>frondend web developer</span> -
                   I like to involve myself in the design of a website as well as the realization of it.
                   I have been working in Frontend technologies since 2012. In the past few years, I was working heavily on React.js and jQuery.
                   And my favourite frameworks and libraries are React.js, Redux, jQuery and Bootstrap.
                   I&#39;m currently working at Apple, Inc.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg'>
            <div className="card bg-light mb-3" >
              <div className="card-body">
                <p className="card-text">I am a <span className='font-weight-bold font-italic'>data scientist</span> -
                      I&#39;m proficient in data-related programming languages such as Python, R and SAS, and database languages such as SQL
                      Server and MySQL. In my spare time, I like to do some machine learning projects and
                      deep learning projects on Kaggle to keep my data acuity.</p>
              </div>
            </div>
          </div>
          <div className='col-lg'>
            <div className="card bg-light mb-3" >
              <div className="card-body">
                <p className="card-text">I am a <span className='font-weight-bold font-italic'>musician</span> - Inherited from my parents,
                      I play a lot of Chinese traditional musical instruments like Pipa, Erhu and Bamboo flute.
                      I was a member of the University Orchestra when I was a college student. I have visited Seattle, New York, Macau,
                      Tokyo, Nagoya and many other cities in the world as a Pipa player. Here are the links to my solo
                      <span className='font-italic'><a href='https://www.youtube.com/watch?v=67anpytcPyI' target='_blank' rel="noopener noreferrer"> Swan </a></span>
                      and <span className='font-italic'><a href='https://www.youtube.com/watch?v=AsEVMMOqrbg' target='_blank' rel="noopener noreferrer"> Spring Rain </a></span>on Youtube.</p>
              </div>
            </div>
          </div>
        </div>

        <p className='lead m-3'>This blog is built on React and Bootstrap 4. Feel free to browse my <a href='/react-projects'>react projects</a> {/*and <a href='/other-projects'>other projects</a>*/} and learn more about me.</p>

      </div>
    );
  }
}


export default Home;
