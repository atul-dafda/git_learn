import React, { Component } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-component";

import img1 from "../../../assets/img/project/05.png";
import img2 from "../../../assets/img/project/03.png";
import img3 from "../../../assets/img/project/04.png";
import img4 from "../../../assets/img/project/02.png";
import img5 from "../../../assets/img/project/01.png";
import img6 from "../../../assets/img/project/06.png";
import img7 from "../../../assets/img/project/03.png";
import img8 from "../../../assets/img/project/04.png";

const filtersbtn = [
	{ name: "All Project", value: "All Project", isActive: true },

	{ name: "Business", value: "Business", isActive: false },
	{ name: "Finaance", value: "Finaance", isActive: false },
	{ name: "Development", value: "Development", isActive: false },
	{ name: "Consulting", value: "Consulting", isActive: false },
	{ name: "Web", value: "Web", isActive: false },
	{ name: "Server", value: "Server", isActive: false },
];
class Blocks extends Component {
	constructor() {
		super();
		this.state = {
			projects: [
				{
					photo: img1,
					origin: ["Business", "Consulting", "Web"],
					title: "Free Consulting",
					text: "Join us for consultatoins",
					columnclass: "col-lg-4 col-sm-6",
				},
				{
					photo: img2,
					origin: ["Server", "Development", "Finaance"],
					title: "How To Business",
					text: "Join us for consultatoins",
					columnclass: "col-lg-4 col-sm-6",
				},
				{
					photo: img3,
					origin: ["Server", "Consulting", "Business", "Finaance"],
					title: "Design Strategy",
					text: "Join us for consultatoins",
					columnclass: "col-lg-4 col-sm-6",
				},
				{
					photo: img4,
					origin: ["Finaance", "Consulting"],
					title: "Research Strategy",
					text: "Join us for consultatoins",
					columnclass: "col-lg-8 col-sm-6",
					exclass: "wide-long-box",
				},
				{
					photo: img5,
					origin: ["Development", "Web"],
					title: "IT Consultations",
					text: "Join us for consultatoins",
					columnclass: "col-lg-4 col-sm-6",
				},
				{
					photo: img6,
					origin: ["Server", "Consulting", "Finaance"],
					title: "Business Monitor",
					text: "Join us for consultatoins",
					columnclass: "col-lg-4 col-sm-6",
				},
				{
					photo: img7,
					origin: ["Web", "Development", "Finaance"],
					title: "Free Consulting",
					text: "Join us for consultatoins",
					columnclass: "col-lg-4 col-sm-6",
				},
				{
					photo: img8,
					origin: ["Consulting", "Finaance", "Web"],
					title: "Business Monitor",
					text: "Join us for consultatoins",
					columnclass: "col-lg-8 col-sm-12",
					exclass: "wide-box",
				},
			],
			filterProject: [],
		};
	}
	componentDidMount() {
		this.setState({
			filterProject: this.state.projects,
		});
	}
	handleClick = (name) => {
		let filterProject = [];
		if (name === "All Project") {
			filterProject = this.state.projects;
		} else {
			filterProject = this.state.projects.filter((project, i) =>
				project.origin.includes(name)
			);
		}
		var index = filtersbtn
			.map(function (e) {
				return e.name;
			})
			.indexOf(name);
		if (index) {
			filtersbtn.forEach((item) => {
				item.isActive = false;
			});
			filtersbtn[index].isActive = true;
		}
		this.setState({ filterProject });
	};
	render() {
		const imagesLoadedOptions = {
			itemSelector: ".isotope-item",
			percentPosition: false,
			gutter: 30,
			resize: true,
			fitWidth: true,
		};
		const renderAll = this.state.filterProject.map((project, i) => (
			<div key={i} className={"isotope-item " + project.columnclass + ""}>
				<div className={"project-box hover-style " + project.exclass + ""}>
					<div className="project-thumb">
						<div
							className="thumb bg-img-c"
							style={{ backgroundImage: "url(" + project.photo + ")" }}
						/>
					</div>
					<div className="project-desc text-center">
						<h4>
							<Link to="/portfoliodetail">{project.title}</Link>
						</h4>
						<p>{project.text}</p>
						<Link to="/portfoliodetail" className="project-link">
							<i className="fal fa-long-arrow-right" />
						</Link>
					</div>
				</div>
			</div>
		));
		return (
			<section className="project-section">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-12 col-md-12">
							<ul className="project-nav project-isotope-filter">
								{filtersbtn.map(({ name, value, isActive }) => (
									<li
										key={name}
										value={value}
										className={isActive === true ? "active" : ""}
										onClick={this.handleClick.bind(this, name)}
									>
										{name}
									</li>
								))}
							</ul>
						</div>
					</div>
					{/* Project Boxes */}
					<Masonry
						className="row project-boxes project-isotope mt-60"
						imagesLoadedOptions={imagesLoadedOptions}
					>
						{renderAll}
					</Masonry>
				</div>
			</section>
		);
	}
}

export default Blocks;
