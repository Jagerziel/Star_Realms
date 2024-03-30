import React, { useState } from "react";
import "./TrackerMain.scss";

export default function TrackerMain({ windowMod }) {
  const [value, setValue] = useState(30);

  let fontMod = (windowMod.x + windowMod.y) / 2;

  console.log(value);

  return (
    <div className="trackermain-container">
      <div
        className="trackermain-title"
        style={{
          fontSize: 60 * fontMod,
        }}
      >
        Authority
      </div>
      <div className="trackermain-subcontainer">
        <input
          className="inputField"
          type="number"
          value={value}
          onChange={(e) => {
            let newVal = e.target.value;
            setValue(newVal);
          }}
          style={{
            height: 40 * fontMod,
            width: "80%",
            fontSize: 40 * fontMod,
            border: "2px solid rgb(0, 255, 115)",
          }}
        />
        <div
          className="trackermain-button-container"
          style={{
            height: 80 * fontMod,
            width: "80%",
            border: "2px solid rgb(0, 255, 115)",
          }}
        >
          <div
            className="trackermain-button"
            onClick={() => {
              let newVal = isNaN(parseInt(value)) ? 0 : parseInt(value) + 1;
              setValue(newVal);
            }}
          >
            <div
              className="trackermain-button-text"
              style={{
                fontSize: 80 * fontMod,
                marginTop: -10 * fontMod,
              }}
            >
              +
            </div>
          </div>
          <div>B</div>
          <div>C</div>
        </div>
      </div>
      <div style={{ height: 60 * fontMod }}></div>
    </div>
  );
}
