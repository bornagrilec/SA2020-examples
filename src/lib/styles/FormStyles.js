import styled from 'styled-components';

export const Form = styled.form`
    margin: 0 auto;
    margin-bottom: 50px;
`;

export const Input = styled.input`
    border: 1px solid #cecece;
    border-radius: 6px;
    width: 100%;
    line-height: 50px;
    font-size: 17px;
    padding: 0 10px;
    outline: none;
    margin-bottom: 20px;

    &:focus {
        border-color: #c59613;
    }
`;

export const Button = styled.button`
    margin: 0 auto;
    display: block;
    width: 160px;
    line-height: 40px;
    text-transform: uppercase;
    text-align: center;
    background-color: #c59613;
    border-radius: 6px;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    transition: all 0.3s ease-out;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
        background-color: #9e7911;
    }

    &:disabled {
        pointer-events: none;
        opacity: 0.5;
    }
`;