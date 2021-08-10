
import './App.css';
import {Provider} from 'react-redux'
import store from "./redux/store"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import  Dashboard   from './Pages/Dashboard/Dashboard';
import Task from './Pages/TaskTable/TaskTable';

function App() {
  return (
    <Provider store={store}>

   
    <div className="App">
      <Router>
      <Switch>
          <Route  exact path="/">
          <Dashboard/>
          </Route>
          <Route  exact path="/Task">
            <Task />
          </Route>
        </Switch>
      </Router>
      
      
    </div>
    </Provider>
  );
}

export default App;
