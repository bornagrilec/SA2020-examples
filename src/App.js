import React, { useEffect, useState } from 'react';

import SessionStorage from './components/SessionStorage';
import LocalStorage from './components/LocalStorage';

// Main App component
const App = () => {
  const [token, setToken] = useState(true);

  return (
    <>
      {/* Uncomment nex line if you want to try our implementation with Session storage */}
      <SessionStorage />
      {/* <LocalStorage /> */}
    </>
  );
}

export default App;
