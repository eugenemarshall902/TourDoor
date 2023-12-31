import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#444] flex justify-between items-center p-4">
      <div className=" hidden md:block">
        <Image src="/logo_light.png" alt="" width={430} height={100} />
      </div>

      <p className="text-white text-xs md:font-medium">
        Copyright © 2023, All Rights Reserved
      </p>
      <div className="flex text-white gap-4">
        <Link className=" hover:text-red-700" href="#">
          <FaInstagram />
        </Link>
        <Link className=" hover:text-red-700" href="#">
          <FaFacebook />
        </Link>
        <Link className=" hover:text-red-700" href="#">
          <FaTwitter />
        </Link>
        <Link className=" hover:text-red-700" href="#">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
