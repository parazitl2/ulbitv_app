import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../reducers/reposReducer";
import { getRepos } from "../actions/repos";
import { createPages } from "../utils/pagesCreator";
import './main.less';
import Repo from "./repo/Repo";

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  const isFetching = useSelector(state => state.repos.isFetching);
  const currentPage = useSelector(state => state.repos.currentPage);
  const totalCount = useSelector(state => state.repos.totalCount);
  const perPage = useSelector(state => state.repos.perPage);
  const [searchValue, setSearchValue] = useState("");
  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];
  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage))
  }, [currentPage]);

  const handleChange = (event) => {
    setSearchValue(() => event.target.value);
  };

  const handleSearchClick = (event) => {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentValue, perPage));
  };

  const pageClickHandler = (page) => {
    dispatch(setCurrentPage(page));
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
        <button onClick={handleSearchClick} className="search-btn">Search</button>
      </div>
      {isFetching 
        ? <div className="fetching">

        </div>
        : repos.map(repo => 
        <Repo repo={repo}/>
      )}
      <div className="pages">
        {pages.map((page, index) => 
          <span 
            key={index} 
            className={currentPage === page ? "current-page" : "page"}
            onClick={(e) => pageClickHandler(page)}
          >
            {page}
          </span>)}
      </div>
    </div>
  )
};

export default Main;