import { useState } from "react";
import ReservationForm from "../../components/reservationForm/ResarvationForm";
import { Reservation as ReservationType } from "../../types";

interface ReservationProps {
  onAddReservation: (data: ReservationType) => void;
}

const Reservation: React.FC<ReservationProps> = ({ onAddReservation }) => {
  const [reservations, setReservations] = useState<ReservationType | undefined>();
  
  console.log(reservations);

  const DataHandler = (enteredClientData: ReservationType) => {
    setReservations(enteredClientData);
    onAddReservation(enteredClientData);
  };
  
  return (
    <div>
      <ReservationForm onSaveEnteredData={DataHandler} />
    </div>
  );
};

export default Reservation;
