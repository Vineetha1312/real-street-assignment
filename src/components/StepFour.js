import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepFour = ({ nextStep, prevStep, formData, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      plotArea: formData.plotArea || '',
      areaUnits: formData.areaUnits || 'Square Feet'
    },
    validationSchema: Yup.object({
      plotArea: Yup.number().required('Plot area is required'),
      areaUnits: Yup.string().required('Area units are required')
    }),
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      nextStep();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 pb-4 ">
      <h2 className="text-lg font-semibold">Area Details</h2>

      <div>
        <label className="block text-sm font-medium">Plot Area</label>
        <input
          type="number"
          name="plotArea"
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.plotArea}
        />
        {formik.touched.plotArea && formik.errors.plotArea && (
          <div className="text-red-600 text-sm mt-1">{formik.errors.plotArea}</div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Area Units</label>
        <select
          name="areaUnits"
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.areaUnits}
        >
          <option value="Square Feet">Square Feet</option>
          <option value="Square Meters">Square Meters</option>
          <option value="Acres">Acres</option>
        </select>
        {formik.touched.areaUnits && formik.errors.areaUnits && (
          <div className="text-red-600 text-sm mt-1">{formik.errors.areaUnits}</div>
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

export default StepFour;
