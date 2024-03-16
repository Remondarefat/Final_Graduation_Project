import Style from './HotelRooms.module.css';
import Picture3 from '../../assets/hilton 1.png';
import Doubleroom from '../../assets/doubleroom.jpg';
import Singleroom from '../../assets/singleroom.jpg';
import { Link } from 'react-router-dom';




export default function HotelRooms(){

    return <>
                    <div id="carouselExampleInterval" className="carousel slide w-100"  data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={Picture3} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={Picture3} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Picture3} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <section className='container mt-5'>
                        <div className="row">
                            <div className="col-md-6  ">
                                <div className='d-flex align-items-center'>
                                    <h3 className='fw-bold me-5'>Hilton Alexandria</h3>
                                    <div className="rate">
                                    <i class="fa-solid  fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <h5 className='mt-3'>Hotel Description</h5>
                                <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat ullam iusto 
                                    modi expedita dolorum dignissimos atque enim debitis praesentium animi accusantium
                                </p> 
                                <p className='text-muted'> Amet voluptates, illum assumenda blanditiis quasi pariatur ex rerum fuga cumque
                                    Ullam enim amet, dolor asperiores ea ratione molestias saepe, modi ab cupiditate
                                </p>
                                
                            </div>
                            <div className="col-md-6">
                            <h5 className='my-3'>Hotel Location</h5>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6907.256408721736!2d31.25580242229004!3d30.0475226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840bc3ef7ee61%3A0x8681f2f8b817d03f!2z2KfZhNio2YbZgyDYp9mE2LnYsdio2Ykg2KfZhNin2YHYsdmK2YLZiSDYp9mE2K_ZiNmE2YkgLSDYp9mK2Ycg2KfZitmHINin2Ykg2KjZiQ!5e0!3m2!1sar!2seg!4v1707238353263!5m2!1sar!2seg" className='{Style.location}'></iframe>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <div className="card" style={{ width: '18rem' }}>
                                    <div className={Style.roomImg}>
                                        <img src={Doubleroom} className="card-img-top" alt="..."/>
                                        <div className={Style.layer }>
                                            <img src={Picture3} className={Style.hotelImg}/>
                                                <div className='ms-3'> 
                                                    <span>Listed by :</span>
                                                    <p className='fw-bold m-0'>Hilton Alex</p>
                                                    <span>For:$1000/neight</span>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title fw-bold m-0">Double Room</p>
                                        <p className="card-text">Large room with attached  bathroom and double bed.</p>
                                        <div className='text-center'>
                                        <Link to="/roomdesc" className="btn bg-dark text-white rounded-5 px-4 ">More Details</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            <div className="col-md-6">
                                <div className="card" style={{ width: '18rem' }}>
                                    <div className={Style.roomImg}>
                                        <img src={Doubleroom} className="card-img-top" alt="..."/>
                                        <div className={Style.layer }>
                                            <img src={Picture3} className={Style.hotelImg}/>
                                                <div className='ms-3'> 
                                                    <span>Listed by :</span>
                                                    <p className='fw-bold m-0'>Hilton Alex</p>
                                                    <span>For:$1000/neight</span>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title fw-bold m-0">Single Room</p>
                                        <p className="card-text">Large room with attached  bathroom </p>
                                        <div className='text-center'>
                                        <Link to="/roomdesc" className="btn bg-dark text-white rounded-5 px-4 ">More Details</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </div>

                        {/* ----------------- Customer Feedback------------------------------ */}
                        <div className=" mt-5">
                            <div id="carouselExample" className="carousel slide ">
                                <div className="carousel-inner">
                                    <div className="carousel-item active ">
                                        <div className="row d-flex justify-content-center gx-3">
                                            <div className="col-md-4 bg-secondary bg-opacity-25 border rounded-2 ">
                                                    <div className='d-flex align-items-center justify-content-between p-2'>
                                                        <p className="card-title fw-bold m-0 ">Remonda Refat</p>
                                                        <div className="rate">
                                                            <i class="fa-solid  fa-star text-warning"></i>
                                                            <i class="fa-solid fa-star text-warning"></i>
                                                            <i class="fa-solid fa-star text-warning"></i>
                                                            <i class="fa-solid fa-star text-warning"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur  </p>
                                                </div>
                                            <div className="col-md-4 border ms-4 rounded-2 bg-secondary bg-opacity-25  ">
                                                <div className='d-flex align-items-center justify-content-between p-2 '>
                                                    <p className="card-title fw-bold m-0 ">Remonda Refat</p>
                                                    <div className="rate ">
                                                        <i class="fa-solid  fa-star text-warning"></i>
                                                        <i class="fa-solid fa-star text-warning"></i>
                                                        <i class="fa-solid fa-star text-warning"></i>
                                                        <i class="fa-solid fa-star text-warning"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                    </div>
                                                </div>
                                                <p className=''>Lorem ipsum dolor sit amet consectetur </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row d-flex justify-content-center gy-3">
                                                <div className="col-md-4 bg-secondary bg-opacity-25 border rounded-2 ">
                                                        <div className='d-flex align-items-center justify-content-between p-2'>
                                                            <p className="card-title fw-bold m-0 ">Remonda Refat</p>
                                                            <div className="rate">
                                                                <i class="fa-solid  fa-star text-warning"></i>
                                                                <i class="fa-solid fa-star text-warning"></i>
                                                                <i class="fa-solid fa-star text-warning"></i>
                                                                <i class="fa-solid fa-star text-warning"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet consectetur  </p>
                                                    </div>
                                                <div className="col-md-4 border  ms-4  rounded-2 bg-secondary bg-opacity-25 ">
                                                    <div className='d-flex align-items-center justify-content-between p-2 '>
                                                        <p className="card-title fw-bold m-0 ">Remonda Refat</p>
                                                        <div className="rate ">
                                                            <i class="fa-solid  fa-star text-warning"></i>
                                                            <i class="fa-solid fa-star text-warning"></i>
                                                            <i class="fa-solid fa-star text-warning"></i>
                                                            <i class="fa-solid fa-star text-warning"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p className=''>Lorem ipsum dolor sit amet consectetur </p>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row d-flex justify-content-center gy-3">
                                                    <div className="col-md-4 bg-secondary bg-opacity-25 border rounded-2 ">
                                                            <div className='d-flex align-items-center justify-content-between p-2'>
                                                                <p className="card-title fw-bold m-0 ">Remonda Refat</p>
                                                                <div className="rate">
                                                                    <i className="fa-solid  fa-star text-warning"></i>
                                                                    <i className="fa-solid fa-star text-warning"></i>
                                                                    <i className="fa-solid fa-star text-warning"></i>
                                                                    <i className="fa-solid fa-star text-warning"></i>
                                                                    <i className="fa-solid fa-star"></i>
                                                                </div>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet consectetur  </p>
                                                        </div>
                                                    <div className="col-md-4 border  ms-4  rounded-2 bg-secondary bg-opacity-25 ">
                                                        <div className='d-flex align-items-center justify-content-between p-2 '>
                                                            <p className="card-title fw-bold m-0 ">Remonda Refat</p>
                                                            <div className="rate ">
                                                                <i className="fa-solid  fa-star text-warning"></i>
                                                                <i className="fa-solid fa-star text-warning"></i>
                                                                <i className="fa-solid fa-star text-warning"></i>
                                                                <i className="fa-solid fa-star text-warning"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <p className=''>Lorem ipsum dolor sit amet consectetur </p>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-dark bg-opacity-25 " aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-dark bg-opacity-25 " aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </section>
                    <div className='bg-secondary bg-opacity-25 mt-5 '>
                        <div className='container d-flex align-items-center'>
                            <img src={Picture3} className={Style.hotelImg}/>
                            <p className='mt-2 fw-bold ms-2 mb-0'>Hilton Alexandria</p>
                            <div className=' ms-4 w-50'>
                                <input type="text" placeholder='Your Feedback' className='w-100 border-0 rounded-4  ms-5 p-1 my-3' />
                                <div className='d-flex align-items-center mb-3'>
                                    <p className='ms-5 mb-0'>Your Rate :</p>
                                        <div className="rate ms-2 ">
                                            <i class="fa-solid fa-star text-warning"></i>
                                            <i class="fa-solid fa-star text-warning"></i>
                                            <i class="fa-solid fa-star text-warning"></i>
                                            <i class="fa-solid fa-star text-warning"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                </div> 
                            </div>
                        </div>
                    </div>
    </>
}