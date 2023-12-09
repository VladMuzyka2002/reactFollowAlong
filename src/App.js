import NavBar from './components/NavBar';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path='/'> 
              <Home />
            </Route>
            <Route path='/create'> 
              <Create />
            </Route>
            <Route path='/blogs/:id'> 
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


function Obsolete1() {
  const title = "MONKEY GANG";
  const toneyone = 19;
  const YEAH = {
    name: "Michiel",
    age: toneyone + 10
  }
  return (
    <div className="App">
      <div className="content">
        <h1>The title is: {title}</h1>
        <h2>{YEAH.age + 2}</h2>
      </div>
    </div>
  );
}

export default App;
