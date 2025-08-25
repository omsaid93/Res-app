import { STORAGE_KEYS } from "../constants";
import { Reservation } from "../types";

export const storageUtils = {
  getReservationData: (): Reservation[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.RESERVATION_DATA);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return [];
    }
  },

  setReservationData: (data: Reservation[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.RESERVATION_DATA, JSON.stringify(data));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  },

  getCounter: (): number => {
    try {
      const counter = localStorage.getItem(STORAGE_KEYS.COUNTER);
      return counter ? parseInt(counter, 10) : 20;
    } catch (error) {
      console.error("Error reading counter from localStorage:", error);
      return 20;
    }
  },

  setCounter: (value: number): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.COUNTER, value.toString());
    } catch (error) {
      console.error("Error writing counter to localStorage:", error);
    }
  },
};
