import React from 'react';
import { BrowserRouter as Router, Route } from  "react-router-dom";

import signin from "./components/signin.component"

function App() {
  return (
    <Router>
        <Route path = "/register" component = { signin }/>
    </Router>
  );
}

export default App;
