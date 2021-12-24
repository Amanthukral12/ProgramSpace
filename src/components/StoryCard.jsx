import {useState, useEffect} from 'react'
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
        
        <div>
            <a href={storyDetails.url}>
                <h2>{storyDetails.title}</h2>
            </a>
        </div>
    )
}

export default StoryCard
