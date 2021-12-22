import {useState, useEffect} from 'react'
import { ReactComponent as ThreeDots } from '../assets/svgs/threedots.svg'
const query = `{
    storiesFeed(type: BEST){
        title,
        author {
                username,
                blogHandle,
                publicationDomain,
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
            {
                (isLoading === true) ? 
                <div className='flex justify-center my-48 text-7xl'>
                   <ThreeDots fill="#8B5CF6" />
                </div>
                :
                <div>
                {feedPost.map(post => {
                    return (
                        <div key={post.cuid}>
                            <a href={`https://${post.author.publicationDomain === '' ? post.author.blogHandle + '.hashnode.dev/': post.author.publicationDomain + '/'}${post.slug}`}>
                                <img src={post.coverImage} alt="" />
                                <span>{post.title}</span>
                                <div>{post.author.blogHandle}</div>
                                <div>{post.dateFeatured}</div>
                            </a>
                        </div>
                    )
                })}
                </div>
            }
            
        </div>
    )
}

export default Hashnode
