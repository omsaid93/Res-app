import { RESERVATION_STATUS, SHIFTS, AREAS } from '../constants';

export interface Customer {
  firstName: string;
  lastName: string;
}

export interface Reservation {
  id: number;
  businessDate: string;
  status: typeof RESERVATION_STATUS[keyof typeof RESERVATION_STATUS];
  shift: typeof SHIFTS[keyof typeof SHIFTS];
  start: string;
  end: string;
  quantity: number;
  customer: Customer;
  area: typeof AREAS[keyof typeof AREAS];
  guestNotes: string;
}

export interface ReservationData {
  reservations: Reservation[];
}

export interface ReservationFormData {
  firstName: string;
  lastName: string;
  date: string;
  time: string;
  guests: number;
  area: string;
  notes: string;
}

export interface FilterFormData {
  searchTerm: string;
  selectedDate: string;
  selectedStatus: string;
  selectedArea: string;
  selectedShift: string;
}

export interface ReservationListProps {
  reservations: Reservation[];
}

export interface ReservationProps {
  onAddReservation: (data: Reservation) => void;
}

export interface ReservationCardProps {
  onSaveEnteredData: (data: Reservation) => void;
}
