import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import FreelancerList from './containers/FreelancerList/FreelancerList';
import JobList from './containers/JobList/JobList';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import Logout from './containers/Auth/Logout/Logout';
import NewJob from './containers/JobList/NewJob/NewJob';


class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
    
  }
  render() {
    return (
      <Layout className="App">

        <Route path="/" exact component={FreelancerList}/>
        <Route path="/jobs"  component={JobList}/>
        <Route path="/auth"  component={Auth}/>
        <Route path="/logout"  component={Logout}/>
        <Route path="/newJob"  component={NewJob}/>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
