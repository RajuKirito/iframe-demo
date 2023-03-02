import { useEffect } from 'react';

function App() {
  // Store data in local storage
  useEffect(() => {
    localStorage.setItem('myData', 'Hello from website1!');
  }, []);

  // Listen for messages from website2
  useEffect(() => {
    window.addEventListener('message', event => {
      if (event.origin === 'https://app.parchaa.com/version-raju-25-2/login-doctor') {
        console.log('Received message from website2:', event.data);
      }
    });
  }, []);

  return (
    <div>
      <h1>Website 1</h1>
    </div>
  );
}

export default App;
