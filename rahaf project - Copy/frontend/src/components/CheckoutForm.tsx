import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface CheckoutFormProps {
  amount: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe or Elements not loaded');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      // Log before calling the backend
      console.log('Sending payment request to backend with amount:', amount);

      const response = await fetch('http://localhost:3000/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }), // Convert to cents
      });

      if (!response.ok) {
        console.error('Backend responded with error:', response.status, response.statusText);
        throw new Error('Backend error');
      }

      const { clientSecret } = await response.json();
      console.log('Client secret received from backend:', clientSecret);

      // Confirm payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement!,
        },
      });

      if (result.error) {
        console.error('Stripe payment failed:', result.error);
        setMessage(`Payment failed: ${result.error.message}`);
      } else if (result.paymentIntent?.status === 'succeeded') {
        console.log('Payment succeeded:', result.paymentIntent);
        setMessage('Payment succeeded!');
      }
    } catch (error) {
      console.error('Error occurred during payment:', error);
      setMessage('An error occurred during payment.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay ${amount.toFixed(2)}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default CheckoutForm;
