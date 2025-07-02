import React from "react";
import Logo from "../Logo/Logo";
import FooterResources from "./FooterResources";
import FollowsUs from "./FollowsUs";
import FooterBottom from "./FooterBottom";
import FooterHR from "./FooterHR";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FooterLink from "./FooterLink";
import { Link } from "react-router";
function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="   py-6 lg:py-8">
        {/* footer top */}
        <div className="md:flex md:gap-x-16  xl:gap-x-80 ">
          {/*footer logo and address*/}
          <div className="mb-6 md:mb-0">
            <Logo />

            <p className="text-sm mt-3 max-w-md text-gray-600 dark:text-gray-400">
              RunNexus is your ultimate platform for managing marathon events —
              from registration to results, we help you run it all!
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-700 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">
                  (+880) 1990-654835
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-400" />
                <span className="text-gray-500 dark:text-gray-400">
                  support@runnexus.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-gray-500 dark:text-gray-400">
                  Uttara, Dhaka 1230, Bangladesh
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-[900px] w-full grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <FooterResources />
            </div>

            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <FollowsUs />
            </div> */}

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <Link
                    to="/about"
                    className="hover:underline  text-sm md:text-base "
                  >
                    About US
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:underline  text-sm md:text-base "
                  >
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden xl:block col-span-full">
              <FooterHR />
              <FooterBottom />
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="block xl:hidden">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
