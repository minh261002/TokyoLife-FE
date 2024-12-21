const Footer = () => {
  return (
    <footer className="bg-white boxShadow rounded-xl w-full my-6">
      <div className="flex justify-between gap-[30px] flex-wrap w-full">
        <div className="">
          <h3 className="text-[1.2rem] font-semibold text-text mb-2">
            Services
          </h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              UI Components
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Website Templates
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Icons
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Opacity Palette
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Blocks
            </p>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.2rem] font-semibold text-text mb-2">
            Company
          </h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Service
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Features
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Our Team
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Portfolio
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Blog
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Contact Us
            </p>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.2rem] font-semibold text-text mb-2">
            Our Social Media
          </h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Dribbble
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Behance
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Medium
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Instagram
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Facebook
            </p>
            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
              Twitter
            </p>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.2rem] font-semibold text-text mb-2">
            Join a Newsletter
          </h3>
          <div className="flex gap-[2px] flex-col text-text relative">
            <label className="text-[0.9rem]">Your Email</label>
            <input
              type="email"
              className="py-3 px-4 w-full pr-[90px] rounded-md border border-primary outline-none"
              placeholder="Email address"
            />

            <button className="px-4 h-[67%] rounded-r-md bg-primary text-white absolute top-[24px] right-0">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-[20px] mt-[40px] flex items-center justify-between w-full flex-wrap gap-[20px]">
        <img
          src="https://i.ibb.co/ZHYQ04D/footer-logo.png"
          alt="logo"
          className="w-[130px]"
        />

        <p className="text-[0.9rem] text-gray-600">
          © 2024 ZenUI Library. All Rights Reserved.{" "}
        </p>

        <div className="flex items-center gap-[10px] text-text">
          <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300"></a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300"></a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300"></a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
