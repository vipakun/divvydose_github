import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PullRequests from './PullRequests.js';
import SinglePRDetails from './SinglePRDetails';

const NoMatchRoute = () => {
  <div>404 Page</div>
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={PullRequests} />
        <Route path='/pr/:prId' exact component={SinglePRDetails} />
        <Route component={NoMatchRoute} />
      </Switch>
    </Router>
  );
}

export default App;
