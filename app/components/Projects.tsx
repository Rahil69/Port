import React, { useEffect, useState } from 'react';

type Repo = {
  id: number;
  name: string;
  languages_url: string;
  stargazers_count: number;
  html_url: string;
  mainLanguage?: string;
};

const Project = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Rahil69/repos?per_page=5&sort=updated')
      .then((res) => res.json())
      .then(async (data) => {
        const reposWithLang = await Promise.all(
          data.map(async (repo: Repo) => {
            const langRes = await fetch(repo.languages_url);
            const langs: { [key: string]: number } = await langRes.json();
            const mainLanguage = Object.keys(langs)[0] || 'N/A';
            return { ...repo, mainLanguage };
          })
        );
        setRepos(reposWithLang);
      });
  }, []);

  return (
    <div className='font-mono'>
      <h3 className="text-lg  mb-4 text-gray-200 ">Github Repositories</h3>
      <ul className="flex flex-col md:flex-row gap-8 justify-center">
      {repos.map((repo) => (
          <li key={repo.id} className="p-6 rounded-lg bg-[#181818] shadow text-left w-full md:w-72">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">
              {repo.name}
            </a>
            <div className="text-sm text-gray-400 mt-2 flex items-center justify-between">
              <span>
                Language: <span className="font-medium text-gray-200">{repo.mainLanguage}</span>
              </span>
              <span className="flex items-center ml-7">
                <span className="text-yellow-400 text-lg ">⭐</span>
                {repo.stargazers_count}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;