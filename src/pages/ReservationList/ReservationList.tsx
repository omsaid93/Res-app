import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import "./ReservationList.css";
import { HiChevronUpDown } from "react-icons/hi2";
import { Reservation } from "../../types";

interface ReservationListProps {
  reservations: Reservation[];
}

interface FilterFormData {
  searchTerm: string;
  selectedDate: string;
  selectedStatus: string;
  selectedArea: string;
  selectedShift: string;
}

const ReservationList: React.FC<ReservationListProps> = ({ reservations }) => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortField, setSortField] = useState<"name" | "quantity" | null>(null);

  const { register, watch } = useForm<FilterFormData>({
    defaultValues: {
      searchTerm: "",
      selectedDate: "",
      selectedStatus: "",
      selectedArea: "",
      selectedShift: "",
    },
  });

  const watchedValues = watch();

  // Memoized filtered and sorted reservations
  const filteredAndSortedReservations = useMemo(() => {
    let filtered = reservations.filter((reservation) => {
      const searchTerm = watchedValues.searchTerm.toLowerCase();
      const firstName = reservation.customer.firstName.toLowerCase();
      const lastName = reservation.customer.lastName.toLowerCase();

      // Search filter
      if (
        searchTerm &&
        !firstName.includes(searchTerm) &&
        !lastName.includes(searchTerm)
      ) {
        return false;
      }

      // Date filter
      if (
        watchedValues.selectedDate &&
        reservation.start !== watchedValues.selectedDate
      ) {
        return false;
      }

      // Status filter
      if (
        watchedValues.selectedStatus &&
        reservation.status !== watchedValues.selectedStatus
      ) {
        return false;
      }

      // Shift filter
      if (
        watchedValues.selectedShift &&
        reservation.shift !== watchedValues.selectedShift
      ) {
        return false;
      }

      // Area filter
      if (
        watchedValues.selectedArea &&
        reservation.area !== watchedValues.selectedArea
      ) {
        return false;
      }

      return true;
    });

    // Sorting
    if (sortField === "name") {
      filtered = [...filtered].sort((a, b) => {
        const nameA = `${a.customer.firstName} ${a.customer.lastName}`;
        const nameB = `${b.customer.firstName} ${b.customer.lastName}`;
        return sortDirection === "asc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });
    } else if (sortField === "quantity") {
      filtered = [...filtered].sort((a, b) => {
        return sortDirection === "asc"
          ? a.quantity - b.quantity
          : b.quantity - a.quantity;
      });
    }

    return filtered;
  }, [reservations, watchedValues, sortField, sortDirection]);

  // Get unique values for filter options
  const uniqueDates = useMemo(
    () => [...new Set(reservations.map((r) => r.start))],
    [reservations]
  );

  const uniqueStatuses = useMemo(
    () => [...new Set(reservations.map((r) => r.status))],
    [reservations]
  );

  const uniqueShifts = useMemo(
    () => [...new Set(reservations.map((r) => r.shift))],
    [reservations]
  );

  const uniqueAreas = useMemo(
    () => [...new Set(reservations.map((r) => r.area))],
    [reservations]
  );

  const handleSort = (field: "name" | "quantity") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div>
      <h2 className="title">Reservation List</h2>

      {/* Search Input */}
      <div className="filteri">
        <input
          type="text"
          placeholder="Search by First Name or Last Name"
          {...register("searchTerm")}
        />
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="filter">
          <label>Date:</label>
          <select {...register("selectedDate")}>
            <option value="">All</option>
            {uniqueDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label className="status">Status:</label>
          <select {...register("selectedStatus")}>
            <option value="">All</option>
            {uniqueStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label>Shift:</label>
          <select {...register("selectedShift")}>
            <option value="">All</option>
            {uniqueShifts.map((shift) => (
              <option key={shift} value={shift}>
                {shift}
              </option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label>Area:</label>
          <select {...register("selectedArea")}>
            <option value="">All</option>
            {uniqueAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              First Name <HiChevronUpDown />
            </th>
            <th>Last Name</th>
            <th>Date Start</th>
            <th>Date End</th>
            <th>Shift</th>
            <th>Area</th>
            <th>Status</th>
            <th onClick={() => handleSort("quantity")}>
              Quantity <HiChevronUpDown />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedReservations.map((reservation) => (
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
