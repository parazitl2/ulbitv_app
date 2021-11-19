import React from 'react';
import './repo.less'

const Repo = ({ repo }) => {

  return (
    <div className='repo'>
      <div className="repo-header">
        <div className="repo-header-name">Репозиторий <span className="bold">{repo.name}</span></div>
        <div className="repo-header-stars">Звёзд {repo.stargazers_count}</div>
      </div>
      <div className="repo-last-commit">Последние изменения {repo.updated_at}</div>
      <a href={repo.html_url} className="repo-link">Ссылка на репозиторий</a>
    </div>
  );
}

export default Repo;