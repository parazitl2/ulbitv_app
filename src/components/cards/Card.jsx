import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getCurrentRepo, getContributors } from "../actions/repos";
import './card.less';

const Card = () => {
  const navigate = useNavigate();
  const { username, reponame } = useParams();
  const [ repo, setRepo ] = useState({owner: {}});
  const [ contributors, setContributors ] = useState([]);
  const handleClick = useCallback((e) => {
    navigate(-1);
  });

  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo);
    getContributors(username, reponame, setContributors)
  }, [getCurrentRepo, getContributors, username, reponame, setRepo]);

  return (
    <div>
      <button onClick={handleClick} className="back-button">BACK</button>
      <div className="card">
        <img src={repo.owner.avatar_url} alt="avatar" />
        <div className="name">{repo.name}</div>
        <div className="stars">{repo.stargazers_count}</div>
      </div>
      {contributors.map((cont, index)=> (
        <div key={cont.login}>{index + 1}. {cont.login}</div>
      ))}
    </div>
  );
};

export default Card;