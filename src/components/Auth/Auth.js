import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginRequest } from '../../actions/auth'
import userIcon from './user.svg';
import passwordIcon from './password.svg';
import './Auth.css';

class Auth extends Component {
    state = {
        userName: '',
        password: ''
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ ...this.state, [name]: value });
    }

    loginRequest = () => {
        this.props.loginRequest(this.state);
    }

    render() {
        return (
            <div className='App'>
                <div className='wrapper'>
                    <div className='auth__window'>
                        <div className='auth__header'>
                            <h1 className='header__title'>Login Form</h1>
                        </div>
                        <form className='auth__form'>
                            <div className='user__wrapper'>
                                <input
                                    className='user__input'
                                    name="userName"
                                    type='text'
                                    placeholder='Username'
                                    onChange={this.handleChange}
                                />
                                <img src={userIcon} className="user__icon" alt="user" />
                            </div>
                            <div className='password__wrapper'>
                                <input
                                    className='password__input'
                                    name="password"
                                    type='password'
                                    placeholder='Password'
                                    onChange={this.handleChange}
                                />
                                <img src={passwordIcon} className="password__icon" alt="pass" />
                            </div>
                            <div className='action__wrapper'>
                                <button className='action__submit' onClick={this.loginRequest}>Sign in</button>
                                <a className='action__link'>Lost Your Password ?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = { loginRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Auth);