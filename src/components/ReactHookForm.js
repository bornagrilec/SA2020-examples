import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" ref={register} />
            </div>
            <div className="row">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" ref={register({
                    required: {
                        value: true,
                        message: 'Password is required',
                    },
                    minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters long',
                    },
                })} />
                {errors.password &&
                    <p className="error">{errors.password.message}</p>}
            </div>
            <div className="row">
                <button>Login</button>
            </div>
        </form>
    );
}

export default ReactHookForm;




