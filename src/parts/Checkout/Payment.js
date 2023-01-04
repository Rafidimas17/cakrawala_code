import React from "react";
import ReservationSummary from "./Booking Information/ReservationSummary";
import DataBooking from "../../json/bookingInformation.json";
export default function Payment() {
  return (
    <div className="spacing-sm mt-5">
      <div className="container">
        <div className="row">
          <ReservationSummary data={DataBooking} />
        </div>
      </div>
    </div>
  );
}
