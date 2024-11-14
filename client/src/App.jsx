import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './components/ProductList';

const AppLayout = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<AppLayout />} />
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}