import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

import img1 from '../../../assets/img/video-bg/poster-4.jpg';
import img2 from '../../../assets/img/video-bg/poster-5.jpg';

const wculist = [
    { icon: 'far fa-check-circle', title: 'Best Services' },
    { icon: 'far fa-check-circle', title: 'Best Services' },
    { icon: 'far fa-check-circle', title: 'Professional Advisor' },
    { icon: 'far fa-check-circle', title: 'Professional Advisor' },
    { icon: 'far fa-check-circle', title: 'Responsive Design' },
    { icon: 'far fa-check-circle', title: 'Responsive Design' },
    { icon: 'far fa-check-circle', title: 'Awesome Pricing' },
    { icon: 'far fa-check-circle', title: 'Awesome Pricing' },
    { icon: 'far fa-check-circle', title: 'Online Support' },
    { icon: 'far fa-check-circle', title: 'Online Support' },
]
class Whyus extends Component {
    componentDidMount() {
        $('.popup-video').magnificPopup({
            type: 'iframe',
        });
    }
    render() {
        return (
            <section className="wcu-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="wcu-video wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="400ms">
                                <div className="video-poster-one bg-img-c" style={{ backgroundImage: "url(" + img1 + ")" }}>
                                </div>
                                <div className="video-poster-two bg-img-c" style={{ backgroundImage: "url(" + img2 + ")" }}>
                                    <Link to="https://www.youtube.com/watch?v=fEErySYqItI" className="popup-video">
                                        <i className="fas fa-play" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="wcu-text-two">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">Why We Are Best ?</span>
                                    <h2 className="title">We Have Many Reasons Why Choose Us</h2>
                                </div>
                                <p>
                                    Sedut perspiciatis unde omnis iste natus error sit voluptat em accusantium doloremque
                                    laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
                                </p>
                                <ul className="wcu-list clearfix">
                                    {wculist.map((item, i) => (
                                        <li key={i}>
                                            <i className={item.icon} /> {item.title}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/careers" className="main-btn">Join With Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Whyus;