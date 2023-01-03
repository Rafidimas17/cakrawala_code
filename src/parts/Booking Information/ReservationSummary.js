import React from "react";
import { IconCalender } from "../../assets";
import Button from "../../elements/Button";
export default function ReservationSummary({ data }) {
  const priceHiking = data.price * 3;
  const priceAsurance = data.asurance * 3;
  const totalPrice = priceHiking + priceAsurance;
  return (
    <div className="col-5">
      <h3
        className="m-3"
        style={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        Reservation summary
      </h3>

      <div
        className="container"
        // style={{ border: "1px solid black", height: "100vh" }}
      >
        <div
          className="row p-2"
          style={{
            border: "1px solid #A5A5A5",
            borderRadius: 8,
          }}
        >
          <div className="col">
            <h6
              className="checkin"
              style={{
                fontWeight: 700,
                fontFamily: "Poppins",
                color: "#A5A5A5",
                fontSize: 16,
              }}
            >
              CHECK-IN :
            </h6>
            <h6
              className="date-out"
              style={{
                color: "#0B165B",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 18,
              }}
            >
              Sun, 22 Nov 2022
            </h6>
            <h6
              className="checkin mt-4"
              style={{
                fontWeight: 700,
                fontFamily: "Poppins",
                color: "#A5A5A5",
                fontSize: 16,
              }}
            >
              TOTAL LONG OF STAY :
            </h6>
            <h6
              className="date-out"
              style={{
                color: "#0B165B",
                fontSize: 18,
                fontWeight: 500,
                fontFamily: "Poppins",
                float: "left",
                marginTop: 2,
              }}
            >
              3
            </h6>{" "}
            <img
              src={IconCalender}
              style={{ width: 21 }}
              alt="long_stay"
              className="ml-2"
            />
            <h6
              className="checkin mt-4"
              style={{
                fontWeight: 700,
                fontFamily: "Poppins",
                color: "#A5A5A5",
                fontSize: 16,
              }}
            >
              YOU SELECTED :
            </h6>
            <h6
              className="date-out"
              style={{
                color: "#0B165B",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 18,
              }}
            >
              {data.name}
            </h6>
            <h6
              className="checkin mt-4"
              style={{
                fontWeight: 700,
                fontFamily: "Poppins",
                color: "#A5A5A5",
                fontSize: 16,
              }}
            >
              TRACK :
            </h6>
            <h6
              className="date-out"
              style={{
                color: "#0B165B",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 18,
              }}
            >
              {data.track}
            </h6>
          </div>
          <div className="col">
            <h6
              className="checkout"
              style={{
                fontWeight: 700,
                fontSize: 16,
                fontFamily: "Poppins",
                color: "#A5A5A5",
              }}
            >
              CHECK-OUT :
            </h6>
            <h6
              className="date-out"
              style={{
                color: "#0B165B",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 500,
              }}
            >
              Wed, 25 Nov 2022
            </h6>
          </div>
        </div>
        <div className="row p-2 mt-2">
          <div className="col">
            <h6
              className="checkin"
              style={{
                fontWeight: 600,
                fontFamily: "Poppins",
                color: "#0B165B",
                fontSize: 20,
              }}
            >
              Your price summary :
            </h6>
            <div className="row mt-2">
              <div className="col mt-2">
                <h6 className="titleHiking">Hiking</h6>
                <h6 className="titleAsurance mt-2" style={{ float: "left" }}>
                  Asurance
                </h6>
              </div>
              <div className="col mt-2">
                <h6 className="totalHiking" style={{ textAlign: "right" }}>
                  $ {priceHiking}
                </h6>
                <h6
                  className="totalAsurance mt-3"
                  style={{ textAlign: "right" }}
                >
                  $ {priceAsurance}
                </h6>
              </div>
            </div>
            <h5
              className="titleTotalPrice mt-4"
              style={{
                float: "left",
                color: "#0ED33A",
                fontWeight: 600,
                fontSize: 18,
                fontFamily: "Poppins",
              }}
            >
              Total Price
            </h5>
            <h5
              className="totalPrice mt-4"
              style={{
                float: "right",
                color: "#0ED33A",
                fontWeight: 600,
                fontSize: 18,
                fontFamily: "Poppins",
              }}
            >
              $ {totalPrice}
            </h5>
          </div>
          <Button className="btn mt-2" hasShadow isPrimary isBlock>
            Request to Book
          </Button>
        </div>
      </div>
    </div>
  );
}
