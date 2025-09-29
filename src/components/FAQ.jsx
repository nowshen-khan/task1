import { useState } from "react";
import { ChevronDown } from "lucide-react"; // npm i lucide-react

const faqs = [
	{
		q: "Do plumbers deal with heating?",
		a: "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
	},
	{
		q: "Do you charge a call out fee?",
		a: "Yes, depending on your location and time, we might charge a small call-out fee.",
	},
	{
		q: "How quickly can your company send out an engineer?",
		a: "We aim to send an engineer within 24 hours depending on availability.",
	},
	{
		q: "What should I do if I get a water leak?",
		a: "Shut off the main water valve immediately and call our emergency line.",
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="max-w-3xl mx-auto px-4 py-12">
			<h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
				Frequently asked questions
			</h2>

			{faqs.map((item, index) => (
				<div
					key={index}
					className="border-b border-gray-300 py-4 cursor-pointer"
					onClick={() => toggleFAQ(index)}
				>
					<div className="flex justify-between items-center">
						<p className="font-semibold">{item.q}</p>
						<ChevronDown
							className={`w-5 h-5 transition-transform ${
								openIndex === index ? "rotate-180" : ""
							}`}
						/>
					</div>
					{openIndex === index && (
						<p className="mt-2 text-gray-600">{item.a}</p>
					)}
				</div>
			))}
		</section>
	);
}
