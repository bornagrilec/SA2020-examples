import React, { useState, useEffect } from 'react';


const SessionStorage = (props) => {
    const [token, setToken] = useState(true);

    useEffect(() => {
        setToken(sessionStorage.getItem('token'));
    })

    const handleSetToken = (key, value) => {
        sessionStorage.setItem(key, value);
        setToken(sessionStorage.getItem(key));
    }

    const handleRemoveToken = (key) => {
        sessionStorage.removeItem(key);
        setToken(sessionStorage.getItem(key));
    }

    return (
        <>
            <h2>Session storage implementation</h2>
            <p>{token ? `Token value: ${token}` : 'Token does not exists'}</p>
            <button onClick={() => handleSetToken('token', 'sessionStorage 12$34#5%667877242ergdfgh3564', 2)}>Create new Token</button>
            <button onClick={() => handleRemoveToken('token')}>Remove token</button>
        </>
    );
}

export default SessionStorage;