import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./app/Store";
import CategoryPage from "./components/CategoryPage";
import { Toaster } from "react-hot-toast";
import "./index.css";

// ✅ Categories titles for homepage links
const categories = [
  { title: "Marvel Model" },
  { title: "Cartoon & Anime" },
  { title: "Gaming Assets" },
  { title: "DC Characters" },
];

// ✅ Home page showing all categories
const Home = () => {
  return (
    <div className="nike-container p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Categories</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            to={`/category/${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              {cat.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ✅ Render App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <Router basename="/Layerflex">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Dynamic category page */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
