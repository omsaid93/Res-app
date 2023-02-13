import { useState } from "react";
import ReservationForm from "../../components/reservationForm/ResarvationForm.js";

const Reservation = (props) => {

    const [reservations, setReservations] = useState();
    // const navigate = useNavigate();
    console.log(reservations);

    const DataHandler = (enteredClientData) => {

        setReservations(enteredClientData)
        props.onAddReservation(enteredClientData)

    }
    return (
        <div>
            <ReservationForm onSaveEnteredData={DataHandler} />
        </div>
    )

}


export default Reservation;