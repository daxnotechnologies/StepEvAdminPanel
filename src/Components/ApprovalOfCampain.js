import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import img from "./Imgs/img.png";
import person from "./Imgs/person2.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WarningIcon from "@mui/icons-material/Warning";
export default function ApprovalOfCampain() {
  const Userdata = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
  ];

  return (
    <>
      <div className="font-DmSans mx-10 ">
        {/* header */}
        <div className="flex justify-between border-b border-gray-500 py-5 sticky top-0 bg-[#7E7E7E]">
          <div className=" text-black text-2xl ">
            <h5>Campaigns Record</h5>
          </div>
          <div class=" flex pr-4 gap-2">
            <h5 className=" text-black text-xs px-3 py-2">Approval</h5>
            <button>
              <CancelIcon sx={{ color: "red" }} />
            </button>
            <button>
              <CheckCircleIcon />
            </button>
          </div>
        </div>

        {/* idea */}
        <div className="mt-10">
          {/* header */}
          <div className=" inline-flex items-center gap-1 bg-black py-1.5 pr-4 pl-2 rounded-lg ">
            <FiberManualRecordIcon sx={{ fontSize: 15, color: "green" }} />
            <h5 className=" text-white text-xl ">Idea</h5>
          </div>

          {/* title */}
          <div className="my-4">
            <h5 className=" text-black text-xl ">Title</h5>
            <p className=" text-gray-600 text-md ">Lorem</p>
          </div>

          {/* Problem Statement */}
          <div className="my-4">
            <h5 className=" text-black text-xl ">Problem Statement</h5>
            <p className=" text-gray-600 text-md  w-full">
              orem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet mattis nulla. Nunc tempor, augue eu eleifend
              mattis, nibh nisi rhoncus nibh, ut vehicula velit lorem a nisi. In
              finibus, enim ac varius convallis, neque velit egestas justo, at
              elementum turpis libero in est. Nam arcu quam, efficitur
            </p>
          </div>

          {/* Impact Statement */}
          <div className="my-4">
            <h5 className=" text-black text-xl ">Impact Statement </h5>
            <p className=" text-gray-600 text-md  w-full">
              orem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet mattis nulla. Nunc tempor, augue eu eleifend
              mattis, nibh nisi rhoncus nibh, ut vehicula velit lorem a nisi. In
              finibus, enim ac varius convallis, neque velit egestas justo, at
              elementum turpis libero in est. Nam arcu quam, efficitur
            </p>
          </div>

          {/* Benchmarking */}
          <div className="my-4">
            <h5 className=" text-black text-xl "> Benchmarking </h5>
            <p className=" text-gray-600 text-md  w-full">
              orem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet mattis nulla. Nunc tempor, augue eu eleifend
              mattis, nibh nisi rhoncus nibh,
            </p>
          </div>

          {/*Category  */}
          <div className="my-4">
            <h5 className=" text-black text-xl "> Category </h5>
            <p className=" text-gray-600 text-md  ">orem ipsum dolor si</p>
          </div>
          {/*Location  */}
          <div className="my-4">
            <h5 className=" text-black text-xl "> Location </h5>
            <p className=" text-gray-600 text-md  ">orem ipsum dolor si</p>
          </div>

          {/* Budget Needed */}

          <div className="my-4">
            <h5 className=" text-black text-xl "> Location </h5>
            <p className=" text-[#13B887] text-md  ">$15000</p>
          </div>
        </div>

        {/* Team */}
        <div className="mt-10">
          {/* header */}
          <div className=" inline-flex items-center gap-1 bg-black py-1.5 pr-4 pl-2 rounded-lg ">
            <FiberManualRecordIcon sx={{ fontSize: 15, color: "green" }} />
            <h5 className=" text-white text-xl ">Team</h5>
          </div>

          {/* title */}
          <div className="my-4">
            <h5 className=" text-black text-xl ">Skills Required</h5>
            <p className=" text-gray-600 text-md ">Lorem</p>
          </div>

          {/* Any Constraint on location */}
          <div className="my-4">
            <h5 className=" text-black text-xl ">Any Constraint on location</h5>
            <p className=" text-gray-600 text-md w-full">
              orem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet mattis nulla. Nunc tempor, augue eu eleifend
              mattis, nibh nisi rhoncus
            </p>
          </div>
        </div>

        {/* Prototyping */}
        <div className="mt-10">
          {/* header */}
          <div className=" inline-flex items-center gap-1 bg-black py-1.5 pr-4 pl-2 rounded-lg ">
            <FiberManualRecordIcon sx={{ fontSize: 15, color: "green" }} />
            <h5 className=" text-white text-xl ">Prototyping</h5>
          </div>

          {/* Description */}
          <div className="my-4">
            <h5 className=" text-black text-xl ">Description</h5>
            <p className=" text-gray-600 text-md ">
              orem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet mattis nulla. Nunc tempor, augue eu eleifend
              mattis, nibh nisi rhoncus{" "}
            </p>
          </div>
          {/* image */}
          <div className="my-4">
            <img className="w-[336px] h-[236px]" src={img} alt="Description " />
          </div>
        </div>

        {/*Pitch Deck  */}
        <div className="mt-10">
          {/* header */}
          <div className=" inline-flex items-center gap-1 bg-black py-1.5 pr-4 pl-2 rounded-lg ">
            <FiberManualRecordIcon sx={{ fontSize: 15, color: "green" }} />
            <h5 className=" text-white text-xl ">Pitch Deck</h5>
          </div>

          {/* Problem Statement */}
          <div className="my-4">
            <h5 className=" text-black text-xl ">Problem Statement</h5>
            <p className=" text-gray-600 text-md ">
              orem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet mattis nulla. Nunc tempor, augue eu eleifend
              mattis, nibh nisi rhoncus
            </p>
          </div>

          {/* Solution */}
          <div className="my-4">
            <h5 className=" text-black text-xl ">Solution</h5>
            <p className=" text-gray-600 text-md w-full">
              orem ipsum sectetur adipiscing elit. Pellentesque sit amet mattis
              nulla. Nunc tempor, augue eunsectetur adipiscing elit.
              Pellentesque sit amet mattis nulla. Nunc tempor, augue eu
              elsectetur adipiscing elit. Pellentesque sit amet mattis nulla.
              Nunc tempor, augue eus
            </p>
          </div>

          {/* image */}
          <div className="my-4">
            <img className="w-[336px] h-[236px]" src={img} alt="Description " />
          </div>
        </div>

        {/* Team Members */}
        <div className="mt-10">
          {/* header */}
          <div className=" inline-flex items-center gap-1 bg-black py-1.5 pr-4 pl-2 rounded-lg ">
            <FiberManualRecordIcon sx={{ fontSize: 15, color: "green" }} />
            <h5 className=" text-white text-xl ">Team Members</h5>
          </div>

          {/* table */}

          <div class="mt-5">
            <table class="w-full text-md text-left ">
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
                      <WarningIcon sx={{ color: "yellow" }} /> 3 Warnings
                    </td>
                    <td class="py-4 px-6">
                      <button
                        id="dropdownMenuIconButton"
                        data-dropdown-toggle="dropdownTop"
                        data-dropdown-placement="top"
                        class=""
                        type="button"
                      >
                        <MoreVertIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/*  Fund Raising*/}
        <div className="mt-10">
          {/* header */}
          <div className=" inline-flex items-center gap-1 bg-black py-1.5 pr-4 pl-2 rounded-lg ">
            <FiberManualRecordIcon sx={{ fontSize: 15, color: "green" }} />
            <h5 className=" text-white text-xl ">Fund Raising</h5>
          </div>

          {/* Description */}
          <div className="my-4">
            <h5 className=" text-black text-xl ">Description</h5>
            <p className=" text-gray-600 text-md ">
              orem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet mattis nulla. Nunc tempor, augue eu eleifend
              mattis, nibh nisi rhoncus
            </p>
          </div>
          {/* image */}
          <div className="my-4">
            <img className="w-[336px] h-[236px]" src={img} alt="Description " />
          </div>
        </div>
        {/* Account Details */}
        <div className="mt-10">
          {/* header */}
          <div className=" inline-flex items-center gap-1 bg-black py-1.5 pr-4 pl-2 rounded-lg ">
            <FiberManualRecordIcon sx={{ fontSize: 15, color: "green" }} />
            <h5 className=" text-white text-xl ">Account Details</h5>
          </div>

          {/* table */}

          <div class="mt-5">
            <table class="text-md text-left ">
              <thead class="text-md text-black uppercase border-b border-gray-500">
                <tr>
                  <th scope="col" class="py-3 px-4">
                    First Name
                  </th>
                  <th scope="col" class="py-3 px-4">
                    Last Name
                  </th>
                  <th scope="col" class="py-3 px-4">
                    Country
                  </th>
                  <th scope="col" class="py-3 px-4">
                    City
                  </th>
                  <th scope="col" class="py-3 px-4">
                    Address
                  </th>
                  <th scope="col" class="py-3 px-4">
                    Postal code
                  </th>
                  <th scope="col" class="py-3 px-4">
                    Account no
                  </th>
                  <th scope="col" class="py-3 px-4">
                    CVC
                  </th>
                  <th scope="col" class="py-3 px-4">
                    Exp.Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="  text-gray-600 ">
                  <th scope="row" class="py-2.5 px-4">
                    Beyond
                  </th>
                  <td class="py-2.5 px-4">ItSolutions</td>
                  <td class="py-2.5 px-4">USA</td>
                  <td class="py-2.5 px-4">Washington</td>
                  <td class="py-2.5 px-4">Street Abc, Dummy Road</td>
                  <td class="py-2.5 px-4">34050</td>
                  <td class="py-2.5 px-4">34252525252</td>
                  <td class="py-2.5 px-4">234</td>
                  <td class="py-2.5 px-4">24/5/22</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Fund Details */}
        <div className="mt-10">
          {/* header */}
          <div className=" inline-flex items-center gap-1 bg-black py-1.5 pr-4 pl-2 rounded-lg ">
            <FiberManualRecordIcon sx={{ fontSize: 15, color: "green" }} />
            <h5 className=" text-white text-xl ">Fund Details</h5>
          </div>

          {/*  Details */}
          <div>
            <div className="my-4 flex items-center gap-3">
              <h5 className=" text-black text-lg ">Min investment :</h5>
              <p className=" text-gray-600 text-md pt-1.5 ">$250</p>
            </div>
            <div className="my-4 flex items-center gap-3">
              <h5 className=" text-black text-lg ">Max Investment : </h5>
              <p className=" text-gray-600 text-md pt-1.5 ">$25000</p>
            </div>
            <div className="my-4 flex items-center gap-3">
              <h5 className=" text-black text-lg ">Price Per Share :</h5>
              <p className=" text-gray-600 text-md pt-1.5 ">$25</p>
            </div>
            <div className="my-4 flex items-center gap-3">
              <h5 className=" text-black text-lg ">Valuation :</h5>
              <p className=" text-gray-600 text-md pt-1.5 ">$25</p>
            </div>
            <div className="my-4 flex items-center gap-3">
              <h5 className=" text-black text-lg ">Offering Max :</h5>
              <p className=" text-gray-600 text-md pt-1.5 ">$25</p>
            </div>
            <div className="my-4 flex items-center gap-3">
              <h5 className=" text-black text-lg ">Equity Type :</h5>
              <p className=" text-gray-600 text-md pt-1.5 ">Dummy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
