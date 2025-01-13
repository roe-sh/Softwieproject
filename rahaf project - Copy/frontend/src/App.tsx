import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import ProductGallery from './components/ProductGallery.tsx';
import ProductPage from './components/ProductPage.tsx';
import './index.css';

const App: React.FC = () => {
  const [view, setView] = useState<'gallery' | 'product'>('gallery');

  return (
    <div>
      <Header />
      <main>
        {view === 'gallery' ? (
          <ProductGallery onSelectProduct={() => setView('product')} />
        ) : (
          <ProductPage />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
