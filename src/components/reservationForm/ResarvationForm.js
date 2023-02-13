import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ResarvationForm.css'

function ReservationCard(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [businessDate, setBusinessDate] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [shift, setShift] = useState('');
  const [area, setArea] = useState('');
  const [quantity, setQuantity] = useState('');
  const [guestNotes, setGuestNotes] = useState('');
  const [status, setStatus] = useState('');
  const [counter, setCounter] = useState(parseInt(localStorage.getItem('counter')) || 20);

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    setCounter(counter + 1);
    localStorage.setItem('counter', counter + 1);

    // Do something with the form data, such as send a request to an API
    console.log({ firstName, lastName, dateTo, dateFrom, shift, area });

    const enteredData = {
      id: counter + 1,
      businessDate,
      status,
      shift,
      start: dateFrom,
      end: dateTo,
      quantity,
      customer: {
        firstName,
        lastName
      },
      area,
      guestNotes
    }
    props.onSaveEnteredData(enteredData)
    console.log(enteredData)
    // onSaveEnteredData={enteredDataHandler}

    navigate('/list')

  };

  return (
    <div >
      <form onSubmit={handleSubmit} className='center' >
        <div className="inputbox">
          <input type="text" required={true} value={firstName} placeholder='First name' onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="inputbox">
          <input type="text" required={true} value={lastName} placeholder='Last name' onChange={e => setLastName(e.target.value)} />
        </div>
        <div className="inputbox">
          <input type="number" required={true} value={quantity} placeholder='Quantity' onChange={e => {
            if (e.target.value >= 0) {
              setQuantity(e.target.value);
            }
          }} />
        </div>
        <div className="inputbox">
          <label>businessDate</label>
          <input type="date" required={true} value={businessDate} onChange={e => setBusinessDate(e.target.value)} />
        </div>
        <div className="inputbox">
          <label>from:</label>
          <input type="datetime-local" required={true} value={dateFrom.dates} onChange={e => setDateFrom(e.target.value)} />
        </div>
        <div className="inputbox">
          <label>to:</label>
          <input type="datetime-local" required={true} value={dateTo} onChange={e => setDateTo(e.target.value)} />
        </div>
        <div className="inputbox">
          <label> Shift:</label>
          <select value={shift} onChange={e => setShift(e.target.value)}>
            <option defaultValue="BREAKFAST">BREAKFAST</option>
            <option value="LUNCH">LUNCH</option>
            <option value="DINNER">DINNER</option>
          </select>
        </div>
        <div className="inputbox">
          <label>Area:</label>
          <select value={area} onChange={e => setArea(e.target.value)}>
            <option defaultValue="BAR">BAR</option>
            <option value="MAIN ROOM">MAIN ROOM</option>
          </select>
        </div>
        <div className="inputbox">
          <label>status:</label>
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value="CONFIRMED">CONFIRMED</option>
            <option value="NOT CONFIRMED">NOT CONFIRMED</option>
            <option value="SEATED">SEATED</option>
            <option value="CHECKED OUT">CHECKED OUT</option>
          </select>
        </div>
        <div className="inputbox">
          <input type="text" value={guestNotes} placeholder='Guest Notes' onChange={e => setGuestNotes(e.target.value)} />
        </div>
        <button type="submit" className='sumbitButton'>Submit</button>
      </form>
    </div>
  );
}

export default ReservationCard;