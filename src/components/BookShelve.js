//import Book from "./Book";
import ListBooks from './ListBooks';
import PropTypes from 'prop-types';

const BookShelve = ({ title, books, onReload}) => {
    return (
        <div className='bookshelf'>
            <h2 className='bookshelf-title'>{title}</h2>
            <div className='bookshelf-books'>
                <ListBooks books={books} isSearch={false} onReload={onReload} />
            </div>
        </div>
    );
};

BookShelve.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,    
    onReload: PropTypes.func,
};
export default BookShelve;
