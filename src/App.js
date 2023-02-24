import { Box, Grid, Stack } from "@mui/material";
import { useState } from "react";
import "./index.css";

function App() {
  const [url, setUrl] = useState("https://parchaa.com/");
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <h1>HMIS</h1>
          <div>
            <button onClick={() => setUrl("https://parchaa.com/")}>Home</button>
          </div>
          <div>
            <button onClick={() => setUrl("https://app.parchaa.com/")}>
              App
            </button>
          </div>
          <div>
            <button onClick={() => setUrl("https://www.parchaa.com/about")}>
              About us
            </button>
          </div>
          <button onClick={() => setUrl("https://www.parchaa.com/contact")}>
            Contact Us
          </button>
        </div>
        <div className="col-10">
          <iframe
            src={url}
            width="100%"
            height="630vh"
            style={{
              style: "border:1px solid black"
              // width: "100%",
              // height: "300",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
