import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // setText("Enter");
  const handleUpClick = () => {
    // console.log("Handle UpperCase Click");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been Capitalized","success");
  };

  const handleLoClick = () => {
    //   console.log("Handle UpperCase Click");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Text has been LowerCase","success");
  };

  const handleClearClick = () => {
    setText(" ");
    props.showAlert("Text has been clear","success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    // alert("Text copied to clipboard!");
    props.showAlert("Text has been Copy","success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText.trim());
    props.showAlert("Remove extra spaces","success");
  };
  

  const handleOnChange = (event) => {
    //  console.log("Handle On Change ")
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{color: props.mode==="dark" ? "white" : "#042743"}}
        
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myForm"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
          backgroundColor: props.mode==="dark" ? "gray" : "white",
          color: props.mode==="dark" ? "white" : "#042743",
          
        }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
         style={{
           backgroundColor: props.mode==="dark" ? "#042743" : "white",
          color: props.mode==="dark" ? "white" : "#042743"
         }}
      >
        <h2>Text Summary</h2>
        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length !== 0).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to Read Text</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview."}</p>
      </div>
    </>
  );
}
