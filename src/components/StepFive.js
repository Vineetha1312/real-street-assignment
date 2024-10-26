// StepFive.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepFive = ({ nextStep, prevStep, formData, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      totalPrice: formData.totalPrice || '',
      paymentPlan: formData.paymentPlan || '',
      discount: formData.discount || '',
      downPayment: formData.downPayment || '',
      monthlyInstallment: formData.monthlyInstallment || ''
    },
    validationSchema: Yup.object({
      totalPrice: Yup.number()
        .required('Total price is required')
        .min(1, 'Total price must be greater than zero'),
      paymentPlan: Yup.string().required('Payment plan is required'),
      discount: Yup.number()
        .min(0, 'Discount cannot be negative')
        .max(100, 'Discount cannot exceed 100%'),
      downPayment: Yup.number()
        .when('paymentPlan', {
          is: 'Installment',
          then: Yup.number()
            .required('Down payment is required for installment plans')
            .min(1, 'Down payment must be positive')
        }),
      monthlyInstallment: Yup.number()
        .when('paymentPlan', {
          is: 'Installment',
          then: Yup.number()
            .required('Monthly installment is required for installment plans')
            .min(1, 'Monthly installment must be positive')
        })
    }),
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      console.log("StepFive form submitted, proceeding to FinalStep with values:", values);
      nextStep();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 pb-4">
      <h2 className="text-lg font-semibold">Price Details</h2>

      <div>
        <label htmlFor="totalPrice" className="block text-sm font-medium">Total Price</label>
        <input
          id="totalPrice"
          className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          type="number"
          name="totalPrice"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.totalPrice}
          placeholder="Total Price"
        />
        {formik.touched.totalPrice && formik.errors.totalPrice && (
          <div className="text-red-600 text-sm">{formik.errors.totalPrice}</div>
        )}
      </div>

      <div>
        <label htmlFor="paymentPlan" className="block text-sm font-medium">Payment Plan</label>
        <select
          id="paymentPlan"
          className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          name="paymentPlan"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.paymentPlan}
        >
          <option value="" disabled>Select</option>
          <option value="Full Payment">Full Payment</option>
          <option value="Installment">Installment</option>
        </select>
        {formik.touched.paymentPlan && formik.errors.paymentPlan && (
          <div className="text-red-600 text-sm">{formik.errors.paymentPlan}</div>
        )}
      </div>

      <div>
        <label htmlFor="discount" className="block text-sm font-medium">Discount (%)</label>
        <input
          id="discount"
          className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          type="number"
          name="discount"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.discount}
          placeholder="Discount"
        />
        {formik.touched.discount && formik.errors.discount && (
          <div className="text-red-600 text-sm">{formik.errors.discount}</div>
        )}
      </div>

      {formik.values.paymentPlan === 'Installment' && (
        <>
          <div>
            <label htmlFor="downPayment" className="block text-sm font-medium">Down Payment</label>
            <input
              id="downPayment"
              className="mt-1 block w-full p-2 rounded-md border border-gray-300"
              type="number"
              name="downPayment"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.downPayment}
              placeholder="Down Payment"
            />
            {formik.touched.downPayment && formik.errors.downPayment && (
              <div className="text-red-600 text-sm">{formik.errors.downPayment}</div>
            )}
          </div>

          <div>
            <label htmlFor="monthlyInstallment" className="block text-sm font-medium">Monthly Installment</label>
            <input
              id="monthlyInstallment"
              className="mt-1 block w-full p-2 rounded-md border border-gray-300"
              type="number"
              name="monthlyInstallment"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.monthlyInstallment}
              placeholder="Monthly Installment"
            />
            {formik.touched.monthlyInstallment && formik.errors.monthlyInstallment && (
              <div className="text-red-600 text-sm">{formik.errors.monthlyInstallment}</div>
            )}
          </div>
        </>
      )}

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

export default StepFive;
