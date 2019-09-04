import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';
import { GOOGLE_VERIFICATION_LOCAL } from './api-key';

const Home = React.lazy(() => import('./Routes/Home'));
const Maps = React.lazy(() => import('./Routes/Maps'));
const google_verification = process.env.google_verification || GOOGLE_VERIFICATION_LOCAL;

export const Loader = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <BounceLoader color="#1890ff" />
    </div>
  )
}

const App = () => {
  return (
    <Fragment>
      <Helmet>
        <title>BPJS Terdekat | Faskes 1 BPJS Terdekat</title>
        <meta name="description" content="Mencari BPJS terdekat atau faskes 1 terdekat? Dapat dimudahkan mencari disini"></meta>
        <meta name="google-site-verification" content={google_verification.toString()} />
      </Helmet>
      <Router>
        <React.Suspense fallback={null}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/maps' component={Maps} />
          </Switch>
        </React.Suspense>
      </Router>
    </Fragment>

  )
}

export default App;
