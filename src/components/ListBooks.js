import Book from './Book';
import PropTypes from 'prop-types';

const ListBooks = ({ books, isSearch, onReload }) => {
    return (
        <ol className='books-grid'>
            {Array.isArray(books) && books.length > 0 &&
                books.map((book) => (
                    <li key={book.id}>
                        <Book book={book} isSearch={isSearch} onReload={onReload} />
                    </li>
                ))}
        </ol>
    );
};

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,  
    isSearch: PropTypes.bool, 
    onReload: PropTypes.func,
};

export default ListBooks;
