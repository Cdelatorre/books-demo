import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { getBooks } from "../services/booksService";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks()
      .then((books) => {
        setBooks(books);
        setLoading(false);
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <h1 className="bg-primary-subtle text-light p-3 rounded">Descubre nuestro catálogo de libros 📖</h1>

      {
        loading
        ? (
          <div className="d-flex justify-content-center mt-2">
            <ClimbingBoxLoader color="#031633" />
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {books.map((book) => (
              <div key={book.id} className="col">
                <BookCard {...book} />
              </div>
            ))}
          </div>
        )
      }

    </div>
  )
}

export default Books;