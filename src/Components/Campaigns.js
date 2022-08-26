import React from "react";
import CampaignsCard from "./Campains/CampaignsCard";
import FilterListIcon from "@mui/icons-material/FilterList";
export default function Campaigns() {
  const CardData = [
    {
      id: 1,
      title: "Company Name",
      subtitle: "Company Name",
      Price: "12,354",
      down: "54.647",
      up: "54.647",
      profit: 150,
    },
    {
      id: 2,
      title: "Company Name",
      subtitle: "Company Name",
      Price: "12,354",
      down: "54.647",
      up: "54.647",
      profit: 150,
    },
    {
      id: 3,
      title: "Company Name",
      subtitle: "Company Name",
      Price: "12,354",
      down: "54.647",
      up: "54.647",
      profit: 150,
    },
    {
      id: 4,
    },
    {
      id: 4,
    },
    {
      id: 4,
    },
    {
      id: 4,
    },
    {
      id: 4,
    },
    {
      id: 4,
    },
  ];

  return (
    <>
      <div className="font-DmSans mx-10 mb-10">
        <div className="flex justify-between">
          <div className=" text-black text-2xl ">
            <h5>Campaigns</h5>
          </div>
          <div className="flex gap-3">
            <h5> Most Funded</h5>
            <FilterListIcon />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {CardData.map((val, id) => {
            return <CampaignsCard/>;
          })}
        </div>
      </div>
    </>
  );
}
