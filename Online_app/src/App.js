import { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CareerPath from './components/CareerPath/CareerPath';
import Entrolled from './components/Entrolled/Entrolled';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Join from './components/Join/Join';
import NotFound from './components/NotFound/NotFound';
import Registered from './components/Registered/Registered';
import SendMessage from './components/SendMessage/SendMessage';
import TeacherForm from './components/TeacherForm/TeacherForm';

export const CourseContext = createContext('course');

function App() {
  const learners = 5013;
  const courses = 16;
  return (
    // using context api 
    <CourseContext.Provider value={[learners, courses]}>
      <div className="App">
        {/* applying react router  */}
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/career">
              <CareerPath></CareerPath>
            </Route>
            <Route path="/join">
              <Join></Join>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/registration">
              <TeacherForm></TeacherForm>
            </Route>
            <Route path="/registered">
              <Registered></Registered>
            </Route>
            <Route path="/entrolled">
              <Entrolled></Entrolled>
            </Route>
            <Route path="/message">
              <SendMessage></SendMessage>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </CourseContext.Provider>
  );
}

export default App;
