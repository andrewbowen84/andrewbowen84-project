import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Youtube from './youtube';

class Landing extends React.Component{
  render(){
    return(
      <div>
          <h1 className="visible_color">Most Recent Videos</h1>
          <div>
            <Youtube />
          </div>  
          <h1 className='visible_color'>
            Categories
          </h1>
          <ul>
            <li>
              <a href='/categories'>
                Turin
              </a>
            </li>
            <li>
              <a href='/categories'>
                Landscapes
              </a>
            </li>
          </ul>
      </div>
    );
  }
}export default Landing;