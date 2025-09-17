import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Tailwind CSS entry
import { Provider } from 'react-redux'
import Store from './app/Store'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CategoryPage from './components/CategoryPage'

// Import Layerflex page (create this file if it doesn't exist)
import Layerflex from './Layerflex' 
import NotFound from './components/NotFound' // optional 404 page

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/Layerflex" element={<Layerflex />} /> {/* Added route */}
          <Route path="*" element={<NotFound />} /> {/* Optional catch-all */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)
