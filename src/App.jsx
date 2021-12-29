import { BrowserRouter, Route } from 'react-router-dom';
import Dev from './components/Dev';
import Github from './components/Github'
import HackerNews from './components/HackerNews';
import Hashnode from './components/Hashnode';
import ProductHunt from './components/ProductHunt';
import Sidebar from './components/Sidebar';
function App() {

  return (
    <div className="text-center mx-auto">
     <BrowserRouter>
       <div className="flex md:flex-row flex-col">
       <div className='bg-purple-500 md:w-1/2 md:min-h-screen h-full py-2 xl:py-20'>
         <div className='m-8'>
           <h1 className='text-4xl font-bold text-white'>ProgramSpace</h1>
           <span className='text-white italic font-semibold'>Get top posts from the best developer platforms</span>
         </div>
         <Sidebar />
      
       <div className='mt-12 text-white bg-gray-800 w-36 p-2 rounded mx-auto'>
         <a href="https://github.com/Amanthukral12/ProgramSpace" target="_blank" rel='noreferrer' className='flex'>
           <span className='text-sm font-semibold'>
             ⭐ Star on Github
           </span>
         </a>
       </div>
       </div>
       <div className='md:w-1/2 bg-gray-100 overflow-y-scroll max-h-screen'>
        
            <Route exact path="/" component={Hashnode} />
            <Route exact path="/github" component={Github} />
            <Route exact path="/dev" component={Dev} />
            <Route exact path="/hackernews" component={HackerNews} />
            <Route exact path="/producthunt" component={ProductHunt} />
         
       </div>
       </div>
       
        
       
     </BrowserRouter>
    </div>
  )
}

export default App
