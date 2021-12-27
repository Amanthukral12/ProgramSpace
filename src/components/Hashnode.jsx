import {useState, useEffect} from 'react'
import { ReactComponent as ThreeDots } from '../assets/svgs/threedots.svg'
import Header from './Header';
import HashnodeIcon from '../assets/images/hashnode.png'
import Fade from 'react-reveal/Fade';
const query = `{
    storiesFeed(type: BEST){
        title,
        author {
                username,
                blogHandle,
                publicationDomain,
                name
        },
        coverImage,
        responseCount,
        cuid,
        slug,
    }
}`;
const Hashnode = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedPost, setFeedPost] = useState([]);
    const getFeedPosts = async () => {
        const response = await fetch('https://api.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({query})
        })
        const trendingPosts = await response.json();
        setIsLoading(false);
        setFeedPost(trendingPosts.data.storiesFeed)
    }
    useEffect(() => {
        getFeedPosts();
    },[])
    return (
        <div>
            <Header 
                icon={HashnodeIcon}
                title='Hashnode'
                borderColor='border-blue-400'
                />
            {
                (isLoading === true) ? 
                <div className='flex justify-center my-48 text-7xl'>
                   <ThreeDots fill="#8B5CF6" />
                </div>
                :
                <div className="flex flex-row flex-wrap justify-center p-2">
                {feedPost.map(post => {
                    return (
                        <Fade bottom key={post.cuid}>
                            <a href={`https://${post.author.publicationDomain === '' ? post.author.blogHandle + '.hashnode.dev/': post.author.publicationDomain + '/'}${post.slug}`}
                             target="_blank" rel="noreferrer" >
                                 <div className='w-72 h-auto py-auto shadow flex flex-col bg-white rounded-md p-4 text-left m-2'>
                                <img src={post.coverImage === '' ? 'https://picsum.photos/seed/picsum/200/150' : post.coverImage} alt="cover-image" className='rounded h-36' />
                                <h3 className='text-md font-medium mt-2'>{post.title}</h3>
                                <div className='text-sm font-semibold mt-2'>{post.author.name}</div>
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

export default Hashnode
