import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Github from './components/Github'
function App() {

  return (
    <div className="text-center mx-auto">
     <Router>
       <Switch>
      <Route exact path="/" component={Github} />
      </Switch>
     </Router>
    </div>
  )
}

export default App
