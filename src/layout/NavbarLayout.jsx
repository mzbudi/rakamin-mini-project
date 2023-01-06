import React from "react";

const NavbarLayout = () => {
  return (
    <header>
      <nav className="w-full bg-[#FFFFFF] py-[18px] px-5 border-b border-[#E0E0E0]">
        <ul className="flex">
          <li>
            <span className="text-lg pr-[10px] font-bold font-nunito non-italic">
              Product Roadmap
            </span>
          </li>
          <li>
            <button className="bg-primary rounded-lg px-4 py-1 shadow-sm">
              <span className="text-white font-nunito"> + Add New Group</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarLayout;
