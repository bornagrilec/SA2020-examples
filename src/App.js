import React, { useEffect, useState } from 'react';

import VanillaCookie from './components/VanillaCookie';
import ModuleCookie from './components/ModuleCookie';

// Main App component
const App = () => {
  const [vanillaCookie, setVanillaCookie] = useState(true);

  return (
    <>
      {/* Uncomment nex line if you want to try our implementation on Vanilla JS */}
      {/* <VanillaCookie /> */}
      <ModuleCookie />
    </>
  );
}

export default App;
