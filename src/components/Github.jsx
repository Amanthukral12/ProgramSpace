import React, { useState, useEffect } from 'react'
import { ReactComponent as ThreeDots } from '../assets/svgs/threedots.svg'
import starIcon from '../assets/svgs/star.svg'
import forkIcon from '../assets/svgs/fork.svg'
import githubIcon from '../assets/images/github.png'
import Header from './Header';
import Fade from 'react-reveal/Fade';
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
            <Header 
                icon={githubIcon}
                title='Github'
                borderColor='border-purple-400'
                />
            {
                (isLoading === true) ? 
                <div className='flex justify-center my-48 text-7xl'>
                   <ThreeDots fill="#8B5CF6" />
                </div>
                :
                <div className='flex flex-col justify-center px-8 py-2'>
                {repoList.map(repo => {
                    return (
                        <Fade bottom key={repo.name}>
                            <div className='bg-white p-4 px-8 m-2 text-left rounded-sm'>
                            <a href={repo.url} target="_blank" rel="noreferrer">
                            <h3 className='text-xl font-semibold text-blue-500'>{repo.name}</h3>
                            <span className='text-md'>{repo.description}</span>
                            <div className='flex flex-row my-2'>
                                <div className='flex mr-2'>
                                    <div className='h-4 w-4 rounded-full m-1 mr-2' style={{backgroundColor: `${repo.languageColor}`}}></div>
                                    <h3>{repo.language}</h3>
                                </div>

                                <div className='flex mr-2'>
                                    <img src={starIcon} alt="starIcon" 
                                    className='h-4 w-4 m-1' />
                                    <h3>{repo.stars}</h3>
                                </div>

                                <div className='flex mr-2'>
                                    <img src={forkIcon} alt="forkIcon"
                                    className='h-4 w-4 m-1' />
                                    <h3>{repo.forks}</h3>
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

export default Github
