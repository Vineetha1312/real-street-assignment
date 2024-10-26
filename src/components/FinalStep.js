import React, { useState } from 'react';

const FinalStep = ({ prevStep, formData, setFormData, handleSubmit }) => {
  const [images, setImages] = useState(formData.images || []);

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages([...images, ...uploadedImages]);
    setFormData({ ...formData, images: [...images, ...uploadedImages] });
  };

  return (
    <div className="space-y-4 pb-4">
      <h2 className="text-lg font-semibold">Add Images</h2>

      <div>
        <label className="block text-sm font-medium">Upload Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Uploaded ${index}`} className="w-full h-24 object-cover rounded-md" />
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-gray-500 text-white py-2 px-4 rounded-md"
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          type="button"
          className="bg-black text-white py-2 px-4 rounded-md"
          onClick={() => handleSubmit(formData)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FinalStep;
