import React, { useEffect, useState } from 'react';
import Picture from '../../assets/paypal.png';
import Logo from '../../assets/paypalwallet.png';
import Style from './Payment.module.css';

export default function Payment() {
    const [isPayPalLoaded, setIsPayPalLoaded] = useState(false);

    useEffect(() => {
        const loadPayPalButtons = () => {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: '50', // Example amount
                                },
                            },
                        ],
                    });
                },
                onApprove: (data, actions) => {
                    console.log('Approved:', data);
                    // Handle payment approval
                    return actions.order.capture();
                },
                onError: (err) => {
                    console.error('Error:', err);
                    // Handle errors
                    alert('An error occurred while processing the payment. Please try again later.');
                },
            }).render('#paypal-button');

            setIsPayPalLoaded(true);
        };

        if (!isPayPalLoaded) {
            loadPayPalButtons();
        }
    }, [isPayPalLoaded]);

    return (
        <div className={Style.container}>
            <div className={Style.paypalForm}>
                <div className={Style.orderInfo}>
                    <img className={Style.paypalPayment} src={Picture} alt="" />
                    <p className="text-muted fw-bold mb-0">Your Order: 50 $</p>
                </div>
                <div className={`${Style.bookingTable} fw-normal text-muted mt-5`}>
                    <h5 className="mb-4 text-center fw-normal text-muted">Your Booking Summary</h5>
                    <table className="table text-center">
                        <thead>
                            <tr className="fw-normal">
                                <th scope="col">Room type</th>
                                <th scope="col">Number of rooms</th>
                                <th scope="col">Price(per night)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Single Room</td>
                                <td>1</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Deluxe Room</td>
                                <td>1</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <th scope="col">Total</th>
                                <td colSpan="2">50 $</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {isPayPalLoaded && <div className="mx-auto" id="paypal-button"> </div>}
            </div>
            <div className={Style.centeredLogo}>
                <img src={Logo} className={Style.paypalLogo} alt="" />
                <h2>New. Faster. Easier.</h2>
                <p className='text-muted text-center'>Welcome to the new PayPal checkout! <br /> The security you rely on - now even faster. <br /> It's everything checkout should be.</p>
            </div>
        </div>
    );
}
