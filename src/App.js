import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './navigation';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Landing from './landing';
import Categories from './categories';
import Details from './details';

function App(){
    return(
        <BrowserRouter>
            <div className='overlay'>
                <Navigation/>
                <Route exact path="/" component={Landing}/>
                <Route path="/categories" component={Categories}/>
                <Route path='/details' component={Details}/>
            </div>

        </BrowserRouter>
    );
} export default App;