import React, { PureComponent } from 'react';
import { Switch, Route, Redirect, } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import Auth from '../Auth';
import Main from '../Main';


class App extends PureComponent {
    render() {
        //  const { isAuthorized } = this.props.auth;
        return (
            <div>
                <Switch>  
                                
                    <Route path="/auth" component={Auth} />
                    <Route path="/main" component={Main} />
                    <Route exact from="*" to="/auth" component={Auth}/>
                </Switch>
            </div>
        );
    }
}

 // {isAuthorized ?
                    //     <Redirect from="/*" to="/main" />
                    //     :
                    //     <Redirect from="/main" to="/auth" />
                    // }                     

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(App);