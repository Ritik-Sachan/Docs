import "./styles.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Editor from "./components/Editor";
import { Routes, Route } from "react-router-dom";
import { app, database } from "./firebaseConfig";

export default function App() {
  return (
    <div className="app">
      <div className="box">
        <img
          src="https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png"
          alt=""
        />
        <h1>Docs</h1>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home database={database} />} />
        <Route path="/editor/:id" element={<Editor database={database} />} />
      </Routes>
    </div>
  );
}
