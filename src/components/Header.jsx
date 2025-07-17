import React from 'react';

const Header = () => {
  return (
    <>
      <div
        id="header_cont"
        className="w-full flex items-end"
        style={{
          background: 'linear-gradient(to bottom, #f39b17 0%, #d65901 100%)',
        }}
      >
        <div className="max-w-7xl w-full mx-auto flex flex-row items-end">
          {/* Logo - left */}
          <div
            id="logo"
            className="w-[27%] flex justify-center items-end pr-6"
          >
            <a href="/" rel="nofollow">
              <img
                src="/logo.png"
                alt="Carpet Cleaning"
                className="border-0 h-[24vw] max-h-[177px] w-auto max-w-full object-contain align-bottom"
              />
            </a>
          </div>
          {/* Banner Image - right */}
          <div className="header_top_images w-[65%] flex justify-end items-end pl-50">
            <img
              src="/header.png"
              alt="Allcarpets header"
              className="border-0 h-[24vw] max-h-[177px] w-auto max-w-full object-contain align-bottom"
              id="map_img_header_script"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
