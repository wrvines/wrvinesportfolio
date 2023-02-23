import React from "react";
import { data } from "../data/data.js";

function Work() {
	const projects = data;

	return (
		<div
			name="work"
			className="bg-[#363534] text-gray-200 w-full md:h-screen">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#E52424]">
						Work
					</p>
					<p className="py-6 text-[#8892b0]">
						// Check out some of my recent work
					</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
					{projects.map((item, index) => (
						<div
							key={index}
							style={{ backgroundImage: `url(${item.image})` }}
							className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div ">
							{/* hover effect */}
							<div className="opacity-0 group-hover:opacity-100">
								<span className="text-2xl font-bold tracking-wider">
									{item.name}
								</span>
								<div className="pt-8 text-center">
									<a href={item.github} target="_blank">
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8892b0] font-bold text-lg">
											Code
										</button>
									</a>
									<a href={item.live} targetr="_blank">
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8892b0] font-bold text-lg">
											Live
										</button>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Work;
