import { Link } from "react-router-dom"
import hashnodeIcon from '../assets/images/hashnode.png';
import devIcon from '../assets/images/dev.webp';
import hackernewsIcon from '../assets/images/hackernews.png';
import producthuntIcon from '../assets/images/producthunt.png';
import githubIcon from '../assets/images/github.png';
const Sidebar = () => {
    return (
        <div>
           <Link to="/" >
                <div>
                    <img src={hashnodeIcon} alt="logo" />
                    <p>Hashnode</p>
                </div>   
            </Link>

            <Link to="/dev" >
                <div>
                    <img src={devIcon} alt="logo" />
                    <p>Dev.to</p>
                </div>   
            </Link>
            
            <Link to="/hackernews" >
                <div>
                    <img src={hackernewsIcon} alt="logo" />
                    <p>HackerNews</p>
                </div>   
            </Link>

            <Link to="/producthunt" >
                <div>
                    <img src={producthuntIcon} alt="logo" />
                    <p>Product Hunt</p>
                </div>   
            </Link>

            <Link to="/github" >
                <div>
                    <img src={githubIcon} alt="logo" />
                    <p>Github</p>
                </div>   
            </Link>  
        </div>
    )
}

export default Sidebar
