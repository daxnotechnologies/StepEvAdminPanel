import React from "react";
import TextField from "@mui/material/TextField";
export default function Login() {
  return (
    <div className="h-screen flex flex-col justify-center ">
      {/* header */}

      <div class="flex flex-col items-center font-DmSans mt-auto">
        <div class="relative">
          <svg
            className="aboslute inset-0"
            width="79"
            height="79"
            viewBox="0 0 79 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M73.0305 37.9698C73.0305 37.9698 75.5158 34.3471 71.891 31.8639C68.2705 29.3808 65.7874 33.0034 65.7874 33.0034L54.2585 49.8169C53.8633 49.1539 53.4264 48.4996 52.9434 47.8541L68.9446 24.5177C68.9446 24.5177 71.4277 20.8972 67.8051 18.414C64.1846 15.9287 61.7014 19.5513 61.7014 19.5513L46.6488 41.5002C46.0889 41.0413 45.5181 40.5847 44.9253 40.1346L62.3733 14.6882C62.3733 14.6882 64.8564 11.0677 61.236 8.58456C57.6155 6.0992 55.1324 9.72186 55.1324 9.72186L37.6821 35.166C37.041 34.7709 36.4065 34.4305 35.772 34.0727L52.0784 10.2905C52.0784 10.2905 54.5615 6.67004 50.9389 4.18687C47.3184 1.70152 44.8352 5.32417 44.8352 5.32417L27.5914 30.4698L26.2104 32.4853L24.9699 34.2966C35.8335 41.7461 36.8676 55.7669 30.6608 64.8191C29.4181 66.6304 27.609 65.39 27.609 65.39C35.0585 54.5242 32.7817 42.3148 21.9159 34.8653L25.1258 18.8334C25.1258 18.8334 26.3224 14.6069 22.0982 13.4104C17.8739 12.2138 16.6773 16.438 16.6773 16.438L12.9778 27.4246C11.5112 31.7805 9.95018 36.1211 7.88417 40.2246C2.0506 51.8171 5.53494 66.2265 16.5368 73.7704C28.5355 81.9971 44.9362 78.9409 53.1652 66.9422C53.5999 66.3055 53.9643 65.6842 54.3112 65.0628L54.4078 65.1309L73.0305 37.9698Z"
              fill="#D99E82"
            />
            <path
              d="M4.3911 15.2766H0C0.00464871 11.2264 1.61564 7.34346 4.47955 4.47954C7.34347 1.61563 11.2264 0.00463772 15.2766 -1.04904e-05V4.39108C12.3907 4.39457 9.62392 5.54256 7.58324 7.58323C5.54257 9.62391 4.39458 12.3907 4.3911 15.2766"
              fill="#77B255"
            />
            <path
              d="M8.68998 26.2544H4.29889C4.29889 14.1481 14.1481 4.29892 26.2544 4.29892V8.69001C16.5698 8.69001 8.68998 16.5698 8.68998 26.2544Z"
              fill="#77B255"
            />
            <path
              d="M63.5787 78.9475V74.5564C70.1653 74.5564 74.5564 70.1653 74.5564 63.5787H78.9475C78.9475 72.3609 72.3609 78.9475 63.5787 78.9475Z"
              fill="#77B255"
            />
            <path
              d="M52.601 74.6486V70.2575C61.3831 70.2575 70.2575 61.3831 70.2575 52.6009H74.6486C74.6486 65.7742 65.7742 74.6486 52.601 74.6486Z"
              fill="#77B255"
            />
          </svg>
        </div>
        <h5 class="text-5xl font-bold  text-gray-900 pt-5">Welcome Admin!</h5>
        <p className="text-2xl font-normal text-gray-500 pt-2">
          Please login to continue
        </p>
      </div>

      {/* Form */}

      <div class="flex justify-center font-DmSans ">
        <div class="p-4 w-full max-w-xl ">
          <form class="space-y-6" action="#">
            <div className="rounded-md">
              <TextField
                label="Email"
                id="filled-size-small"
                variant="filled"
                size="small"
                fullWidth
                InputProps={{ disableUnderline: true }}
                className="inputRounded"
              />
            </div>
            <div>
              <TextField
                label="Password"
                id="filled-size-small"
                variant="filled"
                size="large"
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-[#13B887] hover:bg-[#34ad89] focus:ring-4 focus:outline-none focus:ring-[#6eb19d] font-normal rounded-lg py-4 text-2xl text-center"
            >
              Login
            </button>
            <div class=" text-center text-lg font-medium text-gray-500">
              <a href="#" class="text-black hover:underline">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* footer */}
      <div class="flex justify-center font-DmSans mt-auto mb-10">
        <h5 class="text-lg font-normal text-gray-500 ">
          Copyright StepEV {new Date().getFullYear()}
        </h5>
      </div>

      <div className="relative sm:hidden lg:block ">
        <svg
          className="absolute bottom-0 right-0 "
          width="383"
          height="350"
          viewBox="0 0 383 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="265.327"
            cy="265.827"
            r="254.888"
            transform="rotate(-50.5911 265.327 265.827)"
            stroke="url(#paint0_linear_13_39)"
            stroke-width="20"
          />
          <defs>
            <linearGradient
              id="paint0_linear_13_39"
              x1="265.327"
              y1="0.938141"
              x2="265.327"
              y2="374.95"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#13B887" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute bottom-0 right-0"
          width="306"
          height="267"
          viewBox="0 0 306 267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="189.544"
            cy="189.455"
            r="179.442"
            transform="rotate(-50.5911 189.544 189.455)"
            stroke="url(#paint0_linear_13_40)"
            stroke-width="20"
          />
          <defs>
            <linearGradient
              id="paint0_linear_13_40"
              x1="189.544"
              y1="0.0132751"
              x2="189.544"
              y2="267.498"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#13B887" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
