

import React, { useState } from 'react';

const ControlledForm = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    }

    return (
        <form>
            <div className="row">
                <label htmlFor="username">Username</label>
                <input type="text" name="username"
                    value={data.username}
                    onChange={handleChange} />
            </div>
            <div className="row">
                <label htmlFor="password">Password</label>
                <input type="password" name="password"
                    value={data.password}
                    onChange={handleChange} />
            </div>
            <div className="row">
                <button>Login</button>
            </div>
        </form>
    );
}

export default ControlledForm;




