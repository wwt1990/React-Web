import React, { Component } from 'react';
import Media from "react-media";
import './Proj.css';

class Proj extends Component {

  render() {
    const projList = [
      'Autocomplete',
      'Barchart',
      'Calculator',
      'Chart',
      'Dynamic',
      'Form',
      'Gif',
      'Move',
      'Multisearch',
      'Quote',
      'Redux.Login',
      'Router',
      'Search',
      'Space',
      'Todo',
      'Weather',
      'Wiki'
    ];

    const btnGroup = projList.map((proj, index) => {
      var href = `http://${proj.toLowerCase()}.weitian.me/`;
      return (<button key={index} type="button" className="btn btn-warning rounded mx-1">
                <a className='text-dark' href={href} target="iframe_a" style={{margin:'-15px',padding:'10px', textDecoration:'none'}}>{proj}</a>
              </button>)
      })

    return (
      <div className='container'>
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <h1 style={{fontSize:'25px',padding:'20px 20px 10px'}}>React Projects</h1>
            ) : (
              <h1 style={{padding:'20px 20px 10px'}}>React Projects</h1>
            )
          }
        </Media>
        <div style={{textIndent:'20px', marginLeft: '30px',marginRight: '30px'}}>
          <p>These are 17 projects I built to improve my understanding of React while working through&nbsp;
            <a href='http://sean-smith.me/assets/portfolio/25-react-projects/index.html'
               target='_blank'
               rel="noopener noreferrer">
               Sean Smith</a>&apos;s website. Check them out! Also, see all the projects live and a full summary of what I learned on my&nbsp;
            <a href='https://github.com/wwt1990/React-Projects'
               target='_blank'
               rel="noopener noreferrer">
               GitHub
            </a>.
          </p>
          <div className="btn-toolbar btn-group mb-3 d-flex justify-content-surround" style={{width:'100%'}} role="toolbar" aria-label="Toolbar with button groups">
            {btnGroup}
          </div>
          <div>
             <iframe className="mx-auto" name="iframe_a" title='react-projects' style={{border:"none", width:'100%', height:window.screen.height*0.7}}></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Proj;
