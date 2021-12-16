import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dev from './components/Dev';
import Github from './components/Github'
import HackerNews from './components/HackerNews';
import Hashnode from './components/Hashnode';
import ProductHunt from './components/ProductHunt';
function App() {

  return (
    <div className="text-center mx-auto">
     <Router>
       <div className="flex md:flex-row flex-col">
       <div className='bg-purple-500 md:w-1/2 md:h-screen h-full py-20'>
         <div>
           <h1>ProgramSpace</h1>
           <span>Get top posts from the best developer platforms</span>
         </div>
       </div>
       <div>
          <Switch>
            <Route exact path="/" component={Hashnode} />
            <Route exact path="/github" component={Github} />
            <Route exact path="/dev" component={Dev} />
            <Route exact path="/hackernews" component={HackerNews} />
            <Route exact path="/producthunt" component={ProductHunt} />
          </Switch>
       </div>
       </div>
       
        
       
     </Router>
    </div>
  )
}

export default App
