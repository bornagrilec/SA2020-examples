import React, { useState, useEffect } from 'react';
import { cookieExists, getCookie, setCookie, removeCookie } from '../lib/cookie-helper/CookieHelper';


const VanillaCookie = (props) => {
    const [sidCookie, setSidCookie] = useState('');

    useEffect(() => {
        setSidCookie(getCookie('sid'));
    })

    const handleSetCookie = (name, value, expires) => {
        setCookie(name, value, expires);
        setSidCookie(getCookie('sid'));
    }

    const handleRemoveCookie = (name) => {
        removeCookie(name);
        setSidCookie(getCookie('sid'));
    }

    return (
        <>
            <h2>Vanilla Cookie implementation</h2>
            <p>{cookieExists('sid') ? `Cookie name: ${getCookie('sid')}` : 'Cookie does not exists'}</p>
            <button onClick={() => handleSetCookie('sid', '12$34#5%667877242ergdfgh3564', 2)}>Create new Cookie</button>
            <button onClick={() => handleRemoveCookie('sid')}>Remove Cookie</button>
        </>
    );
}

export default VanillaCookie;