import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <div className="page-background">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
