import { Switch, Route } from 'react-router-dom'

import './App.css';
import NavBar from './components/NavBar'
import Signup from './pages/Signup'

function App() {
  return (
    <div className="grid grid-rows-layout">
      <div className="row-span-1 sticky top-0 bg-blue">
        <div className="w-4/5 mx-auto">
          <NavBar authenticated={false} />
        </div>
      </div>
      <div className="row-span-1">
        <div className="w-4/5 mx-auto">
          <Switch>
            <Route path="/" exact >
              <h1>Header 1</h1>
              <h2>Header 2</h2>
              <h3>Header 3</h3>
              <h4>Header 4</h4>
              <h5>Header 5</h5>
              <h6>Header 6</h6>
              <p>Paragraph</p>
              <input type="text" />
              <button className="btn-primary">Click Me!</button>
              <a className="text-orange">Nav Link</a>
              <a className="text-orange font-bold">Nav Link Active</a>
            </Route>
            <Route path="/signup" component={Signup} />
            <Route>
              404! Page not found
            </Route>
          </Switch>
        </div>
      </div>
      <div className="row-span-1 bg-blue">
        <div className="w-4/5 mx-auto">
          Footer
        </div>
      </div>
    </div>
  );
}

export default App;
