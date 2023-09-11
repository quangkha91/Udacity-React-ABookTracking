import { useEffect, useState } from 'react';
import BookShelve from '../components/BookShelve';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({booksInShelves, onRefesh}) => {
    const [booksCurrentlyReading, setBooksCurrentlyReading] = useState([]);
    const [booksWantToRead, setBooksWantToRead] = useState([]);
    const [booksRead, setBooksRead] = useState([]);

    useEffect(() => {
        getStateBooks(booksInShelves);
    }, [booksInShelves]);

    const getStateBooks = (books) => {
        const filter = (books) => (shelf) => books.filter((book) => book.shelf === shelf);
        const filterBy = filter(books);

        const booksCurrentlyReading = filterBy('currentlyReading');
        setBooksCurrentlyReading(booksCurrentlyReading);

        const booksWantToRead = filterBy('wantToRead');
        setBooksWantToRead(booksWantToRead);

        const booksRead = filterBy('read');
        setBooksRead(booksRead);
    };

    return (
        <div className='list-books'>
            <div className='list-books-title'>
                <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
                <div>
                    <BookShelve
                        books={booksCurrentlyReading}
                        title={'Currently Reading'}
                        onReload={onRefesh}
                    />
                    <BookShelve
                        books={booksWantToRead}
                        title={'Want to Read'}
                        onReload={onRefesh}
                    />
                    <BookShelve books={booksRead} title={'Read'} onReload={onRefesh} />
                </div>
            </div>
            <div className='open-search'>
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    );
};

Home.propTypes = {
    booksInShelves: PropTypes.array.isRequired,
    onRefesh: PropTypes.func.isRequired,
};

export default Home;
