import { useCallback, useEffect, useState } from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import {
  deleteBook,
  getBookDetail,
  getLatestBooks,
} from '../services/booksService';
import { useParams, useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({});
  const [latestBooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookData = useCallback(() => {
    const promises = [getBookDetail(id), getLatestBooks()];
    Promise.all(promises)
      .then(([book, latestBooks]) => {
        setBook(book);
        setLatestBooks(latestBooks);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, [id]);

  useEffect(() => {
    fetchBookData();
  }, [fetchBookData]);

  const onDelete = () => {
    if (confirm(`Estas a punto de borrar el libro: ${book.title}`)) {
      deleteBook(id)
        .then(() => {
          navigate('/books');
        })
        .catch((e) => console.error(e));
    }
  };

  const onClickCard = () => {
    setLoading(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="bg-primary-subtle text-light rounded p-3">
      {loading ? (
        <div className="d-flex justify-content-center mt-2">
          <ClimbingBoxLoader color="#fff" />
        </div>
      ) : (
        <div>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <img className="img-fluid" src={book.cover} alt={book.title} />
              {book.genres && book.genres.length > 0 ? (
                <div className="d-flex gap-2 mt-3">
                  {book.genres.map((genre, i) => (
                    <span className="badge bg-secondary" key={i}>
                      {genre}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="col">
              <h1>{book.title}</h1>
              <p>{book.abstract}</p>
              <p>ISBN: {book.isbn}</p>
              <button onClick={onDelete} className="btn btn-danger">
                Borrar libro
              </button>
            </div>
          </div>

          <div>
            <h2>Nuestros últimos libros publicados</h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {latestBooks.map((book) => (
                <div key={book.id} className="col">
                  <BookCard
                    {...book}
                    onClick={onClickCard}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
