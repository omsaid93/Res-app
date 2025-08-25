import { Route, Routes } from "react-router-dom";
import { Reservation } from "../types";
import Home from "../pages/homePage/Home";
import ReservationList from "../pages/ReservationList/ReservationList";
import NotFound from "../pages/notfound/Notfound";
import ReservationPage from "../pages/Reservation/Reservation";

interface AppRoutesProps {
  reservationData: Reservation[];
  onAddReservation: (data: Reservation) => void;
  isLoading?: boolean;
  error?: string | null;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ 
  reservationData, 
  onAddReservation,
  isLoading = false,
  error = null
}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/reservation"
        element={<ReservationPage onAddReservation={onAddReservation} />}
      />
      <Route
        path="/list"
        element={<ReservationList reservations={reservationData} />}
      />
    </Routes>
  );
};

export default AppRoutes;
