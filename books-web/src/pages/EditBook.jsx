import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import { useEffect, useState } from "react";
import { editBook, getBookDetail } from "../services/booksService";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({})
  const [loading, setLoading] = useState({})

  useEffect(() => {
    getBookDetail(id)
      .then((bookDB) => {
        setBook(bookDB);
        setLoading(false);
      })
      .catch(error => console.log(error))
  }, [id])

  const initialValues = {
    title: book.title,
    abstract: book.abstract,
    isbn: book.isbn,
    cover: book.cover,
    genres: book.genres,
  }

  const onSubmit = (values) => {
    return editBook(id, values)
      .then(editedBook => {
        navigate(`/books/${editedBook.id}`)
      })
  }

  return (
    <div>
      <h1>Editar libro</h1>

      {/* Crear un componente reutilizable con la lógica del formulario */}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <BookForm initialValues={initialValues} onSubmit={onSubmit} />
      )}
      
    </div>
  )
}

export default EditBook;