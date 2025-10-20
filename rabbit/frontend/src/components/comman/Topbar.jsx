import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { useRef } from "react";

const Topbar = () => {
  const marqueeRef = useRef(null);

  return (
    <div className="bg-[#ea2e2e] text-white py-3">
      <marquee
        behavior="scroll"
        scrollamount="10"
        direction="left"
        ref={marqueeRef}
        onMouseEnter={() => marqueeRef.current.stop()}
        onMouseLeave={() => marqueeRef.current.start()}
      >
        <div className="container mx-auto gap-8 flex items-center justify-between">
          
          {/* Left: Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.meta.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/darshan.kok/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/darshankok46"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <RiTwitterXLine className="h-4 w-4" />
            </a>
          </div>

          {/* Center: Scrolling Text */}
          <div className="text-sm text-center flex-grow">
            <span className="cursor-pointer">
              We ship worldwide - Fast and reliable shipping! &nbsp;
              Secure Payments | 24/7 Support | Quality Guaranteed &nbsp;
              Free Returns | Track Your Order | New Arrivals Available &nbsp;
              Customer Reviews | Exclusive Offers | Limited Stock!
            </span>
          </div>

          {/* Right: Contact */}
          <div className="text-sm text-right">
            <span>+1 (234) 567-890</span>
          </div>

        </div>
      </marquee>
    </div>
  );
};

export default Topbar;
