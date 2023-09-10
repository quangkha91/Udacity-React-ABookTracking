import { useEffect, useState } from 'react';
import { getAll } from '../utils/BooksAPI';
import BookShelve from '../components/BookShelve';
import { Link } from 'react-router-dom';

const Home = () => {
    const [isRefesh, setIsRefesh] = useState(true);
    const [booksCurrentlyReading, setBooksCurrentlyReading] = useState([]);
    const [booksWantToRead, setBooksWantToRead] = useState([]);
    const [booksRead, setBooksRead] = useState([]);

    useEffect(() => {
        const getAllBooks = async () => {
            const res = await getAll();
            getStateBooks(res);
        };
        getAllBooks();
    }, [isRefesh]);

    const getStateBooks = (books) => {
        const booksCurrentlyReading = books?.filter((x) => x.shelf === 'currentlyReading');
        setBooksCurrentlyReading(booksCurrentlyReading);

        const booksWantToRead = books?.filter((x) => x.shelf === 'wantToRead');
        setBooksWantToRead(booksWantToRead);

        const booksRead = books?.filter((x) => x.shelf === 'read');
        setBooksRead(booksRead);
    };

    //handle refesh data when change state of book
    const onRefesh = () =>{
        setIsRefesh(!isRefesh);
    }

    return (
        <div className='list-books'>
            <div className='list-books-title'>
                <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
                <div>
                    <BookShelve books={booksCurrentlyReading} title={'Currently Reading'} onReload={onRefesh}/>
                    <BookShelve books={booksWantToRead} title={'Want to Read'} onReload={onRefesh}/>
                    <BookShelve books={booksRead} title={'Read'} onReload={onRefesh}/>
                </div>
            </div>
            <div className='open-search'>
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    );
};

export default Home;
