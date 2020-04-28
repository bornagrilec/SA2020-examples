import React, { useState, useEffect } from 'react';


const LocalStorage = (props) => {
    const [token, setToken] = useState(true);

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    })

    const handleSetToken = (key, value) => {
        localStorage.setItem(key, value);
        setToken(localStorage.getItem(key));
    }

    const handleRemoveToken = (key) => {
        localStorage.removeItem(key);
        setToken(localStorage.getItem(key));
    }

    return (
        <>
            <h2>Local storage implementation</h2>
            <p>{token ? `Token value: ${token}` : 'Token does not exists'}</p>
            <button onClick={() => handleSetToken('token', 'localStorage 12$34#5%667877242ergdfgh3564', 2)}>Create new Token</button>
            <button onClick={() => handleRemoveToken('token')}>Remove token</button>
        </>
    );
}

export default LocalStorage;