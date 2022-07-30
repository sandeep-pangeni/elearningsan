import React from 'react'
import './style.css';

export const Home = () => {
    return (
        <div className='section_first'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-md-3">

                    <div className="sec_card me-md-1 row">
                        <div className="col-md-3">
                            <img src="./img/online.png" className="w-100" />
                        </div>
                        <div className="col-md-9">
                            <h3>32,245</h3>
                            <p>Enjoy the variety of fresh topics</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-md-3">

                    <div className="sec_card me-md-1 row">
                        <div className="col-md-3">
                            <img src="./img/access.png" className="w-100" />
                        </div>
                        <div className="col-md-9">
                            <h3>32,245</h3>
                            <p>Enjoy the variety of fresh topics</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-md-3">
                    <div className="sec_card me-md-1 row">
                        <div className="col-md-3">
                            <img src="./img/expert.png" className="w-100" />
                        </div>
                        <div className="col-md-9">
                            <h3>32,245</h3>
                            <p>Enjoy the variety of fresh topics</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='online_categories pt-5 pb-4'>
                <div className='online_categories_head'>
                    <p className='pt-md-4'>
                        Top Categories
                    </p>
                    <h1>Popular online Categories</h1>
                </div>
            </div>
            <div className="popular_courses pt-md-4">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/onilne/ge1.jpg" className='w-100' alt="" />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/onilne/ge.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>General Education</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/onilne/cs1.jpg" className='w-100' alt="" />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/onilne/cs.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>Computer Science</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/onilne/ce1.jpg" className='w-100' alt="" />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/onilne/ce.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>Civil Engineering</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/onilne/bs1.jpg" className='w-100' alt="" />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/onilne/bs.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>Business Studies</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/onilne/ai1.jpg" className='w-100' alt="" />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/onilne/ai.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>Arificial Intelligence</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 cards">
                        <div className="card">
                            <div className="card-img">
                                <img src="./img/onilne/ceng1.jpg" className='w-100' alt="" />
                            </div>
                            <div className="d-flex card_details">
                                <div className="col-2">
                                    <img src="./img/onilne/ceng.png" className='w-100' alt="gen" />
                                </div>
                                <div className="col-10">
                                    <h3>Computer Engineering</h3>
                                    <p>05 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="view_all_button p-5">
                    <button>View All Categories</button>
                </div>
            </div>
        </div>
       </div>
        
    )
}
