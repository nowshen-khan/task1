import {
	MapPin,
	Mail,
	Facebook,
	Linkedin,
	Twitter,
	Instagram,
	PhoneCall,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className="text-gray-700 px-6 py-10 mt-12 text-center">
			{/* Main Grid */}
			<div
				className="max-w-6xl mx-auto grid gap-8 
				grid-cols-1 
				md:grid-cols-2 md:grid-rows-2
				lg:grid-cols-4 lg:grid-rows-1"
			>
				{/* Logo */}
				<div className="text-left md:col-span-2 lg:col-span-1">
					<h2 className="font-bold text-gray-950 text-3xl">Business Logo</h2>
					<div className="flex gap-4 mt-3">
						<a href="https://www.facebook.com/" target="_blank">
							<Facebook className="w-6 h-6" />
						</a>
						<a href="https://www.linkedin.com/" target="_blank">
							<Linkedin className="w-6 h-6" />
						</a>
						<a href="https://www.x.com/" target="_blank">
							<Twitter className="w-6 h-6" />
						</a>
						<a href="https://www.instagram.com/" target="_blank">
							<Instagram className="w-6 h-6" />
						</a>
					</div>
				</div>

				{/* Services */}
				<div className="text-left">
					<h3 className="font-semibold mb-2">Our Services</h3>
					<ul className="space-y-1 text-sm">
						<li>Plumbing</li>
						<li>Drainage</li>
						<li>Bathrooms</li>
						<li>Commercial</li>
					</ul>
				</div>

				{/* Links */}
				<div className="text-left">
					<h3 className="font-semibold mb-2">Useful Links</h3>
					<ul className="grid grid-cols-2 gap-x-4 space-y-1 text-sm">
						<li>Contact Us</li>
						<li>Customer Services</li>
						<li>Updates</li>
						<li>Rates</li>
						<li>About Us</li>
						<li>Locations</li>
						<li>Sitemap</li>
					</ul>
				</div>

				{/* Contact Info */}
				<div className="text-left md:col-span-2 lg:col-span-1">
					<h3 className="font-semibold mb-2">Contact Info</h3>
					<ul className="space-y-2 text-sm">
						<li className="flex flex-row items-center">
							<MapPin className="mr-2 w-4 h-4" />1 Sail Street, London, SE11 6NQ
						</li>
						<li className="flex flex-row items-center">
							<Mail className="mr-2 w-4 h-4" /> enquiries@PlumbingPros.com
						</li>
						<li className="flex flex-row items-center">
							<PhoneCall className="mr-2 w-4 h-4" /> 020 4527 6474
						</li>
					</ul>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="flex flex-col sm:flex-row justify-between text-center text-xs mt-8 text-gray-500">
				<div>© Plumbing Pros. All Rights Reserved</div>
				<div>Reserved Website by IH Adventure And Creative</div>
			</div>
		</footer>
	);
}
