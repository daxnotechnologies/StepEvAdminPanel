import React, { useState, useRef, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function Dropdown() {
  const ref = useRef();
  const [open, setopen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        setopen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);
  return (
    <>
      <div ref={ref}>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownTop"
          data-dropdown-placement="top"
          class=""
          type="button"
          onClick={() => setopen(oldState => !oldState)}
        >
          <MoreVertIcon/>
        </button>

       { open && <div
          id="dropdownTop"
          class="z-10 w-44 absolute  bg-black rounded divide-y divide-gray-100 "
          data-popper-reference-hidden=""
          data-popper-escaped=""
          data-popper-placement="top"
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconButton"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-4 border-b border-gray-500"
              >
               Delete User
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 border-b border-gray-500 mb-5"
              >
                Additional Option
              </a>
            </li>
          </ul>
        </div>}
      </div>
    </>
  );
}
