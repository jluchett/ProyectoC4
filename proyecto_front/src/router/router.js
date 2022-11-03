import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '../components/index';
import Login from '../components/login/login';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path = "/index" element ={<Inicio/>}/>
                <Route exact path = "/" element ={<Inicio/>}/>
                <Route path='*' element={(
                    <h1>404 page no found</h1>
                )}/>
            </Routes>
        </Router>
    );
}
 
