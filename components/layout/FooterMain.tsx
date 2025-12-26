import React from "react";
import Image from "next/image";
import footer1 from "../../public/CompanyName.png";

export const FooterMain = () => {
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Work", href: "#" },
    { label: "Services", href: "#" },
    { label: "Perspective", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Client Login", href: "#" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-[#141414] text-white">
      {/* Main Content */}
      <div className="px-4 py-24 sm:px-8 md:px-20 ">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between  py-8">
          {/* Left */}
          <div className="max-w-lg">
            <p className="mb-8 text-lg leading-relaxed text-[#FFFBF5]">
              The #1 architecture firm in Texas turning dreams into beautiful,
              functional spaces. From cozy homes to innovative designs, we bring
              your vision to life—one detail at a time. Let’s create something
              amazing together!
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase text-[#E8E8E8] font-semibold">
                  Phone
                </p>
                <p className="mt-2 text-md text-[#F7F2E9]">(217) 444-0134</p>
              </div>

              <div>
                <p className="text-xs uppercase text-[#E8E8E8] font-semibold">
                  Email
                </p>
                <p className="mt-2 text-md text-[#F7F2E9]">architect@email.com</p>
              </div>

              <div>
                <p className="text-xs uppercase  text-[#E8E8E8] font-semibold">
                  Address
                </p>
                <p className="mt-2 text-md text-[#F7F2E9]">
                  123 Main Street, Suite 200, Austin, TX 78701
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-14">
              <h3 className="mb-2 text-2xl font-semibold text-[#F7F2E9]">
                Subscribe to the newsletter
              </h3>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="pal@example.com"
                  className="flex-1 bg-[#434343] px-4 py-3 text-lg text-white placeholder-gray-500 focus:outline-none"
                />
                <button className="bg-red-500 px-12 py-3 text-lg font-medium ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Middle – Navigation */}
          <div className="w-full md:w-1/4 text-xl">
            <div className="space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block border-b border-[#434343] pb-3 text-xl text-[#F7F2E9]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-between">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="border-t border-[#434343] pt-3 text-xl w-full"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Branding */}
      <Image src={footer1} alt="Company branding" className="w-full" />

      <div className="border-t border-gray-800 mt-8" />

      {/* Bottom Bar */}
      <div className="flex flex-col items-center gap-4 pb-16 pt-6 text-lg text-[#F7F2E9] md:flex-row md:justify-between md:px-24">
        <div className="flex gap-6">
          <a href="#" className="">
            Privacy Policy
          </a>
          <a href="#" className="">
            Terms
          </a>
        </div>
        <span>© 2025 Prosper. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default FooterMain;
