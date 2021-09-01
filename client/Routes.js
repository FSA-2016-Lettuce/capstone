import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/SignUp';
import Home from './components/Home';
import SingleRunView from './components/SingleRunView';
import UserProfile from './components/UserProfile';
import UserProfileForm from './components/UserProfileForm';
import CreateRoute from './components/CreateRoute';
import LandingPage from './components/LandingPage';
import { me } from './store';
import MeetTheTeam from './components/footer/MeetTheTeam';
import SignupWaiting from './components/SignupWaiting';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    console.log(this.props);
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/users/:id/profile/" component={UserProfile} />
            <Route path="/runs/:id" component={SingleRunView} />
            <Route path="/meet-the-team" component={MeetTheTeam} />
            <Route
              exact
              path="/users/signupWaiting"
              component={SignupWaiting}
            />
            <Route
              exact
              path="/users/:id/profile/edit"
              component={UserProfileForm}
            />
            <Route path="/routes/create" component={CreateRoute} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/meet-the-team" component={MeetTheTeam} />
            <Route
              exact
              path="/users/signupWaiting"
              component={SignupWaiting}
            />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
