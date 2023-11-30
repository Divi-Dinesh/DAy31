import React from 'react';
import { useFormik } from 'formik';

const AuthorForm = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div>
        <label>Birth Date:</label>
        <input
          type="date"
          name="birthDate"
          onChange={formik.handleChange}
          value={formik.values.birthDate}
        />
      </div>
      <div>
        <label>Biography:</label>
        <textarea
          name="biography"
          onChange={formik.handleChange}
          value={formik.values.biography}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );

};

export default AuthorForm;
