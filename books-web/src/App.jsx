import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'
import NewBook from './pages/NewBook'
import EditBook from './pages/EditBook'

function App() {
  return (
    <div data-bs-theme="dark">
      <Navbar />

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/books/new" element={<NewBook />} />
          <Route path="/books/:id/edit" element={<EditBook />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
