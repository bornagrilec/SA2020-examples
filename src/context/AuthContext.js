import React, { createContext, useState } from 'react';

// Define context
const AuthContext = createContext();

// Define provider
const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    );
}

// Define consumer
const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthProvider, AuthConsumer };