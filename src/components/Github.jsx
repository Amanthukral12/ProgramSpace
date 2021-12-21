import React, { useState, useEffect } from 'react'
import { ReactComponent as ThreeDots } from '../assets/svgs/threedots.svg'
const Github = () => {
    const [repoList, setRepoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getRepoList = async () => {
        const response = await fetch('https://gtrend.yapie.me/repositories?since=daily');
        const trendingRepos = await response.json();
        setIsLoading(false);
        setRepoList(trendingRepos);
    }
    useEffect(() => {
        getRepoList();
    }, [])
    return (
        <div>
            {
                (isLoading === true) ? 
                <div className='flex justify-center my-48 text-7xl'>
                   <ThreeDots fill="#8B5CF6" />
                </div>
                :
                <div>
                {repoList.map(repo => {
                    return (
                        <div>
                            <span>{repo.name}</span>
                            <div>{repo.description}</div>
                            <div>{repo.language}</div>
                            <div>{repo.stars}</div>
                            <div>{repo.forks}</div>
                        </div>
                    )
                })}
                </div>
            }
            
        </div>
    )
}

export default Github
