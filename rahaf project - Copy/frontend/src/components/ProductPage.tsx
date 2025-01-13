import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm.tsx';

const stripePromise = loadStripe('pk_test_51QgoxTHI8ONCXGGKZx6tzhcXafMjFQGjc1TC8UcKOglc6tw2IsXxgTvxXDVB2OFi8xM1wYmOma9F3reEAV5fD5fL00pUXCzuyU');

const ProductPage: React.FC = () => {
  const product = { name: 'Product 1', price: 10.0, description: 'This is a sample product.' };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>

      <Elements stripe={stripePromise}>
        <CheckoutForm amount={product.price} />
      </Elements>
    </div>
  );
};

export default ProductPage;
