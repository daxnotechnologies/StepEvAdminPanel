import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EastIcon from "@mui/icons-material/East";
import person from "../Imgs/person.png";


export default function BeneficaryCard(props) {
  return (
    <>
      <div className=" px-3 py-5 min-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <div class="flex gap-4">
          <img className="rounded-full" src={person} alt="CArd Logo" />
          <div className="mr-auto">
            <h5 class="text-[15px]">{props.Beneficiry}</h5>
            <p class="text-xs text-gray-500">Company Type</p>
          </div>
          <MoreVertIcon />
        </div>

        <div class="flex  justify-between mt-10 ">
          <div>
          <h5 className=" text-black text-2xl ">$2500</h5>
          <p class="text-xs text-gray-500">Company Type</p>
          </div>
          <button class=" inline-flex  ">
          <div class="rounded-full items-center p-2 bg-black">
            <EastIcon sx={{ color: "gray", fontSize: 25 }} />
          </div>

        </button>
        </div>

       
      </div>
    </>
  );
}
