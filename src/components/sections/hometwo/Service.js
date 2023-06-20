import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
	FaDesktop,
	FaFingerprint,
	FaMobileAlt,
	FaAtlas,
	FaCartPlus,
	FaEnvelope,
} from "react-icons/fa";

import line1 from "../../../assets/img/lines/12.png";
import line2 from "../../../assets/img/lines/11.png";

const serviceblock = [
	{ icon: <FaDesktop />, title: "UI/UX Design" },
	{ icon: <FaAtlas />, title: "Web Development" },
	{ icon: <FaMobileAlt />, title: "Mobile Apps Development" },
	{ icon: <FaFingerprint />, title: "IOT Solutions" },
	{ icon: <FaCartPlus />, title: "E-Commerce Development" },
	{ icon: <FaEnvelope />, title: "Digital Marketing" },
];
class Service extends Component {
	render() {
		return (
			<section className="service-section shape-style-two service-line-shape section-gap grey-bg">
				<div className="container">
					{/* Section Title */}
					<div className="section-title text-center both-border mb-50">
						<span className="title-tag">Our Services</span>
						<h2 className="title">
							We Provide Most Exclusive <br /> Service For Business
						</h2>
					</div>
					{/* Services Boxes */}
					<div className="row service-boxes justify-content-center">
						{serviceblock.map((item, i) => (
							<div
								key={i}
								className="col-lg-3 col-sm-6 col-10 wow fadeInUp servicebox"
								data-wow-duration="1500ms"
								data-wow-delay="1000ms"
							>
								<div className="service-box-two text-center">
									<div className="icon">{item.icon}</div>
									<h3>
										<Link to="/servicedetail">{item.title}</Link>
									</h3>
									<Link to="/servicedetail" className="service-link">
										<i className="fal fa-arrow-right" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="line-one">
					<img src={line1} alt="line-shape" />
				</div>
				<div className="line-two">
					<img src={line2} alt="line-shape" />
				</div>
			</section>
		);
	}
}

export default Service;
