import {useState, useEffect} from 'react'
import { ReactComponent as ThreeDots } from '../assets/svgs/threedots.svg'
import Header from './Header';
import DevIcon from '../assets/images/dev.webp'
import Fade from 'react-reveal/Fade';
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
                    <div className='flex flex-row flex-wrap justify-center p-2'>
                        {feedPost.map(post => {
                            return(
                                <Fade bottom key={post.id}>
                                <a href={post.url} target="_blank" rel="noreferrer">
                                    <div className='w-72 h-auto py-auto shadow rounded-md bg-white p-4 text-left m-2'>
                                        <img src={post.social_image === '' ? 'https://picsum.photos/seed/picsum/200/150' : post.social_image} alt="cover-image" className='rounded h-36' />
                                        <p className='text-md font-medium mt-2'>{post.title}</p>
                                        <p className='text-sm font-semibold mt-2'>{post.user.name}</p>
                                    </div>
                                </a>
                                </Fade>
                            )
                        })}
                    </div>
            }
        </div>
    )
}

export default Dev
