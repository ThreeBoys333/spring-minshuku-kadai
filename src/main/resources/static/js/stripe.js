const stripe = Stripe('pk_test_51RPD9kRZKLzOYRFVUta8rmFHBpCZppZwvdBfgOx7evzMrnKsB6APAk8vEH3YMWtynXzFi4zEPKKfga11WHxCjub300T5ZAT0q0');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});