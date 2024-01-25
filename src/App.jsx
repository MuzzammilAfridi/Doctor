import { useState } from "react";

import "./App.css";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const navItem = ["Home", "About Us", "Our Service", "Contact Us"];

  return (
    <div className="overflow-x-hidden">
      <Nav navItem={navItem} />
      <Outlet />
    </div>
  );
}

export default App;
