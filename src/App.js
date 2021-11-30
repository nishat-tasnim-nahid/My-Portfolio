import './App.css';
import 'material-icons/iconfont/material-icons.css';
import Home from './components/Home/Home/Home';
import Navber from './components/Shared/Navber/Navber';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './components/Home/Projects/Projects';
import ProjectsDetails from './components/ProjectsDetails/ProjectsDetails';
import { ContactMe } from './components/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">

      <Router>
        <Navber></Navber>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/contactMe'>
            <ContactMe></ContactMe>
          </Route>
          <Route exact path='/projects'>
            <Projects></Projects>
          </Route>
          <Route exact path='/projectsDetails'>
            <ProjectsDetails></ProjectsDetails>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
