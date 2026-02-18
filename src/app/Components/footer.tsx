import { FaBox, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import Link from "next/link"
import { Button } from "./Ui/button";

export default function Footer(){
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                  <FaBox className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">
                  All<span className="text-orange-500">Pack</span> Pro
                </span>
              </div>
              <p className="text-gray-400">
                Professional packaging design services for agricultural, industrial, and consumer products.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Agricultural Packaging
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Industrial Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Brand Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Label Design
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Portfolio</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Fertilizer Packaging
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Chemical Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Agricultural Tools
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Industrial Equipment
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500">
                  <FaInstagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500">
                  <FaFacebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500">
                  <FaTwitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500">
                  <FaLinkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} All Pack Packaging Solution Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}