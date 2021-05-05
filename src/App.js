import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='container'>
        <ul>
          <li>
            <Link to='/'>Dostęp publiczny</Link>
          </li>
          <li>
            <Link to='/secured'>Dostęp po zalogowaniu</Link>
          </li>
        </ul>
        <Route exact path='/' component={Welcome} />
        <Route path='/secured' component={Secured} />
      </div>
    </BrowserRouter>
  );
};

export default App;
