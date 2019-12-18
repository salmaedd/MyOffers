import React from "react";
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from './serviceWorker';
//import headpage from '../src/components/headPage';
import navbar from '../src/components/myNavbar';
import mylistss from '../src/components/MyList';
import myprofil from '../src/components/MyProfil'
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';


const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const routing = (
    <Provider store={store}>

        <Router basename={process.env.PUBLIC_URL}>
            <Route path="/" component={App} />
            <Route path="/" component={navbar} />
            <Route path="/List" component={mylistss} />
            <Route path="/Profil" component={myprofil} />





        </Router>
    </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
