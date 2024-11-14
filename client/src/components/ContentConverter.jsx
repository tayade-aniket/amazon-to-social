// client/src/components/ContentConverter.jsx
import React, { useState } from "react";
import SocialMediaInput from "./SocialMediaInput";
import ProductListing from "./ProductListing";
import Loading from "./Loading";

export default function ContentConverter() {
  const [productListing, setProductListing] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async (socialMediaContent) => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: socialMediaContent }),
      });

      if (!response.ok) {
        throw new Error("Failed to convert content");
      }

      const convertedListing = await response.json();
      setProductListing(convertedListing);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while converting content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 bg-white shadow-xl rounded-lg p-6" id="converter">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Convert Your Content
      </h2>
      <SocialMediaInput onConvert={handleConvert} />
      {isLoading ? (
        <Loading />
      ) : (
        productListing && <ProductListing listing={productListing} />
      )}
    </div>
  );
}
