import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart'/>
        </Routes>
    )
}