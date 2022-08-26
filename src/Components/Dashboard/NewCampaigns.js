import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Companylogo from "../Imgs/Companylogo.png";

export default function NewCampaigns(props) {
  return (
    <div className="">
      <div className=" px-3 py-5 min-w-sm bg-white rounded-t-lg">
        <div class="flex gap-4">
          <img className="rounded-md" src={Companylogo} alt="CArd Logo" />
          <div className="mr-auto">
            <h5 class="text-[15px]">{props.Company}</h5>
            <p class="text-xs text-gray-500">Company Type</p>
          </div>
          <MoreVertIcon />
        </div>

        <div class="inline-flex flex-col justify-between mt-10 ">
          <h5 className=" text-black text-2xl ">$2500</h5>
          <p class="text-xs  text-gray-500">Company Type</p>
        </div>
        <div>
          <p class="text-xs w-[207px] text-gray-500 overflow-hidden">{props.desc}</p>
        </div>
      </div>
      <div class="bg-gray-300 rounded-b-lg flex justify-end pr-4">
        <h5 className=" text-black text-xs px-3 py-2">Approval</h5>
        <button>
          <CancelIcon sx={{color:'red'}}/>
        </button>
        <button>
          <CheckCircleIcon />
        </button>
      </div>
    </div>
  );
}
