// components/Repos.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { getUserRepositories } from './FetchRepos';

const Repos = () => {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const username = 'turner485'; 
                const repos = await getUserRepositories(username);
      
                const sortedRepos = repos.sort((repoA, repoB) => new Date(repoB.pushed_at) - new Date(repoA.pushed_at));


                setRepositories(sortedRepos);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        };

        fetchRepositories();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='git-hub-block'>
            <ul className='overflow-y-auto'>
                {repositories.map((repo) => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <li className='flex flex-col rounded bg-slate-700 hover:bg-[#7395c0] ease-out duration-300 mb-6 px-6 pt-4 pb-4 min-h-72 relative'>
                            <p className='text-xl font-bold capitalize'>{repo.name.replace(/[-_]/g, ' ')}</p>
                            <p className='text-base'>{repo.description}</p>
                            <p className='created-at text-sm'>Latest Activity: {repo.pushed_at.replace(/[TZ]/g, ' ')}</p>
                            <div className='fa-wrapper fa-icon'>
                                <FontAwesomeIcon icon={faGithub} className="text-4xl text-white absolute right-1 bottom-1" />
                            </div>
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );

};

export default Repos;
