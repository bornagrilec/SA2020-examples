import React from 'react';
import './App.css';

import ClassicForm from './components/ClassicForm';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';
import ReactHookForm from './components/ReactHookForm';

// Main App component
const App = () => {
  return (
    // <ClassicForm />
    // <UncontrolledForm />
    // <ControlledForm />
    <ReactHookForm />
  );
}

export default App;
