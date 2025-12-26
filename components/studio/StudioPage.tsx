import Image from "next/image";
import studioImage from "../../public/Studio.png";
import companyImage from "../../public/CompanyName.png";
import footerImage from "../../public/Footer1.png";

export default function StudioPage() {
  return (
    <section className="py-10">
      <div className="mt-20">
        <Image
          src={studioImage}
          alt="Studio building"
          className="w-full h-full "
        />
      </div>
      <div className="px-24 pt-1 mb-20" style={{ backgroundColor: "#F7F2E9" }}>
        <div className="flex justify-between gap-10 items-center  p-1">
          <div className="w-[50%]">
            <h2 className="text-[40px] md:text-5xl font-medium  text-[#141414] font-poppins ">
              We strive to design <br /> architecture that offers <br /> lasting value
              <span className="text-red-600">.</span>
            </h2>
          </div>

          <div className="w-[50%]">
            <h2 className="text-lg text-[#434343] leading-relaxed font-Helvetica ">
              Prosper Architects stands at the forefront of innovative and
              sustainable architectural design. Our practice is rooted in the
              belief that architecture should deeply connect with the
              aspirations of our clients, the needs of our communities, and the
              preservation of our environment. We specialize in creating spaces
              that not only meet today's needs but are also prepared for the
              future, ensuring they bring lasting value and prosperity.
            </h2>
          </div>
        </div>

        <div className="mt-10 flex justify-between">
          <div className="overflow-hidden rounded-sm">
            <Image
              src={studioImage}
              alt="Studio building"
              className="w-[302px] h-64 md:h-80 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-sm">
            <Image
              src={studioImage}
              alt="Detail architecture"
              className="w-[302px] h-64 md:h-80 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-sm">
            <Image
              src={footerImage}
              alt="Skyscraper"
              className="w-[632px] h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
