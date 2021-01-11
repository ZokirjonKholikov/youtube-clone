import React from "react";
import StickyBox from "react-sticky-box";
import "./index.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Recomendedvideos from "./Components/RecomendedVideos/Recomendedvideos";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
          <Sidebar />
        <Recomendedvideos />
      </div>
    </div>
  );
}

export default App;
