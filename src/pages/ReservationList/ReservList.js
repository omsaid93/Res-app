import { useNavigate } from "react-router-dom";
import ReservationList from "../components/reservationCard/ReservationList";

const Reservation = () =>{
    const navigate = useNavigate(); 
    return(
        <>
        <ReservationList/>
        </>
    )
}

export default Reservation;