import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import Store from './app/Store'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CategoryPage from './components/CategoryPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      {/* ✅ Add basename for GitHub Pages */}
      <Router basename="/Layerflex">
        <Routes>
          <Route path="/" element={<App />} />

          {/* Dynamic route for categories */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />

          {/* Explicit category routes so refresh works */}
          <Route path="/category/marvel-models" element={<CategoryPage />} />
          <Route path="/category/gaming-assets" element={<CategoryPage />} />
          <Route path="/category/dc-characters" element={<CategoryPage />} />
          <Route path="/category/cartoon-&-anime" element={<CategoryPage />} />

          {/* Fallback route */}
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)
