import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepOne = ({ nextStep, formData, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      customer: formData.customer || '',
      propertyType: formData.propertyType || '',
      requirement: formData.requirement || '',
      detailedRequirement: formData.detailedRequirement || '',
      minPrice: formData.minPrice || '',
      maxPrice: formData.maxPrice || '',
      timeline: formData.timeline || ''
    },
    validationSchema: Yup.object({
      customer: Yup.string().required('Customer is required'),
      propertyType: Yup.string().required('Property type is required'),
      requirement: Yup.string().required('Requirement is required'),
      minPrice: Yup.number()
        .required('Minimum price is required'),
      maxPrice: Yup.number()
        .required('Maximum price is required')
        .moreThan(Yup.ref('minPrice'), 'Max price must be greater than min price'),
      timeline: Yup.string().required('Timeline is required')  
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
        <label htmlFor="customer" className="block text-sm font-medium">Customer</label>
        <input
          id="customer"
          className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          type="text"
          name="customer"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.customer}
          placeholder="Hussain"
        />
        {formik.touched.customer && formik.errors.customer && (
          <div className="text-red-600 text-sm">{formik.errors.customer}</div>
        )}
      </div>

      <div>
        <label htmlFor="propertyType" className="block text-sm font-medium">Property Type</label>
        <select
          id="propertyType"
          className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          name="propertyType"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.propertyType}
        >
          <option value="" disabled>Select</option> 
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Commercial">Commercial</option>
        </select>
        {formik.touched.propertyType && formik.errors.propertyType && (
          <div className="text-red-600 text-sm">{formik.errors.propertyType}</div>
        )}
      </div>

      <div>
        <label htmlFor="requirement" className="block text-sm font-medium">Requirement</label>
        <input
          id="requirement"
          className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          type="text"
          name="requirement"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.requirement}
        />
        {formik.touched.requirement && formik.errors.requirement && (
          <div className="text-red-600 text-sm">{formik.errors.requirement}</div>
        )}
      </div>

      <div>
        <label htmlFor="detailedRequirement" className="block text-sm font-medium">Detailed Requirement</label>
        <textarea
          id="detailedRequirement"
          className="mt-1 block w-full p-2 rounded-md border border-gray-300 min-h-[48px]"
          name="detailedRequirement"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.detailedRequirement}
          placeholder="Eg :"
        />
      </div>

      <div>
  <label className="block text-sm font-medium">Price Range</label>
  <div className="flex gap-4 w-full justify-between mt-1">
    <div className="w-full">
      <input
        id="minPrice"
        className="w-full p-2 rounded-md border border-gray-300"
        type="number"
        name="minPrice"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.minPrice}
        placeholder="Min"
      />
      {formik.touched.minPrice && formik.errors.minPrice && (
        <div className="text-red-600 text-sm mt-1">{formik.errors.minPrice}</div>
      )}
    </div>
    <div className="w-full">
      <input
        id="maxPrice"
        className="w-full p-2 rounded-md border border-gray-300"
        type="number"
        name="maxPrice"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.maxPrice}
        placeholder="Max"
      />
      {formik.touched.maxPrice && formik.errors.maxPrice && (
        <div className="text-red-600 text-sm mt-1">{formik.errors.maxPrice}</div>
      )}
    </div>
  </div>
</div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium">Timeline</label>
        <select
          id="timeline"
          className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          name="timeline"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.timeline}
        >
          <option value="" disabled>Select</option>
          <option value="Immediately">Immediately</option>
          <option value="1-3 Months">1-3 Months</option>
          <option value="3-6 Months">3-6 Months</option>
          <option value="6-12 Months">6-12 Months</option>
          <option value="More than a year">More than a year</option>
        </select>
        {formik.touched.timeline && formik.errors.timeline && (
          <div className="text-red-600 text-sm">{formik.errors.timeline}</div>
        )}
      </div>


      <div className="flex justify-end mt-4">
      <button type="submit" className="bg-black flex text-white py-2 px-4 rounded-md">
        Next
      </button>
      </div>
    </form>
  );
};

export default StepOne;
