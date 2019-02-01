import React from 'react';
import './styles/_login.scss';

export default () => {
    return (
        <div className="login-form-container">
            <form className="login-form" action="/home" method="get">
                <div>
                    <label>Email</label>
                    <div>
                        <input type="text"/>
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <input type="password"/>
                    </div>
                </div>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

