import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './add-product-form.module.scss'

import { initialValues } from './initialValues';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  year: Yup.number()
    .min(1900, 'Must be greater than 1900')
    .max(
      new Date().getFullYear(),
      `Must be less than or equal to ${new Date().getFullYear()}`
    )
    .required('Required'),
  rating: Yup.number()
    .min(0, 'Must be greater than or equal to 0')
    .max(5, 'Must be less than or equal to 5')
    .required('Required'),
  description: Yup.string(),
  price: Yup.number(),
  photo: Yup.string(),
  stock: Yup.number(),
});

function AddProductForm({ onSubmit }) {
  
  const handleSubmit = (event, formik) => {
    event.preventDefault();
    onSubmit(formik.values);
    formik.resetForm();
  };

  return (
    <div>
      <h2 className={css.title}>Fill in a form to add a product</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {formik => (
          <Form className={css.form} onSubmit={e => handleSubmit(e, formik)}>
            <div>
              <label htmlFor="title" className={css.label}>
                Title
              </label>
              <Field
                type="text"
                name="title"
                id="name"
                className={css.field}
                onChange={formik.handleChange}
                placeholder="Enter a product name"
              />
              <ErrorMessage
                name="title"
                component="div"
                className={css.error}
              />
            </div>
            <div>
              <label htmlFor="author" className={css.label}>
                Author
              </label>
              <Field
                type="text"
                name="author"
                id="author"
                className={css.field}
                onChange={formik.handleChange}
                placeholder="Enter author's name"
              />
              <ErrorMessage
                name="author"
                component="div"
                className={css.error}
              />
            </div>
            <div>
              <label htmlFor="category" className={css.label}>
                Category
              </label>
              <Field
                type="text"
                name="category"
                id="category"
                className={css.field}
                onChange={formik.handleChange}
                placeholder="Enter a product category"
              />
              <ErrorMessage
                name="category"
                component="div"
                className={css.error}
              />
            </div>
            <div>
              <label htmlFor="year" className={css.label}>
                Year
              </label>
              <Field
                type="number"
                name="year"
                id="year"
                className={css.field}
                onChange={formik.handleChange}
                placeholder="Enter a year"
              />
              <ErrorMessage name="year" component="div" className={css.error} />
            </div>
            <div>
              <label htmlFor="rating" className={css.label}>
                Rating
              </label>
              <Field
                type="number"
                name="rating"
                id="rating"
                step={1}
                max={5}
                min={0}
                className={css.field}
                onChange={formik.handleChange}
                placeholder="Enter a product rating"
              />
              <ErrorMessage
                name="rating"
                component="div"
                className={css.error}
              />
            </div>
            <div>
              <label htmlFor="price" className={css.label}>
                Price
              </label>
              <Field
                min={0}
                type="number"
                name="price"
                id="price"
                className={css.field}
                onChange={formik.handleChange}
                placeholder="Enter a price"
              />
            </div>
            <div>
              <label htmlFor="stock" className={css.label}>
                Stock
              </label>
              <Field
                type="number"
                name="stock"
                id="stock"
                min={0}
                className={css.field}
                onChange={formik.handleChange}
                placeholder="Enter a stock"
              />
            </div>
            <div>
              <label htmlFor="photo" className={css.label}>
                Photo
              </label>
              <Field
                type="text"
                name="photo"
                id="photo"
                className={css.field}
                onChange={formik.handleChange}
                placeholder="Enter a photo link"
              />
            </div>
            <div>
              <label htmlFor="description" className={css.label}>
                Description
              </label>
              <Field
                type="text"
                name="description"
                id="description"
                className={css.field}
                onChange={formik.handleChange}
                placeholder="Enter a description"
              />
            </div>
            <button type="submit" className={css.button}>
              Add Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddProductForm;
