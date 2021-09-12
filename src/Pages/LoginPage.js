import React, {useState} from 'react';
import img from "../assets/images/loginPage/sideImage.png";
import LockIconInput from "../Components/common/LoginPage/svg/LockIconInput";
import UserIconInput from "../Components/common/LoginPage/svg/UserIconInput";
import Logo from "../Components/common/LoginPage/svg/Logo";

// import './../Styles.scss'


function Input({type, ...props}) {
    const [isPasswordHidden, setPasswordHidden] = useState(false)

    const toggleHiddenPassword = () => {
        if (type = 'password') {
            setPasswordHidden(!isPasswordHidden)
        }

    }

    return (
        <div className={'input-auth'}>
            <div className={'input-auth__wrapper'}>
                <input {...props} className={'input-auth__input'} type={isPasswordHidden ? 'text' : type}/>
                <div className={'input-auth__icon'} onClick={()=>toggleHiddenPassword()}>
                    {type === 'password'
                        ? <LockIconInput/>
                        : <UserIconInput/>}
                </div>
            </div>
        </div>
    );
}

const LoginPage = () => {
    return (
        <div className={'authorisation-background'}>


            <div className="form-wrapper">

                <div className="form-wrapper__leftside">
                    <div className={'form-wrapper__logo'}>
                        <Logo/>
                    </div>
                    <p className={'form-wrapper__text'}>Авторизация</p>
                    <form className={'form-wrapper__form'}>

                        <div className="form-wrapper__input">
                            <Input placeholder={'text'} type="text"/>
                        </div>
                        <div className="form-wrapper__input">
                            <Input placeholder={'password'} type="password"/>
                        </div>


                        <button className={'button button_orn form-wrapper__button '}>
                            Войти
                        </button>

                    </form>

                </div>

                <div className="form-wrapper__rightside">
                    <img src={img} alt="Картинка"/>
                </div>

            </div>


        </div>
    );
};

export default LoginPage;