import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../components/login/login';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<Login/>}/>
                <Route path='*' element={(
                    <h1>404 page no found</h1>
                )}/>
            </Routes>
        </Router>
    );
}
 
