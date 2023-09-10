import BookShelfChange from './BookShelfChanger';
import PropTypes from 'prop-types';
import { update } from '../utils/BooksAPI';

const Book = ({ book, isSearch, onReload }) => {
    const onChangeShelf = async (shelf) =>{
        if(book.shelf === shelf){
            return;
        }
        //Update bookshelve
        await update(book, shelf);
        //Call refesh data if on HomePage
        if(!isSearch) onReload();
    }

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
                <BookShelfChange shelf={isSearch ? '' :  book.shelf} onHandleChange={onChangeShelf}/>
            </div>
            <div className='book-title'>{book.title}</div>
            <div className='book-authors'>{book.authors}</div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    isSearch: PropTypes.bool, 
    onReload: PropTypes.func,   
};

export default Book;
