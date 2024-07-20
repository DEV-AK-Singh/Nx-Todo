import React from "react";
import Back from "./Back";
import ThemeBtn from "./ThemeBtn";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-400 w-full" style={{padding:"1rem",position:"absolute"}}>
      <Back />
      <ThemeBtn />
    </div>
  );
};

export default Header;
