import { useFormik } from 'formik';
import { object, string } from 'yup';
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

const BookForm = ({ onSubmit, initialValues = INITIAL_VALUES }) => {
  const { values, errors, touched, isValid, isSubmitting, setSubmitting, handleChange, handleBlur, handleSubmit, setErrors, setFieldValue } = useFormik({
    initialValues: {...initialValues, genreText: ''},
    onSubmit: (values) => {
      setSubmitting(true)

      const data = {...values}
      delete data.genreText

      onSubmit(data)
        .catch(error => {
          const errors = error.response.data.errors;

          setErrors(errors);
        })
    },
    validationSchema: bookSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
  });

  const onClickGenre = () => {
    if (values.genreText) {
      setFieldValue('genres', [...values.genres, values.genreText]);
      setFieldValue('genreText', '');
    }
  }

  const onDeleteGenre = (genreToDelete) => {
    setFieldValue('genres', values.genres.filter(genre => genre !== genreToDelete))
  }

  return (
    <form onSubmit={handleSubmit} data-bs-theme="light">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Título
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
          Descripción
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
          Imagen
        </label>
        <input
          className={`form-control ${errors.cover && touched.cover ? 'is-invalid' : ''}`}
          id="cover"
          onChange={handleChange}
          name="cover"
          value={values.cover}
          onBlur={handleBlur}
        />
        {errors.cover && touched.cover ? (
          <div className="invalid-feedback">{errors.cover}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="genreText" className="form-label">
          Géneros
        </label>
        <div className="d-flex gap-2">
          <input
            className={`form-control ${errors.genres && touched.genres ? 'is-invalid' : ''}`}
            id="genreText"
            onChange={handleChange}
            name="genreText"
            value={values.genreText}
            onBlur={handleBlur}
          />
          <button type="button" onClick={onClickGenre} className="btn btn-primary flex-shrink-0">Añadir género</button>
        </div>
        <div className="mt-3 d-flex gap-2">
          {values.genres.map(genre => (
            <div key={genre}>
              <span className="py-3 px-2 border rounded d-inline-flex align-items-center gap-2">
                {genre}
                <button onClick={() => onDeleteGenre(genre)} className="btn btn-outline-danger">X</button>
              </span>
            </div>
          ))}
        </div>
      </div>

      <button disabled={!isValid || isSubmitting} type="submit" className="btn btn-primary">
        {isSubmitting ? <><ClipLoader color="#fff" size={12} /> Creando...</> : 'Enviar'}
      </button>
    </form>
  );
};

export default BookForm;
