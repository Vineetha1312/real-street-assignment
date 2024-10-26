import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepTwo = ({ nextStep, prevStep, formData, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      city: formData.city || '',
      area: formData.area || ''
    },
    validationSchema: Yup.object({
      city: Yup.string().required('City is required'),
      area: Yup.string().required('Area is required')
    }),
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      nextStep();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 pb-4">
      <h2 className="text-lg font-semibold">Property Location</h2>

      <div>
        <label className="block text-sm font-medium">City</label>
        <select
          name="city"
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        >
          <option value="" disabled>Select</option> 
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          <option value="Houston">Houston</option>
        </select>
        {formik.touched.city && formik.errors.city && (
          <div className="text-red-600 text-sm mt-1">{formik.errors.city}</div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Areas</label>
        <input
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          type="text"
          name="area"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.area}
        />
        {formik.touched.area && formik.errors.area && (
          <div className="text-red-600 text-sm mt-1">{formik.errors.area}</div>
        )}
      </div>

      <div className="flex justify-between space-x-4 mt-4">
        <button
          type="button"
          className="bg-gray-500 text-white py-2 px-4 rounded-md"
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-md"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
