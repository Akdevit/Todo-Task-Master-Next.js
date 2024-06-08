"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import UserImg from "../images/user.png";
import Link from "next/link";
const DashboardUser = () => {
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
      <div className="w-[100%] h-[300px] bg-[#FFE4C9] flex flex-col items-center gap-3">
        <h1 className="text-center text-5xl pt-11 font-mono">DashBoard !</h1>
        <Link href="/Profile">
          {" "}
          <button className="w-[100px] h-[30px] rounded-md border border-black">
            Edit Profile
          </button>
        </Link>
      </div>
      <div className="w-[100%] h-auto  -mt-32 flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full bg-white flex justify-center items-center">
          <div className="w-[130px] h-[130px] rounded-full bg-gray-200 overflow-hidden">
            {profileData ? (
              <>
                {" "}
                <Image
                  src={profileData?.profileImage}
                  alt="user.png"
                  width={100}
                  height={100}
                  className="w-full h-full rounded-full object-cover"
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
                  className="w-full h-full rounded-full object-cover"
                />
              </>
            )}
          </div>
        </div>
        <p className="font-sans">{profileData?.name || "Welcome user !"}</p>
      </div>
    </>
  );
};

export default DashboardUser;
