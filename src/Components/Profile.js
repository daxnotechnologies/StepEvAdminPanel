import React from "react";

export default function Profile() {
  const AdminData = {
    id: 1,
    firstName: "Phineas",
    lastName: "Franciottoi",
    email: "pfranciottoi0@hostgator.com",
    password: "y0pWrGzmDz",
  };

  return (
    <>
      <div className="font-DmSans mx-10">
        <div className="flex justify-between">
          <div className=" text-black text-2xl ">
            <h5>Campaigns</h5>
          </div>
          <a href="/Settings" class="text-white bg-black  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            Edit
          </a>
        </div>
        <div class="flex justify-center  p-10 m-auto">
          <img
            class="object-cover w-[250px] h-[250px] rounded-t-lg  rounded-none rounded-l-lg"
            src="http://source.unsplash.com/250x250/?profile"
            alt=""
          />
          <div class="flex flex-col justify-evenly p-2 leading-normal ml-10">
            <h5 class="mb-2 text-xl font-bold tracking-tight  text-black">
              FirstName: <span className="pl-2">{AdminData.firstName}</span>{" "}
            </h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
              LastName: <span className="pl-2">{AdminData.lastName}</span>
            </h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
              Email: <span className="pl-2">{AdminData.email}</span>
            </h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
              Password: <span className="pl-2">{AdminData.password}</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
