"use client"

import React, { useEffect, useState } from "react";

const DarkBtn = ({changeMode}) => {
  return (
    <>
      <button
        className="btn btn-circle btn-outline p-2 absolute sm:top-12 sm:right-12 top-4 right-4"
        onClick={changeMode}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5739 1.11056L13.7826 2.69316C13.7632 2.73186 13.7319 2.76325 13.6932 2.7826L12.1106 3.5739C11.9631 3.64761 11.9631 3.85797 12.1106 3.93167L13.6932 4.72297C13.7319 4.74233 13.7632 4.77371 13.7826 4.81241L14.5739 6.39502C14.6476 6.54243 14.858 6.54243 14.9317 6.39502L15.723 4.81241C15.7423 4.77371 15.7737 4.74232 15.8124 4.72297L17.395 3.93167C17.5424 3.85797 17.5424 3.64761 17.395 3.5739L15.8124 2.7826C15.7737 2.76325 15.7423 2.73186 15.723 2.69316L14.9317 1.11056C14.858 0.963147 14.6476 0.963148 14.5739 1.11056Z" fill="currentColor"></path> <path d="M19.2419 5.07223L18.4633 7.40815C18.4434 7.46787 18.3965 7.51474 18.3368 7.53464L16.0009 8.31328C15.8185 8.37406 15.8185 8.63198 16.0009 8.69276L18.3368 9.4714C18.3965 9.4913 18.4434 9.53817 18.4633 9.59789L19.2419 11.9338C19.3027 12.1161 19.5606 12.1161 19.6214 11.9338L20.4 9.59789C20.42 9.53817 20.4668 9.4913 20.5265 9.4714L22.8625 8.69276C23.0448 8.63198 23.0448 8.37406 22.8625 8.31328L20.5265 7.53464C20.4668 7.51474 20.42 7.46787 20.4 7.40815L19.6214 5.07223C19.5606 4.88989 19.3027 4.88989 19.2419 5.07223Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4075 13.6642C13.2348 16.4915 17.6517 16.7363 20.6641 14.3703C20.7014 14.341 20.7385 14.3113 20.7754 14.2812C20.9148 14.1674 21.051 14.0479 21.1837 13.9226C21.2376 13.8718 21.2909 13.8201 21.3436 13.7674C21.8557 13.2552 22.9064 13.5578 22.7517 14.2653C22.6983 14.5098 22.6365 14.7517 22.5667 14.9905C22.5253 15.1321 22.4811 15.2727 22.4341 15.4122C22.4213 15.4502 22.4082 15.4883 22.395 15.5262C20.8977 19.8142 16.7886 23.0003 12 23.0003C5.92487 23.0003 1 18.0754 1 12.0003C1 7.13315 4.29086 2.98258 8.66889 1.54252L8.72248 1.52504C8.8185 1.49401 8.91503 1.46428 9.01205 1.43587C9.26959 1.36046 9.5306 1.29438 9.79466 1.23801C10.5379 1.07934 10.8418 2.19074 10.3043 2.72815C10.251 2.78147 10.1987 2.83539 10.1473 2.88989C10.0456 2.99777 9.94766 3.10794 9.8535 3.22023C9.83286 3.24485 9.8124 3.26957 9.79212 3.29439C7.32966 6.30844 7.54457 10.8012 10.4075 13.6642ZM8.99331 15.0784C11.7248 17.8099 15.6724 18.6299 19.0872 17.4693C17.4281 19.6024 14.85 21.0003 12 21.0003C7.02944 21.0003 3 16.9709 3 12.0003C3 9.09163 4.45653 6.47161 6.66058 4.81846C5.41569 8.27071 6.2174 12.3025 8.99331 15.0784Z" fill="currentColor"></path> </g>
        </svg>
      </button>
    </>
  );
};

const LightBtn = ({changeMode}) => {
  return (
    <>
      <button
        className="btn btn-circle btn-outline p-2 absolute top-12 right-12"
        onClick={changeMode}
      >
        <svg
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Lager_93" data-name="Lager 93" transform="translate(2 2)">
              <g id="Sun_3_Brightness_3" data-name="Sun 3, Brightness 3">
                <path
                  id="Path_68"
                  data-name="Path 68"
                  d="M32,14H27.033c-2,1.769-.779,4,.967,4h4.967C34.966,16.231,33.746,14,32,14Z"
                  fill="currentColor"
                ></path>
                <g
                  id="Path_69"
                  data-name="Path 69"
                  fill="none"
                  stroke-miterlimit="10"
                >
                  <path
                    d="M17.172,10.111a6,6,0,1,0,4.715,4.715A6.01,6.01,0,0,0,17.172,10.111Z"
                    stroke="none"
                  ></path>
                  <path
                    d="M 15.99852275848389 13.99979972839355 C 15.40029907226563 13.99979972839355 14.83786392211914 14.26465797424316 14.45541763305664 14.72645950317383 C 14.18128776550293 15.05748176574707 13.88667678833008 15.62165832519531 14.04035758972168 16.43178939819336 C 14.1787109375 17.16349411010742 14.83581733703613 17.82003402709961 15.56771087646484 17.958740234375 C 15.71307563781738 17.98624801635742 15.85765266418457 18.00020027160645 15.99740505218506 18.00020027160645 C 16.59555816650391 18.00020027160645 17.15798187255859 17.73542404174805 17.54046440124512 17.27376556396484 C 17.81481742858887 16.94261169433594 18.1097583770752 16.37818908691406 17.95689964294434 15.57052993774414 C 17.81802749633789 14.83748245239258 17.1605224609375 14.17996406555176 16.42829895019531 14.041259765625 C 16.28293609619141 14.01375389099121 16.13835906982422 13.99979972839355 15.99860572814941 13.99979972839355 L 15.99852275848389 13.99979972839355 M 15.99860000610352 9.999795913696289 C 16.38235282897949 9.999801635742188 16.77459716796875 10.03580474853516 17.17200469970703 10.11100006103516 C 19.52100563049316 10.55599975585938 21.44199371337891 12.47699928283691 21.88699340820313 14.82600021362305 C 22.61180877685547 18.65568542480469 19.69624137878418 22.00020408630371 15.99740028381348 22.00020408630371 C 15.61366271972656 22.00020408630371 15.22141265869141 21.96419525146484 14.82400512695313 21.88899993896484 C 12.47600555419922 21.44400024414063 10.55400466918945 19.52299880981445 10.11000442504883 17.17499923706055 C 9.383377075195313 13.34440803527832 12.29961967468262 9.999755859375 15.99860000610352 9.999795913696289 Z"
                    stroke="none"
                    fill="currentColor"
                  ></path>{" "}
                </g>
                <rect
                  id="Rectangle_26"
                  data-name="Rectangle 26"
                  width="8"
                  height="4"
                  rx="1.993"
                  transform="translate(26 14)"
                  fill="currentColor"
                ></rect>
                <rect
                  id="Rectangle_27"
                  data-name="Rectangle 27"
                  width="8"
                  height="4"
                  rx="1.993"
                  transform="translate(18 26) rotate(90)"
                  fill="currentColor"
                ></rect>
                <rect
                  id="Rectangle_28"
                  data-name="Rectangle 28"
                  width="8"
                  height="4"
                  rx="1.993"
                  transform="translate(18 -2) rotate(90)"
                  fill="currentColor"
                ></rect>
                <rect
                  id="Rectangle_29"
                  data-name="Rectangle 29"
                  width="8"
                  height="4"
                  rx="1.993"
                  transform="translate(-2 14)"
                  fill="currentColor"
                ></rect>
                <g id="Group_22" data-name="Group 22">
                  <rect
                    id="Rectangle_30"
                    data-name="Rectangle 30"
                    width="6.925"
                    height="3.766"
                    rx="1.883"
                    transform="translate(23.22 6.117) rotate(-45)"
                    fill="currentColor"
                  ></rect>
                </g>{" "}
                <g id="Group_23" data-name="Group 23">
                  <rect
                    id="Rectangle_31"
                    data-name="Rectangle 31"
                    width="3.766"
                    height="6.925"
                    rx="1.883"
                    transform="matrix(0.707, -0.707, 0.707, 0.707, 23.22, 25.883)"
                    fill="currentColor"
                  ></rect>
                </g>{" "}
                <g id="Group_24" data-name="Group 24">
                  <rect
                    id="Rectangle_32"
                    data-name="Rectangle 32"
                    width="3.766"
                    height="6.925"
                    rx="1.883"
                    transform="translate(1.22 3.883) rotate(-45)"
                    fill="currentColor"
                  ></rect>
                </g>{" "}
                <g id="Group_25" data-name="Group 25">
                  <rect
                    id="Rectangle_33"
                    data-name="Rectangle 33"
                    width="6.925"
                    height="3.766"
                    rx="1.883"
                    transform="translate(1.22 28.117) rotate(-45)"
                    fill="currentColor"
                  ></rect>
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    </>
  );
};

const ThemeBtn = () => { 
    const [mode,setMode] = useState(window.localStorage.getItem("theme-mode"));
    const changeMode = () => {
        let currMode = window.localStorage.getItem("theme-mode");
        if(currMode=="dark"){
          setMode("light")
          window.localStorage.setItem("theme-mode","light");
          const htmlCont = document.getElementsByTagName("html")[0];
          htmlCont.setAttribute("data-theme", "light");
        }else{
          setMode("dark")
          window.localStorage.setItem("theme-mode","dark");
          const htmlCont = document.getElementsByTagName("html")[0];
          htmlCont.setAttribute("data-theme", "dark");
        }
    }
    useEffect(()=>{
        if(!mode){
          window.localStorage.setItem("theme-mode","light");
          changeMode();
        }
        else if(mode=="light"){
          const htmlCont = document.getElementsByTagName("html")[0];
          htmlCont.setAttribute("data-theme", "light");
        }else{
          const htmlCont = document.getElementsByTagName("html")[0];
          htmlCont.setAttribute("data-theme", "dark");
        }
    },[])
  return <div>{mode == "dark" ? <LightBtn changeMode={changeMode}/> : <DarkBtn changeMode={changeMode}/>}</div>;
};

export default ThemeBtn;
