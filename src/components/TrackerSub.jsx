import React, { useState } from "react";
import "./TrackerSub.scss";

export default function TrackerSub({ windowMod }) {
  const [value, setValue] = useState(50);

  let fontMod = ((windowMod.x + windowMod.y) / 2);

  console.log(value);

  return (
    <div className="trackersub-container">
      <div
        className="trackersub-title"
        style={{
          fontSize: 40 * fontMod,
        }}
      >
        Authority
      </div>
      <div className="trackersub-subcontainer">
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
          className="trackersub-button-container"
          style={{
            height: 60 * fontMod,
            width: "80%",
            // border: "2px solid rgb(0, 255, 115)",
          }}
        >
          <div
            className="trackersub-button"
            onClick={() => {
              let newVal = isNaN(parseInt(value)) ? 0 : parseInt(value) + 1;
              setValue(newVal);
            }}
          >
            <div
              className="trackersub-button-text"
              style={{
                fontSize: 60 * fontMod,
                marginTop: -10 * fontMod,
              }}
            >
              +
            </div>
          </div>
          <div
            className="trackersub-button"
            onClick={() => {
              let newVal = isNaN(parseInt(value)) ? 0 : parseInt(value) - 1;
              setValue(newVal);
            }}
          >
            <div
              className="trackersub-button-text"
              style={{
                fontSize: 90 * fontMod,
                marginTop: -10 * fontMod,
              }}
            >
              -
            </div>
          </div>
          <div
            className="trackersub-button2"
            onClick={() => {
              let newVal = 50;
              setValue(newVal);
            }}
          >
            <div
              className="trackersub-button-text"
              style={{
                fontSize: 15 * (fontMod * 2.5),
                marginTop: -5 * fontMod,
              }}
            >
              Reset
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 30 * fontMod}}></div>
    </div>
  );
}
