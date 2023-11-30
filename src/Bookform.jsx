import React from 'react'
import { useFormik } from 'formik';

export const Bookform = ({onSubmit, initialValues}) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
      });
    
      return (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Title:</label>
             <input
              type="text"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            /> 
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              name="author"
              onChange={formik.handleChange}
              value={formik.values.author}
            />
          </div>
          <div>
            <label>ISBN:</label>
            <input
              type="text"
              name="isbn"
              onChange={formik.handleChange}
              value={formik.values.isbn}
            />
          </div>
          <div>
            <label>Publication Date:</label>
            <input
              type="date"
              name="publicationDate"
              onChange={formik.handleChange}
              value={formik.values.publicationDate}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      );
}
