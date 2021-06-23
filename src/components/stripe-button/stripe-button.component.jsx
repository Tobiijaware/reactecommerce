import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J5aoMDp4nf5Mt0jocYDAvxlbAQLiVZiBhG7vQoMYAAVzk7AgjjtMTDlEfCiC6r9PYpuy8AQFCGqiJa1Hs7nSymJ00TNUZ8XGj';

  const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='Kyrie Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ₦${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
        
        
        />
    );
};

export default StripeCheckoutButton;