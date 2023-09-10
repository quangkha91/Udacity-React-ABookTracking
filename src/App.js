import './App.css';
import { useState } from 'react';
import Search from './pages/Search';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
    //let navigate = useNavigate();

    return (
            <Routes>
                <Route
                    exact
                    path='/'
                    element={<Home/>}
                />
                <Route
                    path='/search'
                    element={
                        <Search/>
                    }
                />
            </Routes>
        
        // <div className='app'></div>
    );
}

export default App;
