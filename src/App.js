import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/Home";
import ReservationList from "./pages/ReservationList/ReservationList";
import NotFound from "./pages/notfound/NotFound"
import Reservation from "./pages/Reservation/Reservation";
import data from "./data/data.json";
import NavBar from "./components/navbar/NavBar";
// import Footer from "./components/footer/Footer";


function App() {
  const [reservationData, setReservationData] = useState(() => {
    const localData = localStorage.getItem("reservationData");
    return localData ? JSON.parse(localData) : data.reservations;
  });

  useEffect(() => {
    localStorage.setItem("reservationData", JSON.stringify(reservationData));
  }, [reservationData]);

  const dataHandler = (enteredClientData) => {
    setReservationData((prev) => {
      return [enteredClientData, ...prev];
    });
  };
  console.log(reservationData);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/reservation"
          element={<Reservation onAddReservation={dataHandler} />}
        />
        <Route
          path="/list"
          element={<ReservationList reservations={reservationData} />}
        />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
