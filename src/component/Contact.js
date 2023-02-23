import React from "react";
// import ContactMe from "../assets/contactme.jpg";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { TbArrowsUp } from "react-icons/tb";
import { Link } from "react-scroll";

function Contact() {
	const Email = process.env.REACT_APP_EMAIL_URL;

	return (
		<div
			name="contact"
			className="w-full lg:h-screen bg-[#363534] text-gray-200">
			<div className="max-w-[600px] mx-auto px-4 py-16 w-full">
				<p className="text-4xl font-bold inline border-b-4 border-[#E52424]">
					Contact
				</p>
				<h2 className="py-4 text-[#8892b0]">// Get In Touch</h2>
				<form
					method="POST"
					action={Email}
					className="flex flex-col max-w-[600px] ww-full text-black">
					<input
						className="p-2 "
						type="text"
						placeholder="Name"
						name="name"
					/>
					<input
						className="my-4 p-2 "
						type="email"
						placeholder="Email"
						name="email"
					/>
					<textarea
						className="p-2"
						name="message"
						rows="10"
						placeholder="Message"></textarea>
					<button className="text-white border-2 hover:bg-[#E52424] hover:border-[#E52424] px-4 py-3 my-8 mx-auto flex items-center">
						Let's Connect
					</button>
				</form>
				<div className="mx-auto flex justify-center items-center w-[6rem] rounded-full shadow-lg shadow-gray-900 py-4 cursor-pointer hover:scale-110 ease-in duration-300">
					<Link to="home" smooth={true} duration={500}>
						<TbArrowsUp size={30} />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Contact;

{
	/* <div className="grid lg:grid-cols-5 gap-8"></div>
				//  left 
				<div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-900 rounded-xl p-4">
					<div className="lg:p-4 h-full">
						<div>
							<img
								style={{
									maxWidth: "500px",
									maxHeight: "500px",
								}}
								className="max-w-full rounded-xl hover:scale-105 ease-in duration-300"
								src={ContactMe}
								alt="/"
							/>
						</div>
						<div>
							<h2 className="py-2">Will Vines</h2>
							<p>Front-End Developer</p>
							<p className="py-4">
								I am available for freelance work or full-time
								positions. Contact me and let's talk.
							</p>
						</div>

						<div>
							<p className="uppercase pt-8">Connect With Me</p>
							<div className="flex items-center justify-between py-4">
								<a
									href="https://www.linkedin.com/in/william-r-vines/"
									target="_blank"
									rel="noreferrer">
									<div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<FaLinkedin size={30} />
									</div>
								</a>
								<a
									href="https://github.com/wrvines"
									target="_blank"
									rel="noreferrer">
									<div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<FaGithub size={30} />
									</div>
								</a>
								<a
									href="https://www.linkedin.com/in/william-r-vines/"
									target="_blank"
									rel="noreferrer">
									<div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<HiOutlineMail size={30} />
									</div>
								</a>
								<a
									href="https://www.linkedin.com/in/william-r-vines/"
									target="_blank"
									rel="noreferrer">
									<div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<BsFillPersonLinesFill size={30} />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				// right
				<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-900 rounded-xl lg:p-4">
                    <div className="p-4">
                        <form>
                            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                
                            </div>
                        </form>

                    </div>

                </div>
			</div>
		</div> */
}
