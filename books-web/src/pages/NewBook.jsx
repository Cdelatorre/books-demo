import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import { createBook } from "../services/booksService";

const NewBook = () => {
  const navigate = useNavigate()
  const onSubmit = (values) => {
    return createBook(values)
        .then(createdBook => {
          navigate(`/books/${createdBook.id}`)
        })
  }

  return (
    <div>
      <h1>Crear libro</h1>

      {/* Crear un componente reutilizable con la lógica del formulario */}
      <BookForm onSubmit={onSubmit} />
    </div>
  )
}

export default NewBook;