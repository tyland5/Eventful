
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Sample} from './components/Sample';
import FeedArea from './components/FeedArea';
import Editpostarea from './components/Editpostarea';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <p className="filter-btn">Filter</p>
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
          <Route path="/home">
            < FeedArea />
          </Route>
          <Route path="/edit">
            < Editpostarea />
          </Route>
        </Switch>
      </BrowserRouter>
      <Sample />
    </div>
  );
}

export default App;
