import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Company Name</h2>
            <p className="text-sm">Your trusted trading platform.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4 md:mb-0">
              <li>
                <a href="#" className="hover:text-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-accent">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-accent">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-accent">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
