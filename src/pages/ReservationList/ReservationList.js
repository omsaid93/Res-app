import React, { useState, useEffect } from "react";
import "./ReservationList.css";
import { HiChevronUpDown } from "react-icons/hi2"
// states :::::::::::
const ReservationList = (props) => {
  const [filteredReservations, setFilteredReservations] = useState(
    props.reservations
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedShift, setSelectedShift] = useState(null);
  const [reservations, setReservations] = useState(props.reservations);
  const [sortDirection, setSortDirection] = useState("asc");

  // Filters ,Search,sort handlers
  const handleDateFilter = (date) => {
    setSelectedDate(date);
  };
  const handleStatusFilter = (status) => {
    setSelectedStatus(status);
  };
  const handleAreaFilter = (selectedArea) => {
    setSelectedArea(selectedArea);
    setFilteredReservations(
      reservations.filter((reservation) => {
        if (selectedArea === "") return true;
        return reservation.area === selectedArea;
      })
    );
  };
  const handleShiftFilter = (selectedShift) => {
    setSelectedShift(selectedShift);
    setFilteredReservations(
      reservations.filter((reservation) => {
        if (selectedShift === "") return true;
        return reservation.shift === selectedShift;
      })
    );
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSortByGuestName = () => {
    setReservations(
      reservations.sort((a, b) => {
        const nameA = a.customer.firstName + " " + a.customer.lastName;
        const nameB = b.customer.firstName + " " + b.customer.lastName;
        if (sortDirection === "asc") {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      })
    );
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };
  const handleSortByGuestNumber = () => {
    setReservations(
      reservations.sort((c, d) => {
        const quantityA = c.quantity;
        const quantityB = d.quantity;
        if (sortDirection === "asc") {
          return quantityA - quantityB;
        } else {
          return quantityB - quantityA;
        }
      })
    );
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };


  //   search :::::

  useEffect(() => {
    setFilteredReservations(
      reservations.filter((reservation) => {
        return (
          reservation.customer.firstName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          reservation.customer.lastName
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
      })
    );
  }, [reservations, searchTerm]);

  //  filters ::::
  useEffect(() => {
    setFilteredReservations(
      reservations.filter((reservation) => {
        let isValid = true;
        if (selectedDate && reservation.start !== selectedDate) {
          isValid = false;
        }
        if (selectedStatus && reservation.status !== selectedStatus) {
          isValid = false;
        }
        if (selectedShift && reservation.shift !== selectedShift) {
          isValid = false;
        }
        if (selectedArea && reservation.area !== selectedArea) {
          isValid = false;
        }
        return isValid;
      })
    );
  }, [reservations, selectedDate, selectedStatus, selectedShift, selectedArea]);

  //   sort:::

  useEffect(() => {
    setFilteredReservations(
      filteredReservations.sort((a, b) => {
        const nameA = a.customer.firstName + " " + a.customer.lastName;
        const nameB = b.customer.firstName + " " + b.customer.lastName;
        if (sortDirection === "asc") {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      })
    );
  }, [sortDirection, filteredReservations]);
  useEffect(() => {
    setFilteredReservations(
      filteredReservations.sort((c, d) => {
        const quantityA = c.quantity;
        const quantityB = d.quantity;
        if (sortDirection === "asc") {
          return quantityA - quantityB;
        } else {
          return quantityB - quantityA;
        }
      })
    );
  }, [sortDirection, filteredReservations]);


  return (
    <div>
      <h2 className="title">Reservation List</h2>
      <div className="filteri">
        <input
          type="text"
          placeholder="Search by Fname or Lname"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="filters">
        <div className="filter">
          <label>Date:</label>
          <select
            value={selectedDate || ""}
            onChange={(event) => handleDateFilter(event.target.value)}
          >
            <option value="">All</option>
            {reservations.map((reservation) => (
              <option key={reservation.start} value={reservation.start}>
                {reservation.start}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label className="status">Status:</label>
          <select
            value={selectedStatus || ""}
            onChange={(event) => handleStatusFilter(event.target.value)}
          >
            <option value="">All</option>
            {[
              ...new Set(reservations.map((reservation) => reservation.status)),
            ].map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label>Shift:</label>
          <select
            value={selectedShift || ""}
            onChange={(event) => handleShiftFilter(event.target.value)}
          >
            <option value="">All</option>
            {[
              ...new Set(reservations.map((reservation) => reservation.shift)),
            ].map((shift) => (
              <option key={shift} value={shift}>
                {shift}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label>Area:</label>
          <select
            value={selectedArea || ""}
            onChange={(event) => handleAreaFilter(event.target.value)}
          >
            <option value="">All</option>
            {[
              ...new Set(reservations.map((reservation) => reservation.area)),
            ].map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* the form ::::: */}

      <table>
        <thead>
          <tr>
            <th onClick={handleSortByGuestName}>FirstName <HiChevronUpDown /> </th>
            <th>LastName</th>
            <th>DateStart</th>
            <th>DateEnd</th>
            <th>Shift</th>
            <th>Area</th>
            <th>Status</th>
            <th onClick={handleSortByGuestNumber}>Quantity <HiChevronUpDown /> </th>
          </tr>
        </thead>
        <tbody>
          {filteredReservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.customer.firstName}</td>
              <td>{reservation.customer.lastName}</td>
              <td>{reservation.start}</td>
              <td>{reservation.end}</td>
              <td>{reservation.shift}</td>
              <td>{reservation.area}</td>
              <td>{reservation.status}</td>
              <td>{reservation.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
