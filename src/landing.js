import React from 'react';
import './index.css';
import turin from './images/turin.JPG';
import children_of_hurin from './images/children_of_hurin.jpg';
import 'bootstrap/dist/css/bootstrap.css';

class Landing extends React.Component{
    render(){
      return(
        <div>
            <h1 className="visible_color">Most Recent Photos</h1>
            <div>    
                <a href='/details'>
                <img src={turin} alt='Turin'/>;
                </a>
                <a href='/details'>
                    <img src={children_of_hurin} alt="Children of Hurin"/>
                </a>
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
/*
  function Photos(props){
    return(
        <div>    
        <a href='/details'>
          <img src={turin} alt='Turin'/>;
        </a>
        <a href='/details'>
              <img src={children_of_hurin} alt="Children of Hurin"/>
        </a>
      </div>
    );
  }
  */