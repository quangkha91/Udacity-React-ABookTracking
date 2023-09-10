import { Link } from "react-router-dom";
import ListBooks from "../components/ListBooks";
import { useState } from "react";
import { search } from "../utils/BooksAPI";

const Search = () => {
    const [books, setBooks] = useState([]);
    const onHandleSearch = async (event) =>{
        const searchValue = event.target.value;
        if(searchValue){
            let res = await search(searchValue, 12);
            if(res.error){
                setBooks([]);
                return;
            }
            setBooks(res);
            return;
        }
        
        setBooks([]);
    }

    return (
        <div className='search-books'>
            <div className='search-books-bar'>
                <Link to='/' className="close-search">Close</Link>
                <div className='search-books-input-wrapper'>
                    <input type='text' placeholder='Search by title, author, or ISBN' onChange={onHandleSearch} />
                </div>
            </div>
            <div className='search-books-results'>
                <ListBooks books={books} isSearch={true}/>
            </div>
        </div>
    );
};

export default Search;
