// @ts-ignore
import Push from 'push.js';
import React from 'react';
import './App.css';

function App() {
  const push = () => {
    Push.create('Hello world!', {
      body: "How's it going?",
      icon: '/logo192.png',
      timeout: 4000,
      onClick: ({ target }: Event) => {
        if (target) {
          const notification = target as Notification;
          window.focus();
          notification.close();
        }
      },
    });
  };

  return (
    <div className="App">
      <button onClick={push}>push</button>
    </div>
  );
}

export default App;
