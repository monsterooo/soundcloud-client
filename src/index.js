import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import SC from 'soundcloud';
import configureStore from './store/configureStore';
import App from './components/App';
import Callback from './components/Callback';
import Stream from './components/Stream/index';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth';
import * as actions from './actions';
import './styles/app.css';

SC.initialize({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
});

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream} />
        <Route path="/" component={Stream} />
        <Route path="/callback" component={Callback} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
