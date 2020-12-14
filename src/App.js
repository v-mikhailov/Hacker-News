import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './Components/MainPage';
import FullNews from './Components/FullNews';

function App() {
  return (
    <Router>
      <div className='page-container'>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/news/:id' component={FullNews} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
