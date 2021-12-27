import {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade';
const StoryCard = ({id}) => {
    const [storyDetails, setStoryDetails] = useState({})
    const getDetails = async (id) => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {
            headers: {
                'Content-type': 'application/json',
            },
        });
        const trendingStories = await response.json();
        setStoryDetails(trendingStories);
    }
    useEffect(() => {
        getDetails(id);
    },[])
    return (
        <Fade bottom key={storyDetails.id}>
        <div className='bg-white px-4 shadow rounded p-3 text-xl text-left m-1 border-l-4 text-gray-700'>
            <a href={storyDetails.url}>
                <h2>{storyDetails.title}</h2>
            </a>
        </div>
        </Fade>
    )
}

export default StoryCard
