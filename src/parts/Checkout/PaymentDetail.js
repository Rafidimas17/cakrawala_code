import React, { useState } from "react";
import "./Payment.scss";
export default function PaymentDetail({ dataPayment }) {
  const [getPopup, setPopup] = useState(false);
  let memberName = dataPayment.detailTeam.nameMember;
  console.log(memberName);

  const handleClickPayment = () => {
    setPopup(!getPopup);
  };
  const closePopup = () => {
    setPopup(false);
  };

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

        <table className="table pr-3" style={{ height: 50 }}>
          <tr>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Address</th>
            <th style={{ textAlign: "center" }}>No ID</th>
            <th style={{ textAlign: "center" }}>No Phone</th>
          </tr>
          {dataPayment.detailTeam.map((member, index) => {
            return (
              <tr
                key={`member-${index}`}
                className="rowTableName"
                style={{ height: 50 }}
              >
                <td
                  style={{
                    height: 50,
                    fontSize: 12,
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {member.nameMember}
                </td>
                <td
                  style={{
                    height: 50,
                    fontSize: 12,

                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {member.addressMember}
                </td>
                <td
                  style={{
                    height: 50,
                    fontSize: 12,

                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {member.numberIdMember}
                </td>
                <td
                  style={{
                    height: 50,
                    fontSize: 12,

                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {member.telephoneMember}
                </td>
              </tr>
            );
          })}
        </table>
        <button id="btnSelectPayment" onClick={handleClickPayment}>
          Select Payment
        </button>
        <div>
          {getPopup ? (
            <div className="main">
              <div className="popup-header">
                <h1>popup</h1>
                <h1 className="close" onClick={closePopup}>
                  X
                </h1>
              </div>
              <div>
                <p>This is simple popup in react js</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
