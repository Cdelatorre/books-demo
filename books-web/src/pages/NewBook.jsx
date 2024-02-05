import BookForm from "../components/BookForm";

const NewBook = () => {
  return (
    <div>
      <h1>New book</h1>

      {/* Crear un componente reutilizable con la lógica del formulario */}
      <BookForm />
    </div>
  )
}

export default NewBook;