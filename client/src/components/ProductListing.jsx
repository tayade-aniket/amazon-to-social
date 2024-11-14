import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from "./ui/Button";

export default function ProductListing({ listing }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={listing.image} alt={listing.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{listing.title}</div>
          <p className="mt-2 text-gray-500">{listing.description}</p>
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-900">${listing.price.toFixed(2)}</span>
          </div>
          <div className="mt-4 flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
            ))}
            <span className="ml-2 text-sm text-gray-600">(121 reviews)</span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Features:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {listing.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <Button className="w-full flex items-center justify-center">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}