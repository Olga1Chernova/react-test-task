import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './add-product-form.module.scss'

const initialValues = {
  name: '',
  brand: '',
  rating: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  brand: Yup.string().required('Required'),
  rating: Yup.number()
    .min(0, 'Must be greater than or equal to 0')
    .max(5, 'Must be less than or equal to 5')
    .required('Required'),
});

function AddProductForm({ handleSubmit }) {
  return (
    <div>
      <h2>Add a Product</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="brand">Brand</label>
              <Field type="text" name="brand" id="brand" />
              <ErrorMessage name="brand" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="rating">Rating</label>
                <Field type="number" name="rating" id="rating" step={0.1} max={5} min={0} />
              <ErrorMessage name="rating" component="div" className="error" />
            </div>
            <button type="submit">Add Product</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddProductForm;
