import React, { createContext, useState } from 'react';

// Define context
const AuthContext = createContext();

// Define provider
const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <AuthContext.Provider value={isLoggedIn}>
            {props.children}
        </AuthContext.Provider>
    );
}

// Define consumer
const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthProvider, AuthConsumer };