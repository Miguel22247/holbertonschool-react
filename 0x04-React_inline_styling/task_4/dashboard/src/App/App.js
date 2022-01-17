import  React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.keyboardKeys = this.keyboardKeys.bind(this);
  }

  keyboardKeys(x) {
    if (x.key === 'h' && x.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyboardKeys);
  }

  componentWillUnmount() {
    document.addEventListener('keydown', this.keyboardKeys);
  }

  render() {
    const { isLoggedIn, logOut } = this.props;
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications}/>
        <div className="App">
          <Header />
        </div>
        <div className="App-body">
          {
            isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses}/>
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )
          }
        </div>
        <BodySection title="News from the School">
          <p>
            Somebody that you loved.
          </p>
        </BodySection>
        <div className="App-footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {}
};

export default App;
