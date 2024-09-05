const Footer = () => {
  return (
    <div>
      <div className="bg-[#161616] text-neutral-500 py-28">
        <div className="max-w-[85%] mx-auto">
          <div className="grid grid-cols-4 gap-8">
            <div className="font-medium space-y-5">
              <h1 className="text-3xl font-bold uppercase text-white">
                GlossyWheels
              </h1>
              <p>
                We provide a range of services including car wash, car
                detailing, paint protection, window tint, wheel repairs and
                bumper bar/panel damage.
              </p>
              <p>
                Our team has over 20 years of experience and is accredited with
                all services offered.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold uppercase text-white">
                Services
              </h2>
              <ul className="mt-5 space-y-5">
                <li className="text-neutral-400 uppercase text-sm font-medium hover:pl-3 hover:text-white duration-300 cursor-pointer">
                  Services
                </li>
                <li className="text-neutral-400 uppercase text-sm font-medium hover:pl-3 hover:text-white duration-300 cursor-pointer">
                  Services
                </li>
                <li className="text-neutral-400 uppercase text-sm font-medium hover:pl-3 hover:text-white duration-300 cursor-pointer">
                  Services
                </li>
                <li className="text-neutral-400 uppercase text-sm font-medium hover:pl-3 hover:text-white duration-300 cursor-pointer">
                  Services
                </li>
                <li className="text-neutral-400 uppercase text-sm font-medium hover:pl-3 hover:text-white duration-300 cursor-pointer">
                  Services
                </li>
                <li className="text-neutral-400 uppercase text-sm font-medium hover:pl-3 hover:text-white duration-300 cursor-pointer">
                  Services
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold uppercase text-white">
                Quick Menu
              </h2>
              <ul className="mt-5 space-y-5">
                <li className="text-neutral-400 uppercase text-sm font-medium hover:pl-3 hover:text-white duration-300 cursor-pointer">
                  Services
                </li>
                <li className="text-neutral-400 uppercase text-sm font-medium hover:pl-3 hover:text-white duration-300 cursor-pointer">
                  Services
                </li>
                <li className="text-neutral-400 uppercase text-sm font-medium hover:pl-3 hover:text-white duration-300 cursor-pointer">
                  Services
                </li>
              </ul>
            </div>
            {/*  Contact*/}
            <div className="space-y-5">
              <h2 className="text-lg font-semibold uppercase text-white">
                Services
              </h2>
              <div>
                <h1 className="text-xl font-medium text-neutral-400">
                  CALL US
                </h1>
                <h1 className="text-3xl font-semibold text-white">
                  1300 346 374
                </h1>
              </div>
              <div>
                <h3>Zetland Address</h3>
                <h5 className="text-white">
                  2/4 DEFRIES AVE, <br /> ZETLAND NSW 2017
                </h5>
              </div>
              <div>
                <h2 className="text-xl font-medium text-neutral-400">
                  Email Us
                </h2>
                <h6>info@glossywheels.com.au</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary py-6 text-center text-white text-xs">
        <p>
          © Copyright {new Date().getFullYear()} GlossyWheels | Design is
          inspired by FINE SHINE
        </p>
        <p>
          Developed by{" "}
          <a
            href="https://rakib-info.vercel.app/"
            target="_blank"
            className="hover:underline"
          >
            RAKIB AHMED
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
