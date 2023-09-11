import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListBooks from '../components/ListBooks';
import { search } from '../utils/BooksAPI';
import { useDebouncedCallback } from 'use-debounce';
import PropTypes from 'prop-types';

const Search = ({ booksInShelves, onRefesh }) => {
    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearch = useDebouncedCallback(async (value) => {
        if (value) {
            let res = await search(value, 12);
            if (res.error) {
                setBooks([]);
                return;
            }
            setBooks(res);
        } else {
            setBooks([]);
        }
    }, 300);

    const onHandleSearch = async (event) => {
        const newValue = event.target.value;
        setSearchValue(newValue);
        debouncedSearch(newValue);
    };

    return (
        <div className='search-books'>
            <div className='search-books-bar'>
                <Link to='/' className='close-search'>
                    Close
                </Link>
                <div className='search-books-input-wrapper'>
                    <input
                        type='text'
                        placeholder='Search by title, author, or ISBN'
                        onChange={onHandleSearch}
                        value={searchValue}
                    />
                </div>
            </div>
            <div className='search-books-results'>
                <ListBooks books={books} isSearch={true} onReload={onRefesh} booksInShelves={booksInShelves} />
            </div>
        </div>
    );
};

Search.propTypes = {
    booksInShelves: PropTypes.array,
    onRefesh: PropTypes.func.isRequired,
};
export default Search;
