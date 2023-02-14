import React from 'react'
import './home.css'
import {Link} from "react-router-dom"
function Home() {
  return (
    <div className='home'>
      <h1>Welecome To Our Restaurant</h1>
      <p>Welcome to our restaurant's online reservation system! Here, you can easily book a table at any time that suits you best. All you need to do is select the date, time, number of guests, and your preferred table, and we will take care of the rest. </p>
      <Link to='reservation'><button> Make a Reservation</button></Link>
      <Link to='list'><button>Our List</button></Link>
    </div>
  )
}

export default Home