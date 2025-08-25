import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResarvationForm.css";
import { Reservation, ReservationCardProps } from "../../types";
import { RESERVATION_STATUS, SHIFTS, AREAS } from "../../constants";
import { storageUtils } from "../../utils/storage";

const ReservationForm: React.FC<ReservationCardProps> = ({
  onSaveEnteredData,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateFrom: "",
    businessDate: "",
    dateTo: "",
    quantity: "",
    guestNotes: "",
  });

  const [shift, setShift] = useState<(typeof SHIFTS)[keyof typeof SHIFTS]>(
    SHIFTS.BREAKFAST
  );
  const [area, setArea] = useState<(typeof AREAS)[keyof typeof AREAS]>(
    AREAS.BAR
  );
  const [status, setStatus] = useState<
    (typeof RESERVATION_STATUS)[keyof typeof RESERVATION_STATUS]
  >(RESERVATION_STATUS.CONFIRMED);
  const [counter, setCounter] = useState<number>(storageUtils.getCounter());

  const navigate = useNavigate();

  const handleInputChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const newCounter = counter + 1;
    setCounter(newCounter);
    storageUtils.setCounter(newCounter);

    const enteredData: Reservation = {
      id: newCounter,
      businessDate: formData.businessDate,
      status,
      shift,
      start: formData.dateFrom,
      end: formData.dateTo,
      quantity: parseInt(formData.quantity),
      customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      area,
      guestNotes: formData.guestNotes,
    };

    onSaveEnteredData(enteredData);
    navigate("/list");
  };

  const renderInputField = (
    field: keyof typeof formData,
    label: string,
    type: string = "text",
    required: boolean = true
  ) => (
    <div className="inputbox">
      <input
        type={type}
        required={required}
        value={formData[field]}
        onChange={handleInputChange(field)}
      />
      <span>
        {label} {required && "*"}
      </span>
    </div>
  );

  const renderSelectField = <T extends string>(
    value: T,
    onChange: (value: T) => void,
    options: { value: T; label: string }[],
    label: string
  ) => (
    <div className="inputbox">
      <label>{label}:</label>
      <select value={value} onChange={(e) => onChange(e.target.value as T)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="reservation-form-container">
      <form onSubmit={handleSubmit} className="center">
        {renderInputField("firstName", "First name")}
        {renderInputField("lastName", "Last name")}
        {renderInputField("quantity", "Quantity", "number")}

        <div className="inputbox">
          <label>Business Date *</label>
          <input
            type="date"
            required={true}
            value={formData.businessDate}
            onChange={handleInputChange("businessDate")}
          />
        </div>

        <div className="inputbox">
          <label>From:</label>
          <input
            type="datetime-local"
            required={true}
            value={formData.dateFrom}
            onChange={handleInputChange("dateFrom")}
          />
        </div>

        <div className="inputbox">
          <label>To:</label>
          <input
            type="datetime-local"
            required={true}
            value={formData.dateTo}
            onChange={handleInputChange("dateTo")}
          />
        </div>

        {renderSelectField(
          shift,
          setShift,
          [
            { value: SHIFTS.BREAKFAST, label: "BREAKFAST" },
            { value: SHIFTS.LUNCH, label: "LUNCH" },
            { value: SHIFTS.DINNER, label: "DINNER" },
          ],
          "Shift"
        )}

        {renderSelectField(
          area,
          setArea,
          [
            { value: AREAS.BAR, label: "BAR" },
            { value: AREAS.MAIN_ROOM, label: "MAIN ROOM" },
          ],
          "Area"
        )}

        {renderSelectField(
          status,
          setStatus,
          [
            { value: RESERVATION_STATUS.CONFIRMED, label: "CONFIRMED" },
            { value: RESERVATION_STATUS.NOT_CONFIRMED, label: "NOT CONFIRMED" },
            { value: RESERVATION_STATUS.SEATED, label: "SEATED" },
            { value: RESERVATION_STATUS.CHECKED_OUT, label: "CHECKED OUT" },
          ],
          "Status"
        )}

        {renderInputField("guestNotes", "Guest Notes", "text", false)}

        <button type="submit" className="sumbitButton">
          Submit Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
