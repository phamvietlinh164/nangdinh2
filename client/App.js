import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Body_logo from './components/Body_logo';
import routes from './routes';
import { Switch, Route, HashRouter, Prompt } from 'react-router-dom';
// import Question_row from './components/Question_row';
// import Select from './components/Select';


class App extends Component {


    render() {
        return (
            <HashRouter>

                <div className="App">
                    <Body_logo />
                    <Header />
                    <Menu />

                    {this.showContentMenus(routes)}

                </div>

            </HashRouter>
        );
    }


    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (<Route key={index} path={route.path} exact={route.exact} component={route.main} />)
            })
        }

        return <Switch>{result}</Switch>
    }
}

export default App;
