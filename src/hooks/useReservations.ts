import { useState, useEffect, useCallback } from "react";
import { Reservation } from "../types";
import { storageUtils } from "../utils/storage";
import data from "../data/data.json";

export const useReservations = () => {
  const [reservationData, setReservationData] = useState<Reservation[]>(() => {
    const localData = storageUtils.getReservationData();
    return localData.length > 0 ? localData : (data.reservations as Reservation[]);
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      storageUtils.setReservationData(reservationData);
      setError(null);
    } catch (err) {
      setError('Failed to save reservation data');
      console.error('Error saving reservation data:', err);
    }
  }, [reservationData]);

  const addReservation = useCallback((enteredClientData: Reservation): void => {
    setIsLoading(true);
    setError(null);
    
    try {
      setReservationData((prev) => [enteredClientData, ...prev]);
    } catch (err) {
      setError('Failed to add reservation');
      console.error('Error adding reservation:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeReservation = useCallback((id: number): void => {
    setIsLoading(true);
    setError(null);
    
    try {
      setReservationData((prev) => prev.filter(reservation => reservation.id !== id));
    } catch (err) {
      setError('Failed to remove reservation');
      console.error('Error removing reservation:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateReservation = useCallback((id: number, updatedData: Partial<Reservation>): void => {
    setIsLoading(true);
    setError(null);
    
    try {
      setReservationData((prev) => 
        prev.map(reservation => 
          reservation.id === id 
            ? { ...reservation, ...updatedData }
            : reservation
        )
      );
    } catch (err) {
      setError('Failed to update reservation');
      console.error('Error updating reservation:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    reservationData,
    addReservation,
    removeReservation,
    updateReservation,
    isLoading,
    error,
  };
};
