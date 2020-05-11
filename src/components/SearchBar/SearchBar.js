import React from 'react';
import { SearchBarWrapper, SearchBarInput } from './SearchBarStyle';

const SearchBar = (props) => {
    return (
        <SearchBarWrapper>
            <SearchBarInput
                type="text"
                placeholder={props.placeholder}
                disabled={props.disabled}
                onChange={(event) => props.onValueChange(event.target.value)} />
        </SearchBarWrapper>
    );
}

export default SearchBar;