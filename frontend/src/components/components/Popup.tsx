import { Link } from "react-router-dom";

import { RefObject } from "react";

interface PopupProps {
  popupRef: RefObject<HTMLDivElement | null>;
  setPopup: (value: boolean) => void;
}

function Popup({ popupRef, setPopup }: PopupProps) {
  return (
    <div
      className="bg-purple-100 rounded-md p-4 invisible z-50 absolute top-20 right-50"
      ref={popupRef}
    >
      <div className="flex justify-between gap-4 w-full">
        <div className="mb-4 text-gray-800 text-sm">
          {" "}
          To get started, you need to login
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setPopup(false);
          }}
        >
          <i className="ri-close-fill"></i>
        </div>
      </div>
      <Link
        to="/login"
        className="border-[1px] border-gray-400 p-1 hover:text-blue-600 rounded-md flex items-center justify-center"
      >
        Log in
      </Link>
    </div>
  );
}

export default Popup;
