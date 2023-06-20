import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

import img from "../../../assets/img/illustration/man-with-earth.jpg";

const Content = () => {
	const [name, setName] = useState(""); // useState to store First Name
	const [mobile, setMobile] = useState(""); // useState to store Mobile Number
	const [message, setMessage] = useState(""); // useState to store Age
	const [email, setEmail] = useState("");

	const userSchema = yup.object().shape({
		name: yup.string().trim().required("Name is required!"),
		email: yup.string().email().trim().required("Email is Required!"),
		mobile: yup.string().trim().required("Mobile is required!"),
		message: yup.string().trim().required("Message is required!"),
	});

	async function validateForm(e) {
		e.preventDefault();
		// creating a form data object
		let dataObject = {
			name: name,
			email: email,
			mobile: mobile,
			message: message,
		};
		const isValid = await userSchema.isValid(dataObject);
		console.log(isValid);
		if (isValid) {
			alert("Form is Valid");
			async function fetchData() {
				const res = await axios.post(
					"http://localhost:8080/contact/",
					dataObject
				);

				console.log(res);
				setName("");
				setEmail("");
				setMobile("");
				setMessage("");
			}
			fetchData();
		} else {
			alert("Form is Invalid");
		}
	}

	return (
		<section className="contact-section contact-page section-gap-top">
			<div className="container">
				<div className="contact-info">
					<div className="row justify-content-center">
						<div className="col-lg-6 order-2 order-lg-1">
							<div className="illustration-img text-center">
								<img src={img} alt="" />
							</div>
						</div>
						<div className="col-lg-6 col-md-10 order-1 order-lg-2">
							<div className="contact-info-content">
								<div className="section-title left-border mb-40">
									<span className="title-tag">Get In Touch</span>
									<h2 className="title">We’ll Be Glad To Assist You!</h2>
								</div>
								<p>
									Get in touch and let's make something great together. Let's
									turn your idea on an even greater product.
								</p>
								<ul>
									<li className="phone">
										<Link to={`tel:${process.env.REACT_APP_PHONE_NUMBER}`}>
											<i className="far fa-phone" />
											{process.env.REACT_APP_PHONE_NUMBER}
										</Link>
									</li>
									<li>
										<i className="far fa-envelope-open" />
										<Link to={`mailto:${process.env.REACT_APP_EMAIL}`}>
											{process.env.REACT_APP_EMAIL}
										</Link>
									</li>
									<li>
										<i className="far fa-map-marker-alt" />
										{process.env.REACT_APP_ADDRESS}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="contact-form grey-bg">
					<div className="row no-gutters justify-content-center">
						<div className="col-10">
							<div className="section-title text-center mb-40">
								<h2 className="title">Don’t Hesited To Contact Us</h2>
							</div>
							<form onSubmit={validateForm}>
								<div className="row">
									<div className="col-lg-4">
										<div className="input-group mb-30">
											<input
												type="text"
												name="name"
												placeholder="Your Full Name"
												value={name}
												onChange={(e) => setName(e.target.value)}
											/>
											<span className="icon">
												<i className="far fa-user-circle" />
											</span>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="input-group mb-30">
											<input
												type="email"
												name="email"
												placeholder="Your Email Address"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
											<span className="icon">
												<i className="far fa-envelope-open" />
											</span>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="input-group mb-30">
											<input
												type="text"
												name="phone"
												placeholder="Your Phone"
												value={mobile}
												onChange={(e) => setMobile(e.target.value)}
											/>
											<span className="icon">
												<i className="far fa-phone" />
											</span>
										</div>
									</div>
									<div className="col-12">
										<div className="input-group textarea mb-30">
											<textarea
												placeholder="Write Message"
												name="message"
												value={message}
												onChange={(e) => setMessage(e.target.value)}
											/>
											<span className="icon">
												<i className="far fa-pencil" />
											</span>
										</div>
									</div>
									<div className="col-12 text-center">
										<button type="submit" className="main-btn">
											Send Message
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid container-1600">
				<div className="contact-map">
					<iframe
						title="map"
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d91364.00338430358!2d-73.9756152824982!3d40.698190064837625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1598380219280!5m2!1sen!2sbd"
						style={{ border: 0 }}
						allowFullScreen
						aria-hidden="false"
						tabIndex={0}
					/>
				</div>
			</div>
		</section>
	);
};

export default Content;
