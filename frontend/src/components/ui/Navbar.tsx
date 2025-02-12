import React from "react";
import logo from "../../assets/logo.png";
import NavigationLink from "./NavigationLink";
import Button from "./Button";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Popup from "./Popup";

function Navbar() {
  const [popup, setPopup] = useState(false);
  const popupRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popup) {
      gsap.to(popupRef.current, {
        visibility: "visible",
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(popupRef.current, {
        visibility: "hidden",
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [popup]);

  return (
    <>
      <Popup popupRef={popupRef} setPopup={setPopup} />
      <nav className=" w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <img src={logo} className="w-16 h-12 text-indigo-600" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-800">
                  Gaumitra
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8 transition-all">
              <NavigationLink href="#" text="Home" />
              <NavigationLink href="#features" text="Features" />
              <NavigationLink href="#how-it-works" text="How It Works" />
              <NavigationLink href="#footer" text="About Us" />
              <NavigationLink href="#footer" text="Contact" />
              <Button
                text="Get Started"
                size="md"
                variant="primary"
                onClick={() => setPopup(true)}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
