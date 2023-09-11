import React from 'react';
import BookShelfChange from './BookShelfChanger';
import PropTypes from 'prop-types';
import { update } from '../utils/BooksAPI';

const Book = ({ book, onReload }) => {
    const onChangeShelf = async (shelf) => {
        if (book.shelf === shelf) {
            return;
        }
        //Update bookshelve
        await update(book, shelf);
        book.shelf = shelf;
        //Call refesh data if on HomePage
        onReload();
    };

    return (
        <div className='book'>
            <div className='book-top'>
                <div
                    className='book-cover'
                    style={{
                        width: 128,
                        height: 174,
                        backgroundImage: `url(${book.imageLinks?.smallThumbnail})`,
                    }}
                ></div>
                <BookShelfChange shelf={book.shelf ?? 'none'} onHandleChange={onChangeShelf} />
            </div>
            <div className='book-title'>{book.title}</div>
            <div className='book-authors'>{book.authors}</div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onReload: PropTypes.func.isRequired,
};

export default React.memo(Book);
