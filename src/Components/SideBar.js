import React, { useState } from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Logo from "../Logo.png";
import { Link, NavLink } from "react-router-dom";
export default function SideBar() {
  return (
    <>
      
        <div className=" flex flex-col  w-[350px] shadow-2xl shadow-gray-600  font-DmSans bg-[#7E7E7E] min-h-screen ">
          <div className="flex justify-center mt-7">
            <img src={Logo} />
          </div>

          <ul className=" my-2 text-xl  text-[#23232380] font-small mt-5 ">
            <div className="flex flex-col  ">
              <NavLink
                to="/Dashboard"
                className={({ isActive }) =>
                isActive
                    ? "flex  bg-white rounded-r-3xl mr-10 border-l-8   border-green-400"
                    : "flex rounded-r-3xl mr-10"
                }
              >
                <div className="py-5 px-2.5 ml-10">
                  <li
                    style={{
                      fontSize: 17,
                    }}
                  >
                    <DashboardIcon className="mr-2" /> Dashboard
                  </li>
                </div>
              </NavLink>

              <NavLink
                to="/Users"
                className={({ isActive }) =>
                  isActive
                    ? "flex  bg-white rounded-r-3xl mr-10 border-l-8   border-green-400"
                    : "flex rounded-r-3xl mr-10"
                }
              >
                
                <div className="py-5 px-2.5 ml-10">
                  <li
                    style={{
                      fontSize: 17,
                    }}
                  >
                    <PersonOutlineIcon className="mr-2" /> Users
                  </li>
                </div>
              </NavLink>

              <NavLink
                to="/Campaigns"
                className={({ isActive }) =>
                  isActive
                    ? "flex  bg-white rounded-r-3xl mr-10 border-l-8   border-green-400"
                    : "flex rounded-r-3xl mr-10"
                }
              >
                
                <div className="py-5 px-2.5 ml-10">
                  <li
                    style={{
                      fontSize: 17,
                    }}
                  >
                    <CampaignIcon className="mr-2" /> Campaigns
                  </li>
                </div>
              </NavLink>

              <NavLink
                to="/Funds"
                className={({ isActive }) =>
                  isActive
                    ? "flex  bg-white rounded-r-3xl mr-10 border-l-8   border-green-400"
                    : "flex rounded-r-3xl mr-10"
                }
              >
                
                <div className="py-5 px-2.5 ml-10">
                  <li
                    style={{
                      fontSize: 17,
                    }}
                  >
                    <TrendingUpIcon className="mr-2" /> Funds
                  </li>
                </div>
              </NavLink>
              <div className="ml-10">
                <div className="line "></div>
              </div>
              <NavLink
                to="/Settings"
                className={({ isActive }) =>
                  isActive
                    ? "flex  bg-white rounded-r-3xl mr-10 border-l-8   border-green-400"
                    : "flex rounded-r-3xl mr-10"
                }
              >
                
                <div className="py-5 px-2.5 ml-10">
                  <li
                    style={{
                      fontSize: 17,
                    }}
                  >
                    <SettingsIcon className="mr-2" />
                    Settings
                  </li>
                </div>
              </NavLink>

              <NavLink
                to="/Profile"
                className={({ isActive }) =>
                  isActive
                    ? "flex  bg-white rounded-r-3xl mr-10 border-l-8   border-green-400"
                    : "flex rounded-r-3xl mr-10"
                }
              >
                
                <div className="py-5 px-2.5 ml-10">
                  <li
                    style={{
                      fontSize: 17,
                    }}
                  >
                    <PersonIcon className="mr-2" />
                    Profile
                  </li>
                </div>
              </NavLink>
            </div>
          </ul>

          <ul className=" my-2 text-xl  text-[#23232380] font-small mt-auto  ">
            <div className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex  bg-white rounded-r-3xl mr-10 border-l-8   border-green-400"
                    : "flex rounded-r-3xl mr-10"
                }
              >
                <div className="py-5 px-2.5 ml-10">
                  <li
                    style={{
                      fontSize: 17,
                    }}
                  >
                    <LogoutIcon className="mr-2" />
                    Signout
                  </li>
                </div>
              </NavLink>
            </div>
          </ul>
        </div>
    
    </>
  );
}
