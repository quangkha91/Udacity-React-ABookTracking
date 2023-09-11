import Book from './Book';
import PropTypes from 'prop-types';

const ListBooks = ({ books, isSearch, onReload, booksInShelves }) => {
    return (
        <ol className='books-grid'>
            {Array.isArray(books) &&
                books.length > 0 &&
                books.map((book) => {
                    if (isSearch) {
                        booksInShelves?.forEach((b) => {
                            if (b.id === book.id) {
                                book.shelf = b.shelf;
                                return;
                            }
                        });
                    }
                    return (
                        <li key={book.id}>
                            <Book book={book} onReload={onReload} />
                        </li>
                    );
                })}
        </ol>
    );
};

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    isSearch: PropTypes.bool,
    onReload: PropTypes.func.isRequired,
    booksInShelves: PropTypes.array,
};

export default ListBooks;
