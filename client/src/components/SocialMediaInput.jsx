import React, { useState } from 'react';
import { Button } from "./ui/Button";
import { Textarea } from "./ui/Textarea";

export default function SocialMediaInput({ onConvert }) {
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', content);
    if (imageFile) {
      formData.append('image', imageFile);
    }
  
    console.log('FormData content:', content);
    console.log('FormData image:', imageFile);
  
    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to convert content');
      }
      const data = await response.json();
      console.log('Uploaded product:', data);
      onConvert(data);
    } catch (error) {
      console.error('Data Uploaded Successfully !');
    }
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Save the file for form submission
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl); // Show a preview
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-lg p-6">
      <div className="space-y-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {imagePreview && (
          <div className="mt-4">
            <img src={imagePreview} alt="Preview" className="w-full h-auto rounded-md shadow-md" />
          </div>
        )}
      </div>

      <div className="space-y-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
          Social Media Content
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={6}
          placeholder="Paste your social media content here..."
        />
      </div>

      <Button type="submit" className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
        Convert to Amazon Listing
      </Button>
    </form>
  );
}
