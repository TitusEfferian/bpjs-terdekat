import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const Home = React.lazy(() => import('./Routes/Home'));
const Maps = React.lazy(() => import('./Routes/Maps'));

export const Loader = () => {
  return(
    <div style={{
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <BounceLoader color="#1890ff"/>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <React.Suspense fallback={null}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/maps' component={Maps} />
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default App;
