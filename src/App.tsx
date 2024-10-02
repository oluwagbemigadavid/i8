import React from 'react';
import { Footer, Nav } from './components';
import { HOMEPAGE } from './pages';

function App() {
  return (
    <div className="App">
      <Nav />
      <HOMEPAGE />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
