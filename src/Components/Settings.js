import React from "react";

export default function Settings() {
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
        <div className=" text-black text-2xl ">
          <h5>Settings</h5>
        </div>

        <div className=" items-center justify-center flex mt-5">
          <div className=" p-4 w-full min-w-lg ">
              
                <form className="space-y-6" action="#">
                  <div>
                    <input
                      type="text"
                      className="bg-white outline-none border border-black focus:ring-1 focus:ring-black placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                      placeholder="First Name"
                      value={AdminData.firstName}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-white outline-none border border-black focus:ring-1 focus:ring-black placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                      placeholder="Last Name"
                      value={AdminData.lastName}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-white  outline-none border border-black focus:ring-1 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                      placeholder="Email "
                      value={AdminData.email}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-white  outline-none border border-black focus:ring-1 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                      placeholder="Code Name "
                      value={AdminData.password}
                    />
                  </div>
                  <div>
                    <input
                      type="file"
                      className="bg-white  outline-none border border-black focus:ring-1 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                      placeholder="Profile Picture "
                    />
                  </div>

                  <div className="flex justify-around">
                    <button
                      type="button"
                      class="text-white mt-5 w-full bg-green-500  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </>
  );
}
