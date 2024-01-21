import React, { useState } from "react";
import PropType from "prop-types";

export default function About(props) {
  //   const [myStyle, setMyStyle] = useState({
  //     color: "black",
  //     backgroundColor: "white",
  //   });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36, 74, 104)" : "white",
    // border: "2px solid white",
    // borderColor: props.mode === "dark" ? "white" : "#042743",
  };

  //   const [btnText, setBtnText] = useState("Enable Dark mode");

  //   const toggleStyle = () => {
  //     if (myStyle.color === "white") {
  //       setMyStyle({
  //         color: "black",
  //         backgroundColor: "white",
  //       });
  //       setBtnText("Enable Dark mode");
  //     } else {
  //       setMyStyle({
  //         color: "white",
  //         backgroundColor: "black",
  //         border: "1px solid white",
  //       });
  //       setBtnText("Enable Light mode");
  //     }
  //   };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Discuss what happens in the passage and why it is significant to
              the work as a whole. Consider what is said, particularly
              subtleties of the imagery and the ideas expressed. Assess how it
              is said, considering how the word choice, the ordering of ideas,
              sentence structure, etc., contribute to the meaning of the
              passage.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              The photos on Unsplash are free to use and can be used for most
              commercial, personal projects, and for editorial use. You do not
              need to ask permission from or provide credit to the photographer
              or Unsplash, although it is appreciated when possible.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Browser compatibility, often known as cross-browser compatibility,
              refers to whether or not a website or web application functions as
              intended in any particular browser version on different devices.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
