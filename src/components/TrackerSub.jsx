import React, { useState } from "react";
import "./TrackerSub.scss";

export default function TrackerSub({ windowMod, title, theme, resetVal }) {
  const [value, setValue] = useState(resetVal);

  let fontMod = ((windowMod.x + windowMod.y) / 2);

  console.log(value);

  return (
    <div className="trackersub-container"
      style={{
            border: `3px solid ${theme}`,
          }}
    >
      <div
        className="trackersub-title"
        style={{
          fontSize: 40 * fontMod,
        }}
      >
        {title}
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
            border: `2px solid ${theme}`,
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
              setValue(prev => isNaN(parseInt(prev)) ? 0 : parseInt(prev) + 1);
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
              setValue(prev => isNaN(parseInt(prev)) ? 0 : parseInt(prev) - 1);
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
              setValue(resetVal);
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
