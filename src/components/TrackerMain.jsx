import React, { useState } from "react";
import "./TrackerMain.scss";

export default function TrackerMain({ windowMod }) {
    let fontMod = (windowMod.x + windowMod.y) / 2;
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
        <div>
            <input
            className="inputField"
            type="number"
            style={{
                height: 40 * fontMod,
                width: '60%',
                fontSize: 40 * fontMod,
                border: '2px solid rgb(0, 255, 115)'
            }}
            ></input>
        </div>
        <div>Authority</div>
        </div>
    );
}
