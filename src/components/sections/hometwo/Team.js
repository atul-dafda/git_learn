import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import img1 from "../../../assets/img/team/01.jpg";
import img2 from "../../../assets/img/team/02.jpg";
import img3 from "../../../assets/img/team/03.jpg";
import img4 from "../../../assets/img/team/04.jpg";
import img5 from "../../../assets/img/team/10.jpg";

const teamblock = [
	{ img: img1, name: "Vishakha Shukhanandi", post: "Business Owner" },
	{ img: img2, name: "Sagar Shukhanandi", post: "Team Manager/Leader" },
	{ img: img3, name: "Mohit Dobariya", post: "PHP Developer" },
	{ img: img4, name: "Mayur Bunha", post: "junier PHP Developer" },
	{ img: img5, name: "Atul Dafda", post: "Junier PHP Developer" },
];

class Team extends Component {
	render() {
		const settings = {
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 500,
			arrows: false,
			fade: false,
			dots: false,
			swipe: true,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
					},
				},
			],
		};
		return (
			<section className="team-section section-gap">
				<div className="container">
					{/* Section Title */}
					<div className="section-title mb-40 both-border text-center">
						<span className="title-tag">Meet Our Advisors</span>
						<h2 className="title">
							We Have An Exclusive <br /> Team Member
						</h2>
					</div>
					{/* Team Boxes */}
					<Slider className="row team-members" id="teamSliderOne" {...settings}>
						{teamblock.map((item, i) => (
							<div key={i} className="col-lg-12">
								<div className="team-member">
									<div className="member-picture-wrap">
										<div className="member-picture">
											<img src={item.img} alt="" />
											<div className="social-icons">
												<Link to="/">
													<i className="fab fa-facebook-f" />
												</Link>
												<Link to="/">
													<i className="fab fa-twitter" />
												</Link>
												<Link to="/">
													<i className="fab fa-behance" />
												</Link>
												<Link to="/">
													<i className="fab fa-instagram" />
												</Link>
											</div>
										</div>
									</div>
									<div className="member-desc">
										<h3 className="name">
											<Link to="/teamdetail">{item.name}</Link>
										</h3>
										<span className="pro">{item.post}</span>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</section>
		);
	}
}

export default Team;
