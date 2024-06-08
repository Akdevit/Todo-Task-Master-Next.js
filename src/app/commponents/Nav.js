"use client";
import Image from "next/image";
import Logo from "../images/logo.png";
import Link from "next/link";
import UserImg from "../images/user.png";
import { useEffect, useState } from "react";
const Nav = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("Todoprofile");
      if (storedData) {
        try {
          setProfileData(JSON.parse(storedData));
        } catch (error) {
          console.error("Failed to parse profile data:", error);
        }
      }
    }
  }, []);
  return (
    <>
      <div className="w-[100%] h-16 bg-gray-100 flex justify-between items-center p-4">
        <Link href="/">
          <div className="flex justify-center  items-center cursor-pointer">
            <Image className=" w-[200px] h-auto" src={Logo} alt="logo.png" />
          </div>
        </Link>
        <div className="flex items-center gap-3 justify-center  ">
          <div
            className="w-[50px] h-[50px] rounded-full  cursor-pointer "
            title="Dashboard "
          >
            <Link href="/dashboard">
              {profileData ? (
                <>
                  {" "}
                  <Image
                    src={profileData?.profileImage}
                    alt="user.png"
                    width={100}
                    height={100}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                </>
              ) : (
                <>
                  {" "}
                  <Image
                    src={UserImg}
                    alt="user.png"
                    width={100}
                    height={100}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                </>
              )}
            </Link>
          </div>
          <p className="hidden sm:block md:block lg:block xl:block ">{profileData?.name || "Dashboard"}</p>
        </div>
      </div>
    </>
  );
};

export default Nav;
