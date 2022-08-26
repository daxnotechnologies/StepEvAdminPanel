import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import CampaignsRecord from "./Dashboard/CampaignsRecord";
import BeneficaryCard from "./Dashboard/BeneficaryCard";
import NewCampaigns from "./Dashboard/NewCampaigns";
import FundRaising from "./Dashboard/FundRaising";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
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
];
const BeneficiryData = [
  {
    id: 1,
    Beneficiry: "Beneficiry Name",
    subtitle: "Company Name",
    Price: "2500",
  },
  {
    id: 2,
    Beneficiry: "Beneficiry Name",
    subtitle: "Company Name",
    Price: "2500",
  },
];
const NewCampaignsData = [
  {
    id: 1,
    Company: "Company Name ",
    subtitle: "Company Name",
    desc: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.#",
  },
  {
    id: 2,
    Company: "Company Name ",
    subtitle: "Company Name",
    desc: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.#",
  },
];
const FundRaisingData = [
  {
    id: 1,
    Company: "Company Name ",
    subtitle: "type",
    price: "$54.647",
    percent: "+0.15%",
  },
  {
    id: 2,
    Company: "Company Name ",
    subtitle: "type",
    price: "$54.647",
    percent: "+0.15%",
  },
  {
    id: 3,
    Company: "Company Name ",
    subtitle: "type",
    price: "$54.647",
    percent: "+0.15%",
  },
  {
    id: 4,
    Company: "Company Name ",
    subtitle: "type",
    price: "$54.647",
    percent: "+0.15%",
  },
  {
    id: 5,
    Company: "Company Name ",
    subtitle: "type",
    price: "$54.647",
    percent: "+0.15%",
  },
  {
    id: 6,
    Company: "Company Name ",
    subtitle: "type",
    price: "$54.647",
    percent: "+0.15%",
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="mx-10">
        <div className="font-DmSans">
          {/* header */}
          <div className="flex justify-between">
            <div className=" text-black text-2xl ">
              <h5>Campaigns Record</h5>
            </div>
            <div className="flex gap-3">
              <h5> Most Funded</h5>
              <FilterListIcon />
            </div>
          </div>

          {/* Campaigns Record */}

          <div class="grid grid-cols-3 gap-5 mt-5 ">
            {CardData.map((val, id) => {
              return (
                <CampaignsRecord
                  key={id}
                  title={val.title}
                  subtitle={val.subtitle}
                  Price={val.Price}
                  down={val.down}
                  up={val.up}
                  profit={val.profit}
                />
              );
            })}
          </div>

          {/* bottom Cards */}
          <div className="grid grid-cols-2 ">
            <div className="my-5">
              {/* Release Funds */}
              <div class="flex flex-col ">
                <div className="flex justify-between mb-5">
                  <div className=" text-black text-2xl ">
                    <h5>Release Funds</h5>
                  </div>
                  <div className="">
                    <h5>View more</h5>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {BeneficiryData.map((val, id) => {
                    return (
                      <BeneficaryCard
                        key={id}
                        Beneficiry={val.Beneficiry}
                        subtitle={val.subtitle}
                        Price={val.Price}
                      />
                    );
                  })}
                </div>
              </div>

              {/* New Campaigns */}
              <div class="flex flex-col">
                <div className="flex justify-between  my-5">
                  <div className=" text-black text-2xl ">
                    <h5>New Campaigns</h5>
                  </div>
                  <div className="">
                    <h5>View more</h5>
                  </div>
                </div>
                <div className="grid grid-cols-2  gap-5">
                  {NewCampaignsData.map((val, id) => {
                    return (
                      <NewCampaigns
                        key={id}
                        Company={val.Company}
                        subtitle={val.subtitle}
                        desc={val.desc}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Fund Raising */}
            <div className="my-5 ml-5">
              <div className="flex justify-between">
                <div className=" text-black text-2xl ">
                  <h5>Fund Raising </h5>
                </div>
                <div className="">
                  <h5>View more</h5>
                </div>
              </div>
              {FundRaisingData.map((val, id) => {
                return (
                  <FundRaising
                    key={id}
                    Company={val.Company}
                    subtitle={val.subtitle}
                    price={val.price}
                    percent={val.percent}
                  />
                );
              })}
              <div class="p-4  min-w-sm flex justify-center  ">
                <button class="flow-root text-center">
                  <ExpandLessIcon/>
                  <h5 className=" text-black text-xl ">View More</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
