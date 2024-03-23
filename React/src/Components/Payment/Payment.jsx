import React, { useEffect, useState } from 'react';
import Picture from '../../assets/paypal.png';
import Logo from '../../assets/paypalwallet.png';
import Style from './Payment.module.css';
import Navbar from '../MainNavbar/Navbar';
import Footer from '../MainFooter/Footer';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate

export default function Payment() {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate
    const [roomType, setRoomType] = useState('');
    const [duration, setDuration] = useState('');
    const [totalDue, setTotalDue] = useState('');
    const [componentMounted, setComponentMounted] = useState(false);

    useEffect(() => {
        setComponentMounted(true);
        if (location.state) {
            const { roomType, duration, totalDue } = location.state;
            setRoomType(roomType);
            setDuration(duration);
            setTotalDue(totalDue);
        }
    }, [location]);

    useEffect(() => {
        if (componentMounted && totalDue) {
            const loadPayPalButtons = () => {
                window.paypal.Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: totalDue.toString(),
                                    },
                                },
                            ],
                        });
                    },
                    onApprove: async (data, actions) => {
                        console.log('Approved:', data);
                        const order = await actions.order.capture();
                        console.log('Captured order:', order);
                        // Navigate to the home page after successful payment
                        navigate('/home');
                    },
                    onError: (err) => {
                        console.error('Error:', err);
                        alert('An error occurred while processing the payment. Please try again later.');
                    },
                }).render('#paypal-button');
            };

            loadPayPalButtons();
        }
    }, [componentMounted, totalDue, navigate]); // Include navigate in dependencies array

    return (
        <>
            <Navbar />
            <div className={Style.container}>
                <div className={Style.paypalForm}>
                    <div className={Style.orderInfo}>
                        <img className={Style.paypalPayment} src={Picture} alt="" />
                        <p className="text-muted fw-bold mb-0">Your Order: {totalDue} $</p>
                    </div>
                    <div className={`${Style.bookingTable} fw-normal text-muted mt-5`}>
                        <h5 className="mb-4 text-center fw-normal text-muted">Your Booking Summary</h5>
                        <table className="table text-center">
                            <thead>
                                <tr className="fw-normal">
                                    <th scope="col">Room type</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{roomType}</td>
                                    <td>{duration}</td>
                                    <td>{totalDue}</td>
                                </tr>
                                <tr>
                                    <th scope="col">Total</th>
                                    <td colSpan="2">{totalDue} $</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mx-auto" id="paypal-button"> </div>
                </div>
                <div className={Style.centeredLogo}>
                    <img src={Logo} className={Style.paypalLogo} alt="" />
                    <h2>New. Faster. Easier.</h2>
                    <p className='text-muted text-center'>Welcome to the new PayPal checkout! <br /> The security you rely on - now even faster. <br /> It's everything checkout should be.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}
