import React, {useEffect, useState} from "react";
import Repo from './repo.js'

export default () => {
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);
    useEffect(() => {
        const data = sessionStorage.getItem("repos");
        let myRepos;

        if (data) {
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1, 13);
            return setRepos(myRepos)
        }

        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/alexismunera98/repos")
            myRepos = await response.json();
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1, 13);
            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            setRepos(myRepos);
        }

        fetchRepos();
    }, [])
    return (<div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold text-yellow-600">Here's my repos</h2>
                <p>Colab and contrib the code</p>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo) => {
                        return <Repo repo={repo} key={repo.id}/>
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/alexismunera98" className="btn" target="_blank"
                   rel="noopener noreferrer">See more in GitHub ({reposCount})</a>
            </div>
        </div>
    )
}
