import React from 'react';
import { SwitchCase, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/';
import Login from './pages/Login/';
import CadAluno from './pages/Cadaluno/';
import SignUp from './pages/Signup';
import DeshBoard from './pages/Dashboard';
import StudentInfo from './pages/StudentInfo';
import NoteFound from './pages/Notefound';

export default  () =>{
    return (
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/registration">
            <CadAluno />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/dashboard">
            <DeshBoard/>
          </Route>

          <Route path="/student/info/:id">
            <StudentInfo/>
          </Route>

          <Route>
            <NoteFound/>
          </Route>

        </Switch>
    )
}