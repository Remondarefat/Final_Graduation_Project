import React from 'react';
import Picture from '../../assets/paypal.png';

import Logo from '../../assets/paypalwallet.png';
import Style from './Payment.module.css';

export default function Payment() {
    return (
        <div className={Style.container}>
            <div className={Style.paypalForm}>
                <div className={Style.orderInfo}>
                    <img className={Style.paypalPayment} src={Picture} alt="" />
                    <p className="text-muted fw-bold mb-0">Your Order: 2100</p>
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
                                <td>850</td>
                            </tr>
                            <tr>
                                <td>Deluxe Room</td>
                                <td>1</td>
                                <td>1250</td>
                            </tr>
                            <tr>
                                <th scope="col">Total</th>
                                <td colSpan="2">2100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-inline-flex gap-3 mx-auto">
                    <button className={Style.paypalButton}>
                        <img src={Picture} alt="" />
                    </button>
                    <button className={Style.paypalButtonDebit} data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Debit or Credit Card</button>
                </div>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body w-100 mx-auto">
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4">
                                <input type="text" class="form-control" placeholder="Card Holder" required />
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" placeholder="Card Number" required />
                            </div>
                            <div class="col-md-2">
                                <input type="text" class="form-control" placeholder="CSC" required />
                            </div>
                            <div class="col-12">
                                <button class="btn btn-dark" type="submit">Pay Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={Style.centeredLogo}>
                <img src={Logo} className={Style.paypalLogo} alt="" />
                <h2>New. Faster. Easier.</h2>
                <p className='text-muted text-center'>Welcome to the new PayPal checkout! <br /> The security you rely on - now even faster. <br /> It's everything checkout should be.</p>
            </div>
        </div >
    );
}
