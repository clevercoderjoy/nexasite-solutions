import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import { RiFacebookLine, RiLinkedinLine, RiMailSendLine } from "react-icons/ri";
import ButtonTop from './buttonTop';

const Footer = () => {

  return (
    <footer className="bg-[#f3f4f6] rounded-t-3xl p-6 md:p-12 text-black">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6">
            SUBSCRIBE TO OUR NEWSLETTER AND BE THE FIRST TO KNOW ABOUT THE LATEST RELEASES, OFFERS AND NEWS FROM BAGSTORE.COM
          </h2>
          <div className="relative mb-4">
            <Input
              type="email"
              placeholder="Enter your email here"
              className="w-full h-14 rounded-full leading-loose tracking-widest text-lg px-6 pr-14"
            />
            <FiArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 text-3xl text-gray-600" />
          </div>
        </div>

        <div className="flex gap-16 lg:gap-32">
          <div>
            <h3 className="font-medium text-2xl mb-3">Menu</h3>
            <ul className="space-y-2 text-md">
              <li className=''><Link href="#">Men</Link></li>
              <li className=''><Link href="#">Women</Link></li>
              <li className=''><Link href="#">Children</Link></li>
              <li className=''><Link href="#">Brand</Link></li>
              <li className=''><Link href="#">New</Link></li>
              <li className=''><Link href="#">Popular</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-2xl mb-3">Support</h3>
            <ul className="space-y-2 text-md">
              <li className=''><Link href="#">Shipping & Returns</Link></li>
              <li className=''><Link href="#">FAQs</Link></li>
              <li className=''><Link href="#">Help & Conditions</Link></li>
              <li className=''><Link href="#">About</Link></li>
              <li className=''><Link href="#">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 items-center justify-between mt-6">
        <div className="imgs flex gap-4">
          <Image src="/assets/images/mastercard.svg" alt="Mastercard" width={50} height={24} />
          <Image src="/assets/images/paypal.svg" alt="PayPal" width={50} height={24} />
          <Image src="/assets/images/visa.svg" alt="Visa" width={50} height={24} />
        </div>
        <div className="socials flex gap-4">
          <RiMailSendLine className="border-2 border-gray-300 rounded-full p-2 w-10 h-10 transition-colors duration-300 hover:bg-gray-200" />
          <FaWhatsapp className="border-2 border-gray-300 rounded-full p-2 w-10 h-10 transition-colors duration-300 hover:bg-gray-200" />
          <RiLinkedinLine className="border-2 border-gray-300 rounded-full p-2 w-10 h-10 transition-colors duration-300 hover:bg-gray-200" />
          <FaInstagram className="border-2 border-gray-300 rounded-full p-2 w-10 h-10 transition-colors duration-300 hover:bg-gray-200" />
          <RiFacebookLine className="border-2 border-gray-300 rounded-full p-2 w-10 h-10 transition-colors duration-300 hover:bg-gray-200" />
        </div>
        <div className="btnTop flex justify-center">
          <ButtonTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
