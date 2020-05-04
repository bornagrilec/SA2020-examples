import React, { createRef } from 'react';


const UncontrolledForm = () => {
    let username = createRef();
    let password = createRef();

    const handleChange = () => {
        console.log('Username: ' + username.current.value);
        console.log('Password: ' + password.current.value);
    }

    return (
        <form>
            <div className="row">
                <label htmlFor="username">Username</label>
                <input type="text" name="username"
                    ref={username} onChange={handleChange} />
            </div>
            <div className="row">
                <label htmlFor="password">Password</label>
                <input type="password" name="password"
                    ref={password} onChange={handleChange} />
            </div>
            <div className="row">
                <button>Login</button>
            </div>
        </form>
    );
}

export default UncontrolledForm;


