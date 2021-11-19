import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app.less';
import Main from "./main/Main";

const App = () => {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default App;