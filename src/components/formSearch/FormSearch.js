"use client"

import { useState} from 'react';

import Image from "next/image";
import DataCalendar from "../dataCalendar/DataCalendar";

import "./formSearch.css"

export default function FormSearch() {
    const [openCalendar, setOpenCalendar] = useState(false)
    const [arrival, setArrival] = useState('')
    const [leave, setLeave] = useState('')
  return (
    <div className={openCalendar ? 'form-search form-search_active' : 'form-search'}>
        <form action="#">
            <div className="form-search__wrapper">
                <div className="form-search__box">
                    <label>Город или адрес</label>
                    <input placeholder="Куда едем" type="text" />
                </div>
                <div className='form-search__line'></div>
                <div onClick={() => setOpenCalendar(true)} className="form-search__box date-max">
                    <label >Заезд</label>
                    <input placeholder="Когда" type="text" value={arrival}/>
                </div>
                <div className='form-search__line'></div>
                <div onClick={() => setOpenCalendar(true)} className="form-search__box date-max">
                    <label >Отъезд</label>
                    <input placeholder="Когда" type="text" value={leave}/>
                </div>
                <div className='form-search__data date-min'>
                    <div onClick={() => setOpenCalendar(true)} className="form-search__box" >
                        <label >Заезд</label>
                        <input placeholder="Когда" type="text" value={arrival} style={{ borderRadius: '25px 0px 0px 25px'}}/>
                    </div>
                    <div onClick={() => setOpenCalendar(true)} className="form-search__box" >
                        <label >Отъезд</label>  
                        <input placeholder="Когда" type="text" value={leave} style={{ borderRadius: '0px 25px 25px 0px'}}/>
                    </div>
                </div>
                <div className='form-search__line'></div>
                <div className="form-search__box ntl" >
                    <label >Гости</label>
                    <input placeholder="2 взрослых, без детей"
                    type="text" />
                </div>
                <button>
                    <Image src='./search.png' alt='search' width={18.75} height={18.75}/>
                    <p>Поиск</p> 
                </button> 
            </div>
        </form>
        {openCalendar ? <DataCalendar setArrival={setArrival} setLeave={setLeave}/> : ''}
        
    </div>
    


  )
}
