import { useEffect, useState } from "react";
import axios from "axios";
/*
function App() {
  const [url, setUrl] = useState("https://www.parchaa.com/");

  useEffect(() => {
    const start = async () => {
      const link = await axios.get(`${baseUrl}` + "home");
      setUrl(link.data.url);
    };
    start();
  }, []);

  const handleHome =  () => {
    setUrl("https://www.parchaa.com/home")
  };
  const handleApp =  () => {
  axios.post("https://app.parchaa.com/version-raju-25-2/api/1.1/wf/login-from-frontend",{phone:"9115096873"}).then(res=>console.log(res.data.response))
    setUrl("https://app.parchaa.com/doctor_parchaa_index");
  };
  const handleAbout =  () => {
    setUrl("https://www.parchaa.com/about");
  };
  const handleContact =  () => {
    setUrl("https://www.parchaa.com/contact");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <h1>HMIS</h1>
          <div>
            <button onClick={handleHome}>Home</button>
          </div>
          <div>
            <button onClick={handleApp}>Log in</button>
          </div>
          <div>
            <button onClick={handleAbout}>About us</button>
          </div>
          <button onClick={handleContact}>Contact Us</button>
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
}*/

const App = () => {
  let user_id;
  axios
    .post(
      "https://app.parchaa.com/version-raju-25-2/api/1.1/wf/login-from-frontend",
      { phone: "9115096873" }
    )
    .then((res) => {
      user_id = res.data.response.user_id;
      localStorage.setItem("user_id", user_id);
    });

  function getLocalStorageData() {
  return JSON.stringify(localStorage.getItem('user_id'));
}

// Listen for messages from website 2
window.addEventListener('message', receiveMessage, false);
function receiveMessage(event) {
  // Check that the message is coming from website 2
  if (event.origin !== 'https://app.parchaa.com/version-raju-25-2/login-doctor') return;

  // If the message is 'getData', send the local storage data to website 2
  if (event.data === 'getData') {
    var data = getLocalStorageData();
    event.source.postMessage(data, event.origin);
  }
}
  return (
    <div>
      <iframe src="https://app.parchaa.com/version-raju-25-2/login-doctor"></iframe>
    </div>
  );
};
export default App;
