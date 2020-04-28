import React, { useState, useEffect } from 'react';

import Cookies from 'js-cookie';

// Component that use js-cookie library
// You can find a lot of similar Cookie libraries on Internet
// Use one that fits you most
const JsCookie = (props) => {
    const [sidCookie, setSidCookie] = useState('');

    useEffect(() => {
        setSidCookie(Cookies.get('sid'));
    })

    const handleSetCookie = (name, value, expires) => {
        Cookies.set(name, value, { expires: expires });
        setSidCookie(Cookies.get('sid'));
    }

    const handleRemoveCookie = (name) => {
        Cookies.remove(name);
        setSidCookie(Cookies.remove('sid'));
    }

    return (
        <>
            <h2>JS Cookie module implementation</h2>
            <p>{Cookies.get('sid') ? `Cookie name: ${Cookies.get('sid')}` : 'Cookie does not exists'}</p>
            <button onClick={() => handleSetCookie('sid', '12$34#5%667877242ergdfgh3564', 2)}>Create new Cookie</button>
            <button onClick={() => handleRemoveCookie('sid')}>Remove Cookie</button>
        </>
    );
}

export default JsCookie;