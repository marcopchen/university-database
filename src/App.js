import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCampuses, getStudents } from './store';
import Nav from './Nav';
import Home from './Home';
import Student from './Student';
import Students from './Students';
import StudentForm from './StudentForm';
import Campus from './Campus';
import Campuses from './Campuses';
import CampusForm from './CampusForm';

class App extends Component {
  componentDidMount() {
    this.props.getCampuses();
    this.props.getStudents();
  }

  render() {
    return (
      <Router>
        <div>
          <Route render={({ location }) => <Nav path={location.pathname} />} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/campuses' exact component={Campuses} />
            <Route path='/campuses/add' exact render={({ history }) => <CampusForm history={history} />} />
            <Route path='/campuses/:id' exact render={({ match, history }) => <Campus id={match.params.id * 1} history={history} />} />
            <Route path='/campuses/:id/edit' exact render={({ match, history }) => <CampusForm id={match.params.id * 1} history={history} />} />
            <Route path='/students' exact component={Students} />
            <Route path='/students/add' exact render={({ match, history }) => <StudentForm id={match.params.id * 1} history={history} />} />
            <Route path='/students/:id' exact render={({ match, history }) => <Student id={match.params.id * 1} history={history} />} />
            <Route path='/students/:id/edit' exact render={({ match, history }) => <StudentForm id={match.params.id * 1} history={history} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: () => dispatch(getCampuses()),
    getStudents: () => dispatch(getStudents())
  };
};

export default connect(null, mapDispatchToProps)(App);
