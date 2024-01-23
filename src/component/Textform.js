import React, { useState } from "react";
import PropType from "prop-types";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    // console.log("Lowercase button clicked" + text);
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleReverseText = () => {
    let split = text.split("");
    let reverseText = split.reverse();
    let newText = reverseText.join("");
    setText(newText);
  };

  const handleClearText = () => {
    let newText = " ";
    setText(newText);
  };

  const handleCopy = () => {
    // console.log("I am copy");
    // var text = document.getElementById("myBox");
    // text.select();
    // text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
  };

  const handlefirstClick = () => {
    const words = text.split(" ");

    // convert the first letter of each word to upppercase
    const convertedWord = words.map((word) => {
      const firstletter = word.charAt(0).toUpperCase();
      // console.log(firstletter)
      return firstletter + word.slice(1);
    });
    // join the words back together with spaces
    const convertedText = convertedWord.join(" ");
    setText(convertedText);
  };

  const [text, setText] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1 className="my-2">{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            rows="4"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleClearText}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleReverseText}
        >
          Reverse Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          id="myBox"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handlefirstClick}
        >
          First letter upper case
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary : </h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} letters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
