import { Instagram, Mail, Phone, Twitter } from "lucide-react";
import NavigationLink from "../components/NavigationLink";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} className="w-10 h-10" />
              <span className="font-bold">AI Cow Breed Revival</span>
            </div>
            <p className="text-gray-400">
              Revolutionizing cattle farming with AI
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <NavigationLink href="#" text="Home" />
              </li>
              <li>
                <NavigationLink href="#features" text="Features" />
              </li>
              <li>
                <NavigationLink href="#features" text="How It Works" />
              </li>
              <li>
                <NavigationLink href="#features" text="About Us" />
              </li>
              <li>
                <NavigationLink href="#features" text="Contact" />
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@aicowrevival.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 123 456 7890</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-indigo-400">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AI Cow Breed Revival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
