import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../actions/repos";
import './main.less';
import Repo from "./repo/Repo";

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  const isFetching = useSelector(state => state.repos.isFetching);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(getRepos())
  }, []);

  const handleChange = (event) => {
    setSearchValue(() => event.target.value);
  };

  const handleClick = (event) => {
    dispatch(getRepos(searchValue));
  };

  return (
    <div className='main'>
      <div className="search">
        <input 
          type="text" 
          placeholder="Input repo name" 
          className="search-input" 
          value={searchValue} 
          onChange={handleChange}
        />
        <button onClick={handleClick} className="search-btn">Search</button>
      </div>
      {isFetching 
        ? <div className="fetching">

        </div>
        : repos.map(repo => 
        <Repo repo={repo}/>
      )}
    </div>
  )
};

export default Main;