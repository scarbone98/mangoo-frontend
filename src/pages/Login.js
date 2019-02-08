import React from 'react';
import './styles/_login.scss';
import Input from '../components/general/input/Input';
import { Button } from 'reactstrap';
export default () => {
    return (
        <div className="login-main-container">
            <div className="landing-page-top">
                <button>
                    Log In
                </button>
                <button>
                    Sign Up
                </button>
            </div>
            <div className="login-form-container">
                <form className="login-form" action="/home" method="get">
                    <p>Need some work done? Find what you need.</p>
                    <div className="input-container">
                        <Input label={'Email'} type={'text'}/>
                    </div>
                    <div className="input-container">
                        <Input label={'Password'} type={'password'}/>
                    </div>
                    <Button color="danger" type="submit">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}

