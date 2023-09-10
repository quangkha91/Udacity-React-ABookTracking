import { useEffect, useState } from "react";
import {ShelfOptions} from "../utils/Constants";
import PropTypes from 'prop-types';

const BookShelfChange = ({shelf, onHandleChange}) => {
    const [selectedValue, SetSelectedValue] = useState('');
    const [options, SetOption] = useState([])
    useEffect(()=>{
        let opts = ShelfOptions.map(x => (x.value === shelf ? { ...x, disabled: true } : x));
        SetOption(opts);
        SetSelectedValue(shelf);
    },[shelf]);

    const onChange = (event) => {
        onHandleChange(event.target.value);
        SetSelectedValue(event.target.value);
    }

    return (
        <div className='book-shelf-changer'>
            <select value={selectedValue} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} disabled={option.disabled} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

BookShelfChange.propTypes = {
    shelf: PropTypes.string.isRequired,
    onHandleChange: PropTypes.func.isRequired,
};

export default BookShelfChange;
