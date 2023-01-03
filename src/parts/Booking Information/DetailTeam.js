import React, { useState } from "react";
import InputText from "../../elements/Form/InputText";
import "./booking.scss";
export default function DetailTeam({ data }) {
  const [getMember, setMember] = useState([]);
  const handleAdd = () => {
    const team = [...getMember, []];
    setMember(team);
  };
  // const handleChange = (onChangeValue, i) => {
  //   const inputData = [...getMember];
  //   inputData[i] = onChangeValue.target.value;
  //   setMember(inputData);
  // };
  const handleDelete = (items) => {
    const deletVal = [...getMember];
    deletVal.splice(items, 1);
    setMember(deletVal);
  };
  console.log("data-", getMember);

  return (
    <div className="col-7 pr-5">
      <div className="card m-3">
        <div className="detail ">
          <h3
            className="titleTeam"
            style={{ fontFamily: "Poppins", fontWeight: 570, fontSize: 20 }}
          >
            Enter your details
          </h3>
          <div
            className="row"
            style={{ border: "1px solid #A5A5A5", borderRadius: 8 }}
          >
            <div className="col mt-2">
              <h5
                className="h6"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}
              >
                Name
              </h5>
              <InputText />
              <h5
                className="h6"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}
              >
                Address
              </h5>
              <InputText />
            </div>
            <div className="col mt-2">
              <h6 style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                No KTP/Pasport
              </h6>
              <InputText />
              <h6 style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                No Telepon
              </h6>
              <InputText />
            </div>
          </div>
          <section>
            <button
              className="button_plus mt-3"
              onClick={() => handleAdd()}
            ></button>
          </section>
          {getMember.map((item, index) => {
            return (
              <div
                key={`row-${index}`}
                value={item}
                className="row mt-3"
                id={`item ${index}`}
                style={{ border: "1px solid #A5A5A5", borderRadius: 8 }}
              >
                <div className="col mt-4">
                  <h5
                    className="h6"
                    style={{ fontFamily: "Poppins", fontWeight: 500 }}
                  >
                    Name
                  </h5>
                  <InputText />
                  <h5
                    className="h6"
                    style={{ fontFamily: "Poppins", fontWeight: 500 }}
                  >
                    Address
                  </h5>
                  <InputText />
                </div>
                <div className="col mt-4">
                  <h6 style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                    No KTP/Pasport
                  </h6>
                  <InputText />
                  <h6 style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                    No Telepon
                  </h6>
                  <InputText />
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="button_minus"
                ></button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
