"use client"

import Image from 'next/image';

import { useState} from 'react';

import './login.css'

export default function Login() {
    const [active, setActive] = useState(false)
    function closeActiv() {
      setActive(!active)
    }
    return (
      <>
        <div id="loginBac" className={  active ? " login__bg login__bg_none" : "login__bg"} onClick={closeActiv}  ></div>
        <div id="login" className={  active ? " login login_none" : "login"  }>
          <div className='login__close-wrapper'>
            <Image className='login__close' onClick={closeActiv}  src='./close.png' alt='close' width={30} height={30} />   
          </div>
          <h2>Вход</h2>
          <form action='#'>
            <input className='input-text' placeholder="Введите e-mail или телефон" type="text" />
            <input className='input-text' placeholder="Введите пароль" type="password"/>
            <div className='login__checkbox-wrapper'> 
              <div className='checkbox'>
                <input type="checkbox"/>
                <label>Запомнить меня</label>
              </div>
              <a href='#'>Забыли пароль?</a>
            </div>
            <button className='login__button'>Войти</button>
            <div className='login__registration'>
              <p>Нет аккаунта?</p>
              <a href='#'>Регистрация</a>
            </div>
          </form>
        </div> 
      </>
    )
  }
  
  