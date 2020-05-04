import React from 'react';

// Main App component
const ClassicForm = () => {
    return (
        <form action="/login" method="POST">
            <div className="row">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
            </div>
            <div className="row">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>
            <div className="row">
                <button>Login</button>
            </div>
        </form>
    );
}

export default ClassicForm;