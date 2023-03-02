import { useEffect } from 'react';

function App() {
  // Listen for messages from the iframe containing website 2
  useEffect(() => {
    window.addEventListener('message', event => {
      if (event.origin === 'https://app.parchaa.com/version-raju-25-2/login-doctor') {
        console.log('Received message from website 2:', event.data);
      }
    });
  }, []);

  return (
    <div>
      <iframe id="website2-iframe" src="https://app.parchaa.com/version-raju-25-2/login-doctor"></iframe>
    </div>
  );
}

export default App;
