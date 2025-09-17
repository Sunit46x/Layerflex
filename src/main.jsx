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
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="*" element={<App />} />
        </Routes>
      </Router>

    </Provider>
  </React.StrictMode>
)
