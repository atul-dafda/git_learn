import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "magnific-popup";

import img1 from "../../../assets/img/video-bg/poster-1.jpg";
import img2 from "../../../assets/img/video-bg/poster-2.jpg";

class About extends Component {
	componentDidMount() {
		$(".popup-video").magnificPopup({
			type: "iframe",
		});
	}
	render() {
		return (
			<section className="about-section section-gap">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-10">
							<div className="about-video">
								<div
									className="video-poster-one wow fadeInUp"
									data-wow-duration="1500ms"
									data-wow-delay="400ms"
									style={{ backgroundImage: "url(" + img1 + ")" }}
								></div>
								<div
									className="video-poster-two wow fadeInUp"
									data-wow-duration="1500ms"
									data-wow-delay="600ms"
									style={{ backgroundImage: "url(" + img2 + ")" }}
								>
									<Link
										to="https://www.youtube.com/watch?v=fEErySYqItI"
										className="video-play-icon popup-video"
									>
										<i className="fas fa-play" />
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-10">
							<div className="about-text-two">
								<div className="section-title left-border mb-40">
									<span className="title-tag">About Us</span>
									<h2 className="title">Why Choose Us? </h2>
								</div>
								<p>
									We dream to be your full time website & mobile app development
									agency. Our aim is to focus on client success and listen their
									actual need and provide creative idea to make it in reality,
									With on time assistance and affordable budget.
								</p>
								<ul className="about-list">
									<li>
										{" "}
										<i className="fas fa-check" /> <b>Planing</b>{" "}
										<p>For Every New Project.</p>
									</li>
									<li>
										{" "}
										<i className="fas fa-check" /> <b>We Have</b>{" "}
										<p>Strong & Creative Team Members.</p>
									</li>
									<li>
										{" "}
										<i className="fas fa-check" /> <b>24/7 Dedicated</b>{" "}
										<p>Support System.</p>
									</li>
									<li>
										{" "}
										<i className="fas fa-check" />{" "}
										<b>100% Client Satisfaction</b>{" "}
										<p>We Works Till Perfection.</p>
									</li>
								</ul>
								<Link to="/about" className="main-btn">
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
