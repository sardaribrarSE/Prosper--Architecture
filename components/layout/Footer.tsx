import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full">
      <div
        className="w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[650px] bg-center bg-cover"
        style={{ backgroundImage: "url(/Footer1.png)" }}
        aria-hidden="true"
      >
        <div className="bg-[rgba(0,0,0,0.15)] w-full h-full">
          {/* Outer padding responsive */}
          <div className="px-4 sm:px-10 lg:px-20 pt-24 sm:pt-32 lg:pt-44">
            <div
              className="bg-[#F7F2E9] border border-[#7fb0e6] rounded-sm"
              style={{
                paddingTop: "100px",
                minHeight: "475px",
              }}
            >
              {/* Inner padding responsive */}
              <div className="px-6 sm:px-10 lg:px-14">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  
                  {/* Text Section */}
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0b0b0b]">
                      Let’s build your
                      <br />
                      Extraordinary vision
                    </h2>

                    <p className="mt-6 max-w-xl text-sm sm:text-md text-gray-700">
                      Turn your vision into reality with our expertise in
                      architecture and <br className="hidden sm:block" />
                      design. Connect with us today and take the first step
                      toward <br className="hidden sm:block" />
                      your dream space.
                    </p>
                  </div>

                  {/* Button Section */}
                  <div className="mt-10 md:mt-52 flex md:justify-end">
                    <a
                      href="#"
                      className="inline-flex items-center bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-95"
                      aria-label="Book a Call"
                    >
                      Book a Call
                      <span className="ml-3 text-lg">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
