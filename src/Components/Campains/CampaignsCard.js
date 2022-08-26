import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CardLogo from "../Imgs/Cardlogo.png";
export default function CampaignsCard(props) {
  return (
    < >
      <div className=" p-6 min-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <div class="flex gap-4">
          <img
            className="border border-dashed border-blue-500 rounded-md p-1 w-[50px]"
            src={CardLogo}
            alt="CArd Logo"
          />
          <div className="mr-auto">
            <h5 class="text-[18px]">Company Type</h5>
            <p class="text-sm text-gray-500">Company Type</p>
          </div>
          <MoreVertIcon />
        </div>

        <div className="flex justify-between mt-5">
          <div className=" text-black text-2xl font-bold ">
            <h5>$12,354</h5>
          </div>
          <svg
            width="74"
            height="38"
            viewBox="0 0 74 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 36.6155C1 36.6155 3.74105 26.3623 9 25.6155C13.8792 24.9226 14.6347 33.4002 19.5 32.6155C24.7933 31.7617 21.8055 19.7868 27 21.1155C29.5451 21.7664 28.8333 32.6155 32 25.6155C35.1667 18.6155 34.7464 -4.28136 42.5 2.11547C47.1765 5.97363 45.5 11.2821 46.5 17.1155C47.5 22.9488 51.3935 19.5185 54.5 21.1155C57.8404 22.8327 63 25.6155 63 25.6155L72.5 30.1155"
              stroke="#3300FF"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="flex justify-between mt-5">
          <div className=" text-black text-md flex items-center gap-1">
            <ArrowUpwardIcon sx={{ fontSize: 20, color: "red" }} />
            <h5>$54.647</h5>
          </div>
          <div className=" text-black text-md  flex items-center gap-1">
            <ArrowDownwardIcon sx={{ fontSize: 20, color: "blue" }} />
            <h5>$54.647</h5>
          </div>
          <div className=" text-black text-md flex items-center gap-1 mr-5">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6085 7.23404C12.6979 6.61915 13.4468 5.38936 13.5149 3.97872V3.94255C13.5149 3.90638 13.5149 3.87021 13.5149 3.83404C13.5149 1.7 11.8809 0 9.90638 0C8.57872 0 7.35319 0.795745 6.70638 2.0617C6.43404 2.60426 6.29787 3.21915 6.29787 3.83404C6.29787 5.28085 7.08085 6.58298 8.20426 7.23404C7.35319 7.48723 6.57021 7.95745 5.88936 8.60851C5.34468 8.35532 4.76596 8.21064 4.15319 8.21064C1.87234 8.17447 0 10.1638 0 12.5872C0 15.0106 1.87234 17 4.15319 17C5.99149 17 7.62553 15.6617 8.13617 13.817H16V13.4553C16 10.5255 14.1617 8.02979 11.6085 7.23404ZM9.90638 0.723404C11.234 0.723404 12.3915 1.7 12.7319 3.00213L11.983 2.20638C11.6085 1.80851 11.1319 1.59149 10.6213 1.59149C10.1106 1.59149 9.63404 1.80851 9.25957 2.20638C8.78298 2.71277 7.96596 2.71277 7.48936 2.20638L7.45532 2.17021C7.96596 1.26596 8.88511 0.723404 9.90638 0.723404ZM6.97872 3.83404C6.97872 3.47234 7.04681 3.14681 7.14894 2.82128C7.18298 2.85745 7.21702 2.85745 7.25106 2.89362C7.28511 2.92979 7.31915 2.96596 7.35319 2.96596C7.42128 3.00213 7.48936 3.0383 7.55745 3.07447C7.59149 3.07447 7.62553 3.11064 7.65957 3.11064C7.7617 3.14681 7.86383 3.18298 7.93191 3.18298C7.96596 3.18298 7.96596 3.18298 8 3.18298C8.10213 3.21915 8.2383 3.21915 8.37447 3.21915C8.61277 3.21915 8.85106 3.18298 9.08936 3.07447C9.19149 3.11064 9.29362 3.07447 9.3617 3.00213C9.39574 3.00213 9.39574 2.96596 9.42979 2.96596C9.53191 2.89362 9.63404 2.82128 9.73617 2.71277C10.2128 2.20638 11.0298 2.20638 11.5064 2.71277L12.834 4.1234C12.6979 5.71489 11.4723 6.94468 9.94043 6.98085H9.90638H9.87234C8.27234 6.94468 6.97872 5.53404 6.97872 3.83404ZM4.15319 16.2766C2.24681 16.2766 0.680851 14.6128 0.680851 12.5872C0.680851 10.5617 2.24681 8.89787 4.15319 8.89787C4.73191 8.89787 5.2766 9.04255 5.78723 9.33191C6.91064 9.98298 7.62553 11.2128 7.62553 12.5872C7.62553 12.8404 7.59149 13.1298 7.55745 13.383C7.18298 15.0468 5.78723 16.2766 4.15319 16.2766ZM8.27234 13.0936C8.30638 12.9128 8.30638 12.7681 8.30638 12.5872C8.30638 12.4064 8.30638 12.2617 8.27234 12.0809C8.27234 12.0447 8.27234 12.0447 8.27234 12.0085C8.2383 11.8638 8.2383 11.683 8.20426 11.5383C8.20426 11.5021 8.20426 11.5021 8.17021 11.466C8.13617 11.3213 8.10213 11.1766 8.03404 11.0319C8.03404 10.9957 8 10.9957 8 10.9596C7.93191 10.8149 7.89787 10.6702 7.82979 10.5255C7.82979 10.5255 7.82979 10.4894 7.79574 10.4894C7.72766 10.3447 7.65957 10.2 7.55745 10.0915C7.55745 10.0915 7.55745 10.0915 7.55745 10.0553C7.45532 9.91064 7.38723 9.80213 7.28511 9.69362L7.25106 9.65745C7.14894 9.54894 7.04681 9.44042 6.94468 9.33191C6.91064 9.29574 6.91064 9.29574 6.8766 9.25957C6.77447 9.15106 6.6383 9.07872 6.53617 8.97021C6.53617 8.97021 6.53617 8.97021 6.50213 8.93404C7.45532 8.1383 8.61277 7.66809 9.8383 7.66809H9.87234H9.90638C12.766 7.70426 15.0809 10.0915 15.2511 13.0574H8.27234V13.0936Z"
                fill="#13B887"
              />
              <path
                d="M5.11364 10.5592H4.84091V10H4.15909V10.5592H3.88636C3.40909 10.5592 3 10.9539 3 11.4145V11.9737C3 12.4342 3.40909 12.8289 3.88636 12.8289H5.14773C5.25 12.8289 5.35227 12.9276 5.35227 13.0263V13.5855C5.35227 13.6842 5.25 13.7829 5.14773 13.7829H3.88636C3.78409 13.7829 3.68182 13.6842 3.68182 13.5855V13.2895H3V13.5855C3 14.0461 3.40909 14.4408 3.88636 14.4408H4.15909V15H4.84091V14.4408H5.11364C5.59091 14.4408 6 14.0461 6 13.5855V13.0263C6 12.5658 5.59091 12.1711 5.11364 12.1711H3.85227C3.75 12.1711 3.64773 12.0724 3.64773 11.9737V11.4145C3.64773 11.3158 3.75 11.2171 3.85227 11.2171H5.11364C5.21591 11.2171 5.31818 11.3158 5.31818 11.4145V11.7105H6V11.4145C6 10.9211 5.625 10.5592 5.11364 10.5592Z"
                fill="#13B887"
              />
            </svg>

            <h5>$150</h5>
          </div>
        </div>
      </div>
    </>
  );
}
