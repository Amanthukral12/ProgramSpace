import {useState, useEffect} from 'react'
import { ReactComponent as ThreeDots } from '../assets/svgs/threedots.svg'
import StoryCard from './StoryCard'
const HackerNews = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getNews = async () => {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
            headers: {
                'content-type' : 'application/json'
            }
        });
        const trendingNews = await response.json();
        setIsLoading(false)
        setNews(trendingNews);
    }
    useEffect(() => {
        getNews();
    },[])
    return (
        <div>
           {
           (isLoading === true) ? 
           <div>
               <ThreeDots />
           </div>
           :
           <div>
               {news.slice(0,20).map(newsId => {
                   return (<StoryCard id = {newsId} key={newsId} />)
               })}
           </div>
            }   
        </div>
    )
}

export default HackerNews
