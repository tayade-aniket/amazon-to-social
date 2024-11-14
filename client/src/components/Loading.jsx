import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center space-x-2 animate-pulse">
      <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
      <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
      <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
    </div>
  );
}