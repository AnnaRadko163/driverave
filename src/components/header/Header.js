"use client"

import Image from 'next/image'

import "./header.css"

export default function Header() {
    function openCart() {
        document.querySelector("#login").classList.add("login_active")
        document.querySelector("#login").classList.remove('login_none')
        document.querySelector("#loginBac").classList.add("login__bg_active")
        document.querySelector("#loginBac").classList.remove('login__bg_none')
      }
  return (
    <header className="header">
        <div className='header__logo'>
            <Image src="./logo.png" alt="logo" fill={true}/>
        </div>
        <div onClick={() => openCart()} className='authorization'>
            <div className='authorization__hamburger'>
                <div className='authorization__line'></div>
                <div className='authorization__line'></div>
                <div className='authorization__line'></div>
            </div>
            <div className='authorization__icon'>
                <Image src='./avatar.png' alt='avatar' width={24} height={20}/>
            </div>
        </div>
    </header>
  )
}
