import {useState, useEffect} from 'react'
import { ReactComponent as ThreeDots } from '../assets/svgs/threedots.svg'
import Header from './Header';
import DevIcon from '../assets/images/dev.webp'
const Dev = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedPost, setFeedPost] = useState([]);

    const getFeedPost = async () => {
        const response = await fetch('https://dev.to/api/articles', {
            headers: {
                'content-type': 'application/json'
            }
        })
        const trendingPosts= await response.json();
        setIsLoading(false);
        setFeedPost(trendingPosts);
    }
    useEffect(() => {
        getFeedPost();
    },[]);
    return (
        <div>
            <Header 
                icon={DevIcon}
                title='Dev.to'
                borderColor='border-gray-400'
                />
            {
                (isLoading === true) ? 
                    <div>
                        <ThreeDots />
                    </div>
                    :
                    <div>
                        {feedPost.map(post => {
                            return(
                                <a href={post.url} key={post.id}>
                                    <div>
                                        <img src={post.cover_image} alt="" />
                                        <p>{post.title}</p>
                                        <p>{post.user.name}</p>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
            }
        </div>
    )
}

export default Dev
