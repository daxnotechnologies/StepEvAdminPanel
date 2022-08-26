import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Header() {
  const Today = new Date();
  const day = Today.getDate();
  const years = Today.getFullYear();
  const month = Today.toLocaleString("en-us", { month: "short" });

  

  const [hover,sethover] =useState(false)

  return (
    <>
      <nav class="rounded font-DmSans pb-8 border-b-[1px] border-gray-500 m-10" >
        <div class=" flex items-center justify-end">
        <span  className={hover?" relative":'hidden'}><label className=" text-gray-200 text-sm absolute -top-10 left-5 w-[100px]"> {month} {day} {years}</label></span>
          <div onMouseOver={()=>sethover(true)} onMouseLeave={()=>sethover(false)} className="py-2 pr-4 pl-3  text-black text-xl flex items-center gap-2">
            <CalendarMonthIcon />
            {month} {day}
        
          </div>

          <ul class="mr-5  flex  flex-row space-x-8 text-sm font-medium border-l-[1px] border-gray-500 ">
            <li className="ml-2">
              <a
                href="/Dashboard"
                class="block py-2 pr-4 pl-3 text-black text-xl"
                aria-current="page"
              >
                Hi! Admin
              </a>
            </li>
          </ul>
          <ul class="mr-auto text-sm font-medium border-l-[1px] border-gray-500 ">
            <li className="">
              <div class="relative ">
                <div class="flex absolute inset-y-0 left-0 items-center pl-8 ">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block outline-none p-3 pl-10 ml-5 w-[350px] text-sm text-gray-900 placeholder:text-gray-500 bg-white rounded-lg"
                  placeholder="Search campaigns, users...."
                />
              </div>
            </li>
          </ul>
          <ul class="flex flex-row justify-end space-x-8 text-sm font-medium  ">
            <li className="flex items-center ">
              <div className="border rounded-full border-dashed border-gray-500 p-1">
                <NotificationsNoneIcon sx={{ fontSize: 40 }} />
              </div>
            </li>
            <li className="flex items-center ">
              <img
                class="w-[45px] h-[45px] rounded-full"
                src="http://source.unsplash.com/100x100/?library"
                alt="Profile "
              />
              <KeyboardArrowDownIcon sx={{ fontSize: 30 }} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
