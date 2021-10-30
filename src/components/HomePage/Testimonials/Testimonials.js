import React from 'react';
import { Carousel } from 'react-bootstrap';
import person1 from '../../../images/person1.jpg';
import person2 from '../../../images/person2.png';
import person3 from '../../../images/person3.jpg';
import './Testimonial.css'
const Testimonials = () => {
    return (
        <div id="testimonials" className="container mt-5">
            <div>
            <h3 className="header mb-5 mt-5">What our clients say</h3>
            <Carousel interval={null} className="bg-testimonial">
                <Carousel.Item className=" c-item">
                <div className="d-flex container">
                <img
                    className=" testimonial-image"
                    src={person1}
                    alt="First slide"
                    />
                    <p className="testimonial-text">
                    Today, I am in recovery. “Today” involves therapy, medication management and coping skills. I can move through each day and each battle with the tools and people who have helped me along the way. “Today” also means that I accept that I have bipolar disorder. After all I went through, I am a survivor — and you are, too. 
                    </p>
                </div>
                </Carousel.Item>
                <Carousel.Item className="container c-item">
                <div className="d-flex testimonial">
                <img
                    className="testimonial-image"
                    src={person2}
                    alt="First slide"
                    />
                    <p className="testimonial-text">
                    Today, I am in recovery. “Today” involves therapy, medication management and coping skills. I can move through each day and each battle with the tools and people who have helped me along the way. “Today” also means that I accept that I have bipolar disorder. After all I went through, I am a survivor — and you are, too. 
                    </p>
                </div>
                </Carousel.Item>
                <Carousel.Item className="container c-item">
                <div className="d-flex testimonial">
                <img
                    className=" testimonial-image"
                    src={person3}
                    alt="First slide"
                    />
                    <p className="testimonial-text">
                    Today, I am in recovery. “Today” involves therapy, medication management and coping skills. I can move through each day and each battle with the tools and people who have helped me along the way. “Today” also means that I accept that I have bipolar disorder. After all I went through, I am a survivor — and you are, too. 
                    </p>
                </div>
                </Carousel.Item>
                </Carousel> 
                            </div>
                        </div>
                    );
                };

export default Testimonials;