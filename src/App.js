import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import Alert from "./component/Alert";
import About from "./component/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Dwidutils - Dark mode";
      // setInterval(() => {
      //   document.title = "Dwidutil is amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Dwidutil Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Dwidutils - Light mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Logic Validator" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <Textform
                showAlert={showAlert}
                heading="Dwidutils - Word counter, character counter, remove extra spaces"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
