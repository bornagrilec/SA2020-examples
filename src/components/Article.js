import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../context/AuthContext';

// Article component consumer
const Article = (props) => {
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        console.log(isLoggedIn);
    })

    return (
        <>
            <h2>Some article title</h2>
            <p>Description content...</p>
            {isLoggedIn ? <button>Edit</button> : null}
        </>
    );
}

export default Article;