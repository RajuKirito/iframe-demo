import { useState } from "react";

function App() {
  const [url, setUrl] = useState("https://www.parchaa.com/");
  return (
    <div>
      <h1>hi</h1>
      <button onClick={() => setUrl("https://www.parchaa.com/")}>Home</button>
      <button onClick={() => setUrl("https://www.parchaa.com/contact")}>
        Contact Us
      </button>
      <iframe src={url} style={{ width: "100%", height: "90%" }}></iframe>
    </div>
  );
}

export default App;
