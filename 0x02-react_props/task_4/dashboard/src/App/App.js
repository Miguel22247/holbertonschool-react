import React from 'react';
/* Components */
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
/* Proptypes */
import { bool } from 'prop-types';
/* Styles */
import './App.css';

function App({isLoggedIn}) {
  return (
    <>
      <Notifications />
      <div className="App">
        {/* Header */}
        <Header />
        {/* Body */}
        {isLoggedIn ? <CourseList /> : <Login />}
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
