import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Contact from './screens/Contact';
import InformationProduct from './screens/InformationProduct';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/info/:id' element={<InformationProduct/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart'/>
        </Routes>
    )
}