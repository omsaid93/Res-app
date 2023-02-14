import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ResarvationForm.css'

function ReservationCard(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [businessDate, setBusinessDate] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [shift, setShift] = useState('BREAKFAST');
  const [area, setArea] = useState('BAR');
  const [quantity, setQuantity] = useState('');
  const [guestNotes, setGuestNotes] = useState('');
  const [status, setStatus] = useState('CONFIRMED');
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
          
          <input type="text" required={true} value={firstName} onChange={e => setFirstName(e.target.value)} ></input>
          <span>First name *</span>
        </div>
        <div className="inputbox">
          <input type="text" required={true} value={lastName}  onChange={e => setLastName(e.target.value)} />
          <span>Last name *</span>
        </div>
        <div className="inputbox">
          <input type="number" required={true} value={quantity} onChange={e => {
            if (e.target.value >= 0) {
              setQuantity(e.target.value);
            }
          }} />
          <span>Quantity *</span>
        </div>
        <div className="inputbox">
          <label>businessDate *</label>
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
            <option Value="BREAKFAST"selected>BREAKFAST</option>
            <option value="LUNCH">LUNCH</option>
            <option value="DINNER">DINNER</option>
          </select>
        </div>
        <div className="inputbox">
          <label>Area:</label>
          <select value={area} onChange={e => setArea(e.target.value)}>
            <option value="BAR" selected>BAR</option>
            <option value="MAIN ROOM">MAIN ROOM</option>
          </select>
        </div>
        <div className="inputbox">
          <label>status:</label>
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value="CONFIRMED"selected>CONFIRMED</option>
            <option value="NOT CONFIRMED">NOT CONFIRMED</option>
            <option value="SEATED">SEATED</option>
            <option value="CHECKED OUT">CHECKED OUT</option>
          </select>
        </div>
        <div className="inputbox">
        <span>Guest Notes</span>
          <input type="text" value={guestNotes} onChange={e => setGuestNotes(e.target.value)} />
        </div>
        <button type="submit" className='sumbitButton'>Submit</button>
      </form>
    </div>
  );
}

export default ReservationCard;