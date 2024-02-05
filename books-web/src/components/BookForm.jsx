import { useFormik } from 'formik';
import { object, string } from 'yup';
import { createBook } from '../services/booksService';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const bookSchema = object({
  title: string().required('Campo requirido'),
  abstract: string().required('Campo requirido'),
  isbn: string().required('Campo requirido'),
  cover: string()
    .required('Campo requirido')
    .url('Formato no válido, tiene que ser una URL'),
});

const INITIAL_VALUES = {
  title: '',
  abstract: '',
  isbn: '',
  cover: '',
  genres: [],
};

const BookForm = () => {
  const navigate = useNavigate();
  const { values, errors, touched, isValid, isSubmitting, setSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      setSubmitting(true)

      createBook(values)
        .then(createdBook => {
          navigate(`/books/${createdBook.id}`)
        })
        .catch(error => console.error(error))
        .finally(() => {
          setSubmitting(false)
        })
    },
    validationSchema: bookSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
  });

  console.log(isSubmitting);


  return (
    <form onSubmit={handleSubmit} data-bs-theme="light">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          className={`form-control ${errors.title && touched.title ? 'is-invalid' : ''}`}
          id="title"
          onChange={handleChange}
          name="title"
          value={values.title}
          onBlur={handleBlur}
        />
        {errors.title && touched.title ? (
          <div className="invalid-feedback">{errors.title}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="abstract" className="form-label">
          Abstract
        </label>
        <textarea
          className={`form-control ${errors.abstract && touched.abstract ? 'is-invalid' : ''}`}
          id="abstract"
          onChange={handleChange}
          name="abstract"
          value={values.abstract}
          rows="3"
          onBlur={handleBlur}
        />
        {errors.abstract && touched.abstract ? (
          <div className="invalid-feedback">{errors.abstract}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="isbn" className="form-label">
          ISBN
        </label>
        <input
          className={`form-control ${errors.isbn && touched.isbn ? 'is-invalid' : ''}`}
          id="isbn"
          onChange={handleChange}
          name="isbn"
          value={values.isbn}
          onBlur={handleBlur}
        />
        {errors.isbn && touched.isbn ? (
          <div className="invalid-feedback">{errors.isbn}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="cover" className="form-label">
          Cover image
        </label>
        <input
          className={`form-control ${errors.cover && touched.cover ? 'is-invalid' : ''}`}
          id="cover"
          onChange={handleChange}
          name="cover"
          value={values.cover}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {errors.cover && touched.cover ? (
          <div className="invalid-feedback">{errors.cover}</div>
        ) : null}
      </div>

      <button disabled={!isValid || isSubmitting} type="submit" className="btn btn-primary">
        {isSubmitting ? <><ClipLoader color="#fff" size={12} /> Creando...</> : 'Crear libro'}
      </button>
    </form>
  );
};

export default BookForm;
