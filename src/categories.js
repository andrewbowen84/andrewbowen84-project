import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import turin from './images/turin.JPG';
import children_of_hurin from './images/children_of_hurin.jpg';
import navbar_background from './images/navbar_background.jpg';
import turin_2 from './images/turin_2.jpg';

/*
  <div class="container features">
          <div className="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
               <Photos/> 
            </div>
          </div>
      </div> 
*/
class Categories extends React.Component{
  render(){
    return(
      <div className="container features">
        <Photos/> 
      </div> 
    );
  }
} export default Categories;
function Photos(props){
  return(
    <div>    
      <p className='visible_color'>Turin</p>
      <a href='./details'>
        <img src={turin} alt='Turin'/>;
      </a>
      <a href='./details'>
        <img src={children_of_hurin} alt="Children of Hurin"/>
      </a>
      <p className='visible_color'>LotR Landscapes</p>
      <a href='./details'>
        <img src={navbar_background} alt='Background'/>
      </a>
      <a href='./details'>
        <img src={turin_2} alt='Turin 2'/>
      </a>
    </div>
    
  );
}
const element = <Categories name="Test" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);