import React from "react";

export default function PaymentDetail({ dataPayment }) {
  let memberName = dataPayment.detailTeam.nameMember;
  console.log(memberName);

  return (
    <div
      className="col-7 pr-3 mr-5"
      style={{
        width: 1000,
        borderRadius: 8,
        backgroundColor: "white",
      }}
    >
      <div>
        <h3
          className="m-3"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: 20,
          }}
        >
          Booking Details
        </h3>
        <div className="row">
          <div className="col m-3">
            <h6
              className="bookingNumber"
              style={{
                fontWeight: 600,
                fontFamily: "Poppins",
                color: "#A5A5A5",
                fontSize: 16,
              }}
            >
              BOOKING NUMBER
            </h6>
            <h6
              className="date-out"
              style={{
                color: "#0B165B",
                fontSize: 16,
                fontWeight: 500,
                fontFamily: "Poppins",
                float: "left",
                marginTop: 2,
              }}
            >
              {dataPayment._idBooking}
            </h6>
          </div>
        </div>
        <h3
          className="m-3"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: 20,
          }}
        >
          Booking Details
        </h3>
        <div className="row">
          <div className="col">
            <h6 className="titleTable ml-3">Name</h6>
          </div>
          <div className="col">
            <h6>Address</h6>
          </div>
          <div className="col">
            <h6>No ID</h6>
          </div>
          <div className="col">
            <h6>No Telephone</h6>
          </div>
        </div>

        {dataPayment.detailTeam.map((member, index) => {
          return (
            <div key={`member-${index}`} className="row mt-2">
              <div className="col-3">
                <h6
                  className="titleTable ml-3"
                  style={{ fontSize: 10, fontFamily: "Poppins" }}
                >
                  {member.nameMember}
                </h6>
              </div>
              <div className="col">
                <h6
                  className="titleTable"
                  style={{ fontSize: 10, fontFamily: "Poppins" }}
                >
                  {member.addressMember}
                </h6>
              </div>
              <div className="col">
                <h6
                  className="titleTable"
                  style={{
                    fontSize: 10,
                    fontFamily: "Poppins",
                    textAlign: "left",
                  }}
                >
                  {member.numberIdMember}
                </h6>
              </div>
              <div className="col">
                <h6
                  className="titleTable"
                  style={{ fontSize: 10, fontFamily: "Poppins" }}
                >
                  {member.telephoneMember}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
