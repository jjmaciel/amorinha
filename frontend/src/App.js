import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './Routes';
import { Template } from './components/MainComponents';
import './App.css';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

function App() {

  const dispatch = useDispatch();
  const name = useSelector(state => state.user.name)

  return (
    <BrowserRouter>
      <Template>
        <Header>

        </Header>
               
        <Routes/>

        <Footer/>        
      </Template>
    </BrowserRouter>
  );
}

export default App;
