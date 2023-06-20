import React, { Component } from "react";
import { Link } from "react-router-dom";

import illustration from "../../../assets/img/illustration/01.png";

class About extends Component {
	render() {
		return (
			<section className="about-section about-illustration-img section-gap">
				<div className="container">
					<div className="illustration-img">
						<img src={illustration} alt="" />
					</div>
					<div className="row no-gutters justify-content-lg-end justify-content-center">
						<div className="col-lg-6 col-md-10">
							<div className="about-text">
								<div className="section-title left-border mb-40">
									<span className="title-tag">About Us</span>
									<h2 className="title">
										Our Goal Is Client’s Success And Future Growth{" "}
									</h2>
								</div>
								<p className="mb-25">
									We aim to make an organization which delivers united IT
									solutions that are categorized with our client’s business
									needs. We have various working models for the different type
									of project starting from small scale to large scale enterprise
									projects. We never compromise our standard over cost and make
									sure every project is accomplished well regardless of its size
								</p>
								<p>
									We are providing cost-effective solutions in Website
									development, Website Design, Mobile application development,
									software development, graphic designing and SEO.
								</p>
								<br />
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
