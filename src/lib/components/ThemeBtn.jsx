"use client"

import React, { useEffect, useState } from "react";

const DarkBtn = ({changeMode}) => {
  return (
    <>
      <button
        onClick={changeMode}
      >
        <i class="bi bi-moon-stars-fill" style={{fontSize:"36px"}}></i>
      </button>
    </>
  );
};

const LightBtn = ({changeMode}) => {
  return (
    <>
      <button
        onClick={changeMode}
      >
        <i class="bi bi-brightness-high-fill" style={{fontSize:"36px"}}></i>
      </button>
    </>
  );
};

const ThemeBtn = () => { 
    const [mode,setMode] = useState("");
    const changeMode = () => {
        let currMode = localStorage.getItem("theme-mode");
        if(currMode=="dark"){
          setMode("light")
          localStorage.setItem("theme-mode","light");
          const htmlCont = document.getElementsByTagName("html")[0];
          htmlCont.setAttribute("data-theme", "light");
        }else{
          setMode("dark")
          localStorage.setItem("theme-mode","dark");
          const htmlCont = document.getElementsByTagName("html")[0];
          htmlCont.setAttribute("data-theme", "dark");
        }
    }
    useEffect(()=>{
        let themeMode = localStorage.getItem("theme-mode");
        if(!themeMode){
          localStorage.setItem("theme-mode","light");
          changeMode();
        }
        else {
          changeMode();
        }
    },[])
  return <>{mode == "dark" ? <LightBtn changeMode={changeMode}/> : <DarkBtn changeMode={changeMode}/>}</>;
};

export default ThemeBtn;
