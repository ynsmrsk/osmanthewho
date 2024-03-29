import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactModal() {
	const [open, setOpen] = useState(false);
	const closeIcon = (
		<svg
			width="24"
			height="24"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.2002 15L0.000198364 -8.39259e-07L10.1055 15L0.000197053 30L19.2002 15Z"
				fill="#070F17"
			/>
			<path
				d="M10.7998 15L29.9998 30L19.8945 15L29.9998 2.28958e-07L10.7998 15Z"
				fill="#070F17"
			/>
		</svg>
	);

	const a = "gmail_yunus-emre",
		b = "template_osman-contact",
		c = "y5o7tye_4QLneT6U_";

	const form = useRef(null);
	const sendEmail = (e) => {
		e.preventDefault();

		let inputName = document.forms["contact_form"].elements["user_name"].value;
		let inputEmail =
			document.forms["contact_form"].elements["user_email"].value;
		let inputMessage = document.forms["contact_form"].elements["message"].value;

		if (inputName === "" || inputEmail === "" || inputMessage === "") {
			alert("Please fill all the fields");
			return;
		}

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		form.current.reset();
	};

	return (
		<>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				center
				closeIcon={closeIcon}
				closeIconId="contact-close-button"
				modalId="contact-modal"
				styles={{
					overlay: {
						background: "none",
					},
				}}
				classNames={{
					overlayAnimationIn: "customEnterOverlayAnimation",
					overlayAnimationOut: "customLeaveOverlayAnimation",
					modalAnimationIn: "customEnterModalAnimation",
					modalAnimationOut: "customLeaveModalAnimation",
				}}
				animationDuration={1000}
			>
				<div className="contact-modal-content">
					<div className="contact-heading-section">
						<h1 className="contact-heading-title">Get in touch</h1>
					</div>

					<div className="contact-form-section">
						<form
							ref={form}
							onSubmit={sendEmail}
							className="contact-form"
							name="contact_form"
						>
							<input
								className="input"
								type="text"
								name="user_name"
								placeholder="Name"
							/>
							<input
								className="input"
								type="email"
								name="user_email"
								placeholder="Email"
							/>
							<textarea
								className="input text-area"
								name="message"
								placeholder="Message"
							></textarea>
							<button className="form-submit-btn" type="submit" value="send">
								Submit
							</button>
						</form>
					</div>

					<div className="contact-info-section">
						<div className="contact-info">
							<p className="contact-info-detail"></p>
						</div>
						<div className="contact-info">
							<p className="contact-info-label">Email:</p>
							<p className="contact-info-detail">
								<a
									target="_blank"
									href="mailto:info@osmanthewho.com?subject=Hi Osman! I'm contacting because..."
								>
									info@osmanthewho.com
								</a>
							</p>
						</div>
						<div className="contact-info">
							<p className="contact-info-label">Address:</p>
							<p className="contact-info-detail">
								<a target="_blank" href="https://goo.gl/maps/C9Cw7hLd9UapPEYK6">
									İstanbul/Turkey
								</a>
							</p>
						</div>
						<div className="contact-info">
							<p className="contact-info-label">Follow me:</p>
							<p className="contact-info-detail social-icons">
								<a
									target="_blank"
									href="https://www.instagram.com/osmanthewho/"
								>
									<img
										className="contact-social-icons"
										src="/icons/social/instagram.svg"
										alt="Instagram"
									/>
								</a>
								<a target="_blank" href="https://youtube.com/osmanthewho">
									<img
										className="contact-social-icons"
										src="/icons/social/youtube.svg"
										alt="YouTube"
									/>
								</a>
								<a target="_blank" href="https://vimeo.com/osmanthewho/">
									<img
										className="contact-social-icons"
										src="/icons/social/vimeo.svg"
										alt="Vimeo"
									/>
								</a>
							</p>
						</div>
					</div>
				</div>
			</Modal>
			<div className="contact-btn" onClick={() => setOpen(true)}>
				Contact
			</div>
		</>
	);
}
