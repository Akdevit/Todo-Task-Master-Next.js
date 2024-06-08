"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import Tlogo from "../images/tlogo.png";
const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [bcack, setBack] = useState(true);

  const profileData = {
    name: name,
    profileImage: profileImage,
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveprofile = () => {
    if (!profileImage || !name) {
      toast.error("Fill All section", {
        icon: <Image src={Tlogo} alt="icon" />,
      });
    } else {
      localStorage.setItem("Todoprofile", JSON.stringify(profileData));
      toast.success("Profile Create successful!", {
        icon: <Image src={Tlogo} alt="icon" />,
      });
      setBack(false);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-gray-200">
      <div className=" p-4 w-[95%] sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] h-auto sm:h-auto md:h-auto lg:h-[60%] xl:h-[60%] bg-white rounded-md flex flex-col gap-7 ">
        <h1 className="text-center p-2">Create Profile</h1>
        <div className="w-full h-auto flex justify-around items-center flex-col ">
          <label htmlFor="file">
            <div className="w-[150px] h-[150px] rounded-full bg-gray-200 cursor-pointer">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                  width={100}
                  height={100}
                />
              ) : (
                <div className="flex justify-center items-center h-full">
                  <span>Upload Image</span>
                </div>
              )}
            </div>
          </label>
        </div>

        <div className="w-full h-auto flex justify-center items-center flex-col gap-3">
          <p>Enter Your Full Name</p>
          <input
            className="w-[300px] h-[45px] border rounded-md outline-0 p-3"
            type="text"
            placeholder="Enter Your Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="w-full h-auto flex gap-4 justify-center items-center">
          {bcack ? (
            <>
              <button
                className="w-[100px] h-[40px] bg-sky-700 rounded-md border-none text-white"
                onClick={() => saveprofile()}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <Link href="/dashboard">
                <button className="w-[100px] h-[40px] bg-gray-300 border rounded-md border-none">
                  back
                </button>
              </Link>
            </>
          )}
        </div>
        <input
          id="file"
          type="file"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default Profile;
