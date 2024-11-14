import React from 'react';
import Hero from '../components/Hero';
import ContentConverter from '../components/ContentConverter';

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContentConverter />
      </div>
    </div>
  );
}