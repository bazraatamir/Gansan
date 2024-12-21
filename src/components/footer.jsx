import React from "react";
import logo from "../assets/image/logo.png";

const Footer = () => {
  return (
    <footer className='bg-[oklch(0.32_0.02_255.73)] text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-36'>
          {/* Company Info */}
          <div className='text-center sm:text-left'>
            <img
              src={logo}
              alt='Company Logo'
              className='mb-4 mx-auto sm:mx-0 w-[150px]'
            />
            <p className='text-lg'>
              We are a company committed to providing the best service to our
              customers. Our mission is to innovate and lead in our industry.
            </p>
          </div>

          {/* Contact Info */}
          <div className='text-center sm:text-left'>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <p>
              Email:{" "}
              <a href='mailto:contact@company.com' className='underline'>
                contact@company.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href='tel:+1234567890' className='underline'>
                +123 456 7890
              </a>
            </p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>

          {/* Social Media */}
          <div className='text-center sm:text-left'>
            <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
            <div className='flex justify-center sm:justify-start space-x-6'>
              <a
                href='https://facebook.com'
                className='text-white hover:text-gray-300'>
                <i className='fab fa-facebook-f text-2xl'></i>
              </a>
              <a
                href='https://twitter.com'
                className='text-white hover:text-gray-300'>
                <i className='fab fa-twitter text-2xl'></i>
              </a>
              <a
                href='https://linkedin.com'
                className='text-white hover:text-gray-300'>
                <i className='fab fa-linkedin-in text-2xl'></i>
              </a>
              <a
                href='https://instagram.com'
                className='text-white hover:text-gray-300'>
                <i className='fab fa-instagram text-2xl'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='text-center mt-8'>
          <p>&copy; 2024 Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
