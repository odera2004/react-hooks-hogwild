import React, { useState } from 'react';
import hogs from '../porkers_data';
import HogList from './HogList';
import AddHogForm from './AddHogForm';
import Nav from "./Nav"



function App() {
  const [hogData, setHogData] = useState(hogs);

  const addHog = (newHog) => {
    setHogData([...hogData, newHog]);
  };

  return (
    <div>
      <h1>Hog Dashboard</h1>
	  <Nav />
      <HogList hogs={hogData} />
      <AddHogForm Hog={addHog} />
      <hogs />
    </div>
  );
}

export default App;
