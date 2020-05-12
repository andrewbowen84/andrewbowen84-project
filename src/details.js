import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Youtube from './youtube';

class Details extends React.Component{
    render(){
        return(
            <div>
                <Youtube /> 
                <ul>
                    <li className='visible_color'>
                        Video Descriptiom
                    </li>
                    <li className='visible_color'>
                        Other details
                    </li>
	            </ul>
            </div>
        );
    }    
}export default Details;