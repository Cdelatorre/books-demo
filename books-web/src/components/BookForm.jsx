import { useFormik } from 'formik';
import { object, string } from 'yup';

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
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      console.log({ values });
    },
    validationSchema: bookSchema,
    validateOnChange: false,
    validateOnBlur: true,
  });

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
        />
        {errors.cover && touched.cover ? (
          <div className="invalid-feedback">{errors.cover}</div>
        ) : null}
      </div>

      <button type="submit" className="btn btn-primary">
        Create book
      </button>
    </form>
  );
};

export default BookForm;
