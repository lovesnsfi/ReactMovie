import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App.js';
import {HashRouter,Route,Redirect} from 'react-router-dom';
import Index from "./pages/Index/Index";
import Detail from "./pages/Detail/Detail";
    
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <HashRouter>
        <App>
            <Route path="/index" component={Index}></Route>
            <Route path="/detail" component={Detail}></Route>
            {/*重定向路由，当访问根路径，直接跳转到movie的路由下面 */}
            <Redirect path="/" to="/index/movie"></Redirect>
        </App>
    </HashRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
