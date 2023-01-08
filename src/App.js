import React from "react";
import RoutersApp from "./routers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <RoutersApp/>
    </div>
  );
}

export default App;
