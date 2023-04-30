import React from "react";
import "./DigiClock.css";

const DigiClock = () => {
  const hour = new Date().getHours();
  let greeting = "";
  let cssStyle = {};
  let message = "";

  switch (true) {
    case hour < 12:
      greeting = "GOOD MORNING";
      cssStyle = { color: "green" };
      message = "Believe in yourself, take action, and make every moment count.";
      break;
    case hour < 19:
      greeting = "GOOD AFTERNOON";
      cssStyle = { color: "orange" };
      message = "Keep pushing through, stay focused, and never give up on your dreams.";
      break;
    default:
      greeting = "GOOD NIGHT";
      cssStyle = { color: "black" };
      message = "Take a moment to reflect on your day, acknowledge your progress, and let go of any negativity.";
      break;
  }

  return (
    <>
      <div>
        <h1 className="h1tag">
          HELLO <span style={cssStyle}>{greeting}</span>{" "}
        </h1>

        <p className="Msg" style={cssStyle}>{message}</p>
      </div>
    </>
  );
};

export default DigiClock;