import {useState, useEffect} from 'react'
import { ReactComponent as ThreeDots } from '../assets/svgs/threedots.svg'
import productIcon from '../assets/images/producthunt.png'
import Header from './Header'
import Fade from 'react-reveal/Fade';
import upvoteIcon from '../assets/svgs/upvote.svg'
const ProductHunt = () => {
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const query = `{
        posts() {
            edges {
                cursor,
                node {
                    id,
                    description,
                    tagline,
                    url,
                    votesCount,
                    name,
                    thumbnail {
                        type,
                        url
                    }
                }
            }
        }
    }`
    const opts = {
        headers : {
            Authorization : `Bearer ${import.meta.env.VITE_KEY}`,
            Accept: 'application/json',
            'Content-type': 'application/json',
    
            
        },
        method: 'POST',
        mode: "cors",
        body: JSON.stringify({ query })
    }
    const getProductList = async () => {
        const response = await fetch('https://api.producthunt.com/v2/api/graphql', opts)
        const trendingList = await response.json();
        setIsLoading(false);
        setProductList(trendingList.data.posts.edges);
    }

    useEffect(() => {
        getProductList();
    }, [])
    return (
        <div>
            <Header 
                icon={productIcon}
                title='Product Hunt'
                borderColor='border-red-300'
                />
            {
                (isLoading === true) ?
                    <div className='flex justify-center my-48 text-7xl'>
                        <ThreeDots fill="#8B5CF6" />
                    </div>
                    :
                    <div>
                        {productList.map(product => {
                            return(
                                <Fade bottom key={product.node.id}>
                                <div className='m-6 bg-white p-4 rounded text-left'>
                                    <a href={product.node.url} target="_blank" rel="noreferrer">
                                        <div className='flex flex-row '>
                                            <img src={product.node.thumbnail.url} alt="product_image" 
                                            className='md:h-20 md:w-20 h-14 w-14 border-2 mr-4 rounded-sm' />
                                            
                                            <div className='flex flex-col my-auto'>
                                                <h2 className='md:text-xl text-sm font-semibold'>
                                                    {product.node.name}
                                                </h2>
                                                <p className='text-xs md:text-sm'>
                                                    {product.node.tagline}
                                                </p>
                                            </div>
                                            <div className='ml-auto border-2 text-center my-2 px-4 h-14 w-14 flex flex-col justify-center'>
                                                <img src={upvoteIcon} alt="upvoteCon" className='h-4 w-4 mx-auto' />
                                                <h3>{product.node.votesCount}</h3>
                                            </div>
                                            
                                        </div>
                                    </a>
                                </div>
                                </Fade>
                            )
                        })}
                    </div>
                
            }
        </div>
    )
}

export default ProductHunt
