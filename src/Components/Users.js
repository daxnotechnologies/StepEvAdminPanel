import React, { useState, useRef, useEffect } from "react";

import person from "./Imgs/person2.png";
import Dropdown from "./Users/Dropdown";
export default function Users() {
  const Userdata = [
    {
      id: 1,
      Name: "   Shaheer Ahmad",
      phone: "0434424543",
      email: "Shaheer@gmail.com",
    },
    {
      id: 2,
    },
    {
      id: 2,
    },
    {
      id: 2,
    },
    {
      id: 2,
    },
    {
      id: 2,
    },
    {
      id: 2,
    },
    {
      id: 2,
    },
    {
      id: 2,
    },
    {
      id: 2,
    },
    {
      id: 2,
    },
  ];
  const ref = useRef();

  return (
    <>
      <div className="font-DmSans ml-10 mr-[396px] " ref={ref}>
        <div>
          <h5 className=" text-black text-2xl mb-5">Users</h5>
          <form>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
                class="block p-4 pl-10 w-full text-sm text-black bg-gray-50 rounded-lg outline-none"
                placeholder="Search user by name, email ....."
                required=""
              />
            </div>
          </form>
        </div>

        {/* User table */}

        <div class="mt-5">
          <table class="w-full text-md text-left ">
            <thead class="text-md text-black uppercase border-b border-gray-500">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Phone
                </th>
                <th scope="col" class="py-3 px-6">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {Userdata.map((val, id) => (
                <tr key={id} class="  text-gray-600 ">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-black whitespace-nowrap flex items-center gap-5 text-md"
                  >
                    <img src={person} alt="Profile" />
                    Shaheer Ahmad
                  </th>
                  <td class="py-4 px-6">0434424543</td>
                  <td class="py-4 px-6">Shaheer@gmail.com</td>
                  <td class="py-4 px-6">
                   
                    <Dropdown />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
