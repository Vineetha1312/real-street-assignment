import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepThree = ({ nextStep, prevStep, formData, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      bedrooms: formData.bedrooms || '',
      bathrooms: formData.bathrooms || '',
      parking: formData.parking || '',
      builtYear: formData.builtYear || ''
    },
    validationSchema: Yup.object({
      bedrooms: Yup.number().required('Number of bedrooms is required'),
      bathrooms: Yup.number().required('Number of bathrooms is required'),
      parking: Yup.string().required('Parking information is required'),
      builtYear: Yup.number().required('Built year is required').min(1900, 'Year should be valid')
    }),
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      nextStep();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 pb-4 ">
      <h2 className="text-lg font-semibold">Property Features</h2>

      <div>
        <label className="block text-sm font-medium">Bedrooms</label>
        <input
          type="number"
          name="bedrooms"
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bedrooms}
        />
        {formik.touched.bedrooms && formik.errors.bedrooms && (
          <div className="text-red-600 text-sm mt-1">{formik.errors.bedrooms}</div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Bathrooms</label>
        <input
          type="number"
          name="bathrooms"
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bathrooms}
        />
        {formik.touched.bathrooms && formik.errors.bathrooms && (
          <div className="text-red-600 text-sm mt-1">{formik.errors.bathrooms}</div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Parking</label>
        <select
          name="parking"
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.parking}
        >
          <option value="" disabled>Select</option>
          <option value="Garage">Garage</option>
          <option value="Street">Street</option>
          <option value="None">None</option>
        </select>
        {formik.touched.parking && formik.errors.parking && (
          <div className="text-red-600 text-sm mt-1">{formik.errors.parking}</div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Built Year</label>
        <input
          type="number"
          name="builtYear"
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.builtYear}
        />
        {formik.touched.builtYear && formik.errors.builtYear && (
          <div className="text-red-600 text-sm mt-1">{formik.errors.builtYear}</div>
        )}
      </div>

      <div className="flex justify-between mt-4">
        <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded-md" onClick={prevStep}>
          Previous
        </button>
        <button type="submit" className="bg-black text-white py-2 px-4 rounded-md">
          Next
        </button>
      </div>
    </form>
  );
};

export default StepThree;
