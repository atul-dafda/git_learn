import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import img1 from "../../../assets/img/latest-post/01.jpg";
import img2 from "../../../assets/img/latest-post/02.jpg";
import img3 from "../../../assets/img/latest-post/03.jpg";
import img4 from "../../../assets/img/latest-post/04.jpg";

const blogslide = [
	{
		img: img1,
		title: "Keep Ranking Your Website With Good SEO",
		postdate: "25 Aug 2020",
		urltext: "Learn More",
	},

	{
		img: img3,
		title: "Upgrade Your Business Online Today!",
		postdate: "25 Aug 2020",
		urltext: "Learn More",
	},

	{
		img: img1,
		title: "Keep Calm And Optimize Your Website For Mobile",
		postdate: "25 Aug 2020",
		urltext: "Learn More",
	},
	{
		img: img2,
		title: "Importance Of Website Maintenance",
		postdate: "25 Aug 2020",
		urltext: "Learn More",
	},
	{
		img: img4,
		title: "Website Design Trends",
		postdate: "25 Aug 2020",
		urltext: "Learn More",
	},
	{
		img: img3,
		title: "Save Funds Using React Native App Development!",
		postdate: "25 Aug 2020",
		urltext: "Learn More",
	},
	{
		img: img4,
		title: "Online Shop: An Important Thing For Business",
		postdate: "25 Aug 2020",
		urltext: "Learn More",
	},
	{
		img: img4,
		title: "New Business Must Need Support From Web Development Company!",
		postdate: "25 Aug 2020",
		urltext: "Learn More",
	},

	{
		img: img4,
		title: "New Business Must Need Support From Web Development Company!",
		postdate: "25 Aug 2020",
		urltext: "Learn More",
	},
	{
		img: img2,
		title:
			"App Store Optimization – An Essential Factor For Mobile App Marketing",
		postdate: "25 Aug 2020",
		urltext: "Learn More",
	},
];
class Blog extends Component {
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
					breakpoint: 1600,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						centerMode: true,
						centerPadding: "10%",
					},
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						centerMode: false,
					},
				},
			],
		};
		return (
			<section className="latest-post-section section-gap-top">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-8">
							<div className="section-title left-border">
								<span className="title-tag">Important Articles</span>
								<h2 className="title">
									Something Know Our <br /> Latest News &amp; Blog
								</h2>
							</div>
						</div>
						<div className="col-lg-6 col-md-4">
							<div className="text-md-right mt-30 mt-md-0">
								<Link to="/bloggrid" className="main-btn">
									View All News
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid container-1600">
					<div className="latest-post-loop loop-two">
						<Slider className="row" id="latestPostSlider" {...settings}>
							{blogslide.map((item, i) => (
								<div key={i} className="col-lg-12">
									<div className="latest-post-box-two">
										<div className="post-thumb-wrap">
											<div
												className="post-thumb bg-img-c"
												style={{ backgroundImage: "url(" + item.img + ")" }}
											></div>
											<span className="post-date">
												<i className="far fa-calendar-alt" />
												{item.postdate}
											</span>
										</div>
										<div className="post-desc">
											<h3 className="title">
												<Link to="/blogdetail">{item.title}</Link>
											</h3>
											<Link to="/blogdetail" className="post-link">
												{item.urltext} <i className="far fa-long-arrow-right" />
											</Link>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</section>
		);
	}
}

export default Blog;
