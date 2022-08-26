import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Companylogo from "../Imgs/Companylogo.png";
export default function FundRaising() {
  return (
    <>
      
            <ul role="list" class="">
              <li class="py-3 ">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-11 h-11 rounded-full"
                      src={Companylogo}
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h5 class="text-lg">Company Name</h5>
                    <p class="text-sm text-gray-600 ">Type </p>
                  </div>
                  <div className="pr-5">
                    <svg
                      width="52"
                      height="20"
                      viewBox="0 0 52 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 19C1.07407 15.747 2.42222 8.63374 7.22222 6.20482C13.2222 3.16868 18.1111 12.2771 20.5556 14.6627C23 17.0482 32.3333 19.2169 32.3333 9.89155C32.3333 0.56624 41.2222 0.78312 44.5556 2.95179C47.8889 5.12047 48.5556 4.25301 51 1"
                        stroke="#3300FF"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div className=" flex gap-1">
                    <ArrowUpwardIcon />
                    <div>
                      <h5 class=" text-base font-semibold text-black">
                        $54.647
                      </h5>
                      <p class=" text-sm text-end text-red-500">+0.15%</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
    </>
  );
}
