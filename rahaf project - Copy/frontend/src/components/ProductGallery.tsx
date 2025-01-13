import React from 'react';

interface ProductGalleryProps {
  onSelectProduct: () => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ onSelectProduct }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <section className="gallery">
      {products.map((product) => (
        <div
          className="product-card"
          key={product.id}
          onClick={onSelectProduct}
          style={{ cursor: 'pointer' }}
        >
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductGallery;
