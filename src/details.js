import React from 'react';
import './index.css';
import children_of_hurin from './images/children_of_hurin.jpg';
import 'bootstrap/dist/css/bootstrap.css';

class Details extends React.Component{
    render(){
        return(
            <div>
                <img src={children_of_hurin} alt="Children of Hurin"/>	        
                <ul>
                    <li className='visible_color'>
                        Name: Turin
                    </li>
                    <li className='visible_color'>
                        Other details
                    </li>
	            </ul>
            </div>
        );
    }    
}export default Details;