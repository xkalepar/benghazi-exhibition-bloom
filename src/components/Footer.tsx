
import { Link } from "react-router-dom";
import { Heart, Baby, MapPin, Calendar, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-blue-100 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 text-2xl font-bold text-pink-600 mb-4">
              <div className="relative">
                <Heart className="h-8 w-8 text-pink-500" />
                <Baby className="h-4 w-4 text-blue-500 absolute -bottom-1 -right-1" />
              </div>
              <span>Libya Mother & Child Exhibition</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              The premier exhibition dedicated to mother and child products, healthcare, and services in Libya. 
              Connecting families with trusted brands and innovative solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-pink-500" />
                <span>Hawari Exhibition Center – Benghazi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span>August 24–26, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-500" />
                <span>info@libyamotherandchild.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">About</Link></li>
              <li><Link to="/gallery" className="text-gray-600 hover:text-pink-600 transition-colors">Gallery</Link></li>
              <li><Link to="/partners" className="text-gray-600 hover:text-pink-600 transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-pink-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Mother & Child Supplies</li>
              <li>Healthcare & Nutrition</li>
              <li>Toys & Accessories</li>
              <li>Educational Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2025 Libya Mother & Child Exhibition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
