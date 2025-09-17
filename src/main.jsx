import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./app/Store";
import App from "./App";
import CategoryList from "./components/CategoryList";
import CategoryPage from "./components/CategoryPage";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <Router basename="/Layerflex">
        <Routes>
          {/* Home page showing all categories */}
          <Route path="/" element={<CategoryList />} />

          {/* Dynamic category page */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />

          {/* Fallback for unknown routes */}
          <Route path="*" element={<CategoryList />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
