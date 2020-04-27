import React, { useState } from 'react';

// Article component that can be edited if authenticated
const Article = (props) => {
  return (
    <>
      <h2>Some article title</h2>
      {props.isLoggedIn ? <button>Edit</button> : null}
    </>
  );
}

// Articles component
const Articles = (props) => {
  return (
    <>
      <Article isLoggedIn={props.isLoggedIn} />
      <Article isLoggedIn={props.isLoggedIn} />
    </>
  );
}

// Main App component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Articles isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;






