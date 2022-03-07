import React from 'react';
// Framer-Motion
import { AnimatePresence } from 'framer-motion';

// React router
import { Routes, Route, useLocation } from 'react-router-dom';

// Import Pages
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import ResultsPage from './pages/ResultsPage';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/footer/Footer';

export const Main = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence initial={true} exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/search/:objectID" element={<ProductDetails />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};