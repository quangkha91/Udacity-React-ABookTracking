import './App.css';
import { useEffect, useState } from 'react';
import { getAll } from './utils/BooksAPI';
import Search from './pages/Search';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
    const [books, setBooks] = useState([]);
    const [isRefesh, setIsRefesh] = useState(true);

    useEffect(() => {
        const getAllBooks = async () => {
            const res = await getAll();
            setBooks(res);
        };
        getAllBooks();
    }, [isRefesh]);

    //handle refesh data when change state of book
    const onRefesh = () => {
        setIsRefesh(!isRefesh);
    };

    return (
        <Routes>
            <Route exact path='/' element={<Home booksInShelves={books} onRefesh={onRefesh} />} />
            <Route path='/search' element={<Search booksInShelves={books} onRefesh={onRefesh}/>} />
        </Routes>
    );
}

export default App;
