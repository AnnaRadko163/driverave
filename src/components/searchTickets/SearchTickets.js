import Image from 'next/image'
import FormSearch from '../formSearch/FormSearch'

import "./searchTickets.css"

export default function SearchTickets() {
  return (
    <section className='search-tickets'>
      <Image className='search-tickets__bg' src="./bg.jpg" alt="bg" fill={true}/>
      <div className='search-tickets__wrapper'>
        <p>Ut enim ad minim veniam</p>
        <h1>Duis aute irure dolor in reprehenderit</h1>
        <h2>Duis aute irure dolor in reprehenderit</h2>
      </div>
      <FormSearch/>
    </section>
  )
}
