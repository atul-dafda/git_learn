import React, { Component } from "react";
import { Link } from "react-router-dom";

import img1 from "../../../assets/img/project/01.png";
import img2 from "../../../assets/img/project/02.png";
import img3 from "../../../assets/img/project/03.png";
import img4 from "../../../assets/img/project/04.png";
import img5 from "../../../assets/img/project/05.png";
import img6 from "../../../assets/img/project/06.png";

const porfolioblock = [
	{
		img: img1,
		title: "Sunny Beach Takeover",
		text: "View More",
	},
	{ img: img2, title: "Mortgage Trust", text: "View More" },
	{
		img: img3,
		title: "Nocturnal Cocktailers",
		text: "View More",
	},
	{ img: img4, title: "Queen Baby Mama", text: "View More" },
	{ img: img5, title: "Shinandbum", text: "View More" },
	{ img: img6, title: "Viamoutdoors", text: "View More" },
];
class Project extends Component {
	render() {
		return (
			<section className="project-section">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-7 col-md-8">
							{/* Section Title */}
							<div className="section-title left-border">
								<span className="title-tag">Latest Project</span>
								<h2 className="title">We Complate Much More Latest Project</h2>
							</div>
						</div>
						<div className="col-lg-5 col-md-4">
							<div className="view-moore-btn text-md-right mt-30 mt-md-0">
								<Link to="/portfolio" className="main-btn">
									View More Project
								</Link>
							</div>
						</div>
					</div>
					{/* Project Boxes */}
					<div className="row project-boxes mt-80 justify-content-center">
						{porfolioblock.map((item, i) => (
							<div key={i} className="col-lg-4 col-sm-6">
								<div className="project-box">
									<div className="project-thumb">
										<div
											className="thumb bg-img-c"
											style={{ backgroundImage: "url(" + item.img + ")" }}
										/>
									</div>
									<div className="project-desc text-center">
										<h4>
											<Link to="/portfoliodetail">{item.title}</Link>
										</h4>
										<p>{item.text}</p>

										<Link to="/portfoliodetail" className="project-link">
											<i className="fal fa-long-arrow-right" />
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}
}

export default Project;
