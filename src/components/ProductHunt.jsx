import {useState, useEffect} from 'react'
import { ReactComponent as ThreeDots } from '../assets/svgs/threedots.svg'
import productIcon from '../assets/images/producthunt.png'
import Header from './Header'
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
                    <div>
                        <ThreeDots />
                    </div>
                    :
                    <div>
                        {productList.map(product => {
                            return(
                                <div>
                                    <a href={product.node.url}>
                                        <div>
                                            <img src={product.node.thumbnail.url} alt="" />
                                            <div>
                                                <h2>
                                                    {product.node.name}
                                                </h2>
                                                <span>
                                                    {product.node.tagline}
                                                </span>
                                            </div>
                                            <div>
                                                <span>{product.node.votesCount}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                
            }
        </div>
    )
}

export default ProductHunt
