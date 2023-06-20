import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/bloom-logo-name.png";
class Offcanvas extends Component {
	render() {
		return (
			<Fragment>
				{/* About Widget */}
				<div className="widget about-widget">
					<div className="logo mb-30">
						<img src={logo} alt="" />
					</div>
					<p>
						We use our rich background in designing and delivering scalable,
						powerful websites to help you transform your !DEA into reality.
					</p>
				</div>
				{/* Contact information Widget */}
				<div className="widget contact-info-widget">
					<h5 className="widget-title">Contact Us</h5>
					<ul>
						<li>
							<i className="far fa-map-marked-alt" />
							{process.env.REACT_APP_ADDRESS}
						</li>
						<li>
							<i className="far fa-phone" />
							{process.env.REACT_APP_PHONE_NUMBER}
						</li>
						<li>
							<i className="far fa-envelope-open" />
							{process.env.REACT_APP_EMAIL}
						</li>
					</ul>
				</div>
				{/* tweets Widget */}
				<div className="widget tweets-widget">
					<h5 className="widget-title">Recent tweets</h5>
					<ul>
						<li>
							<Link to="#">
								<i className="fab fa-twitter" />
								<span>@username:</span> Sedut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium...
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="fab fa-twitter" />
								<span>@username:</span> Sedut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium...
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="fab fa-twitter" />
								<span>@username:</span> Sedut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium...
							</Link>
						</li>
					</ul>
				</div>
				{/* Social Link */}
				<div className="widget social-link">
					<h5 className="widget-title">Follow us</h5>
					<ul>
						<li>
							<Link to="#">
								<i className="fab fa-facebook-f" />
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="fab fa-twitter" />
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="fab fa-behance" />
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="fab fa-linkedin" />
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="fab fa-google" />
							</Link>
						</li>
					</ul>
				</div>
			</Fragment>
		);
	}
}

export default Offcanvas;
