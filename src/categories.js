import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Youtube from './youtube';

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
      <Youtube />
    </div>
  );
}
const element = <Categories name="Test" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);