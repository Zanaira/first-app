import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtlis_Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtlis_Dark Mode";
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          home="Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3"></div>
        {/* <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
           exact path="/"
            element={ */}
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            {/* }
          ></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
export default App;
