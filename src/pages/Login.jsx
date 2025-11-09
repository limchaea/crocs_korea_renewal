import React from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import './scss/login.scss';

const Login = () => {
    return (
        <div className="sub_page">
            <div className="inner">
                <div className="login_wrap">
                    <Title title="Login" />
                    <LoginForm />
                    <p>
                        <Link>비회원 주문조회</Link>
                    </p>
                </div>
                <div className="crocsclub_wrap">
                    <Title subTitle="CrocsClub Benefit" />
                    <ul className="benefit_list">
                        <li>
                            <img src="./images/benefit_img_01.svg" alt="benefit" />
                        </li>
                        <li>
                            <img src="./images/benefit_img_02.svg" alt="benefit" />
                        </li>
                        <li>
                            <img src="./images/benefit_img_03.svg" alt="benefit" />
                        </li>
                    </ul>
                    <button>CrocsClub Join</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
