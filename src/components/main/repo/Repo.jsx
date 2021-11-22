import React from 'react';
import { NavLink } from 'react-router-dom';
import './repo.less'

const Repo = ({ repo }) => {

  return (
    <div className='repo'>
      <div className="repo-header">
        <NavLink to={`/card/${repo.owner.login}/${repo.name}`}>
          <div className="repo-header-name">Репозиторий <span className="bold">{repo.name}</span></div>
        </NavLink>
        <div className="repo-header-stars">Звёзд {repo.stargazers_count}</div>
      </div>
      <div className="repo-last-commit">Последние изменения {repo.updated_at}</div>
      <a href={repo.html_url} className="repo-link">Ссылка на репозиторий</a>
    </div>
  );
}

export default Repo;