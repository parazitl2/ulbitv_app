import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './app.less';
import Card from "./cards/Card";
import Main from "./main/Main";

const App = () => {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Main />}/>
          <Route exact path='/card/:username/:reponame' element={<Card />}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default App;