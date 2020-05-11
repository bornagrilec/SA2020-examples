import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
    margin: 0 auto;
    max-width: 400px;
    margin-bottom: 40px;
`;

export const SearchBarInput = styled.input`
    border: 1px solid #cecece;
    border-radius: 6px;
    width: 100%;
    line-height: 50px;
    font-size: 17px;
    padding: 0 10px;
    outline: none;

    &:focus {
        border-color: #c59613;
    }
`;