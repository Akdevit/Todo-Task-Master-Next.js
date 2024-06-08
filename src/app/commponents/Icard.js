"use client";
import React, { useState, useEffect } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeTodo } from "../store/features/TodoSlice";
import { toast } from "react-toastify";
import Image from "next/image";
import Tlogo from "../images/tlogo.png";

const Icard = ({ Priority, index, duedate, text, openmodal }) => {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();
  const [color] = useState(generateRandomColor());
  const [deleteD, setDeleteD] = useState("");
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  /* delete items */
  const Deletetodo = () => {
    if (deleteD <= 0 || done) {
      dispatch(removeTodo(index));
      toast.success("Todo Delete successful!", {
        icon: <Image src={Tlogo} alt="icon" />,
      });
    } else {
      toast.error("your work has not done !", {
        icon: <Image src={Tlogo} alt="icon" />,
      });
    }
  };
  /* work done */

  const DoneTodo = () => {
    if (done) {
      setDone(false);
    } else {
      setDone(true);
      toast.success("Congratulations, your task is complete! Well done!", {
        icon: <Image src={Tlogo} alt="icon" />,
      });
    }
  };

  /* due date  */

  useEffect(() => {
    const interval = setInterval(() => {
      const destination = new Date(duedate).getTime();
      const time = new Date().getTime();
      const deff = destination - time;
      setDeleteD(deff);

      if (deff <= 0) {
        clearInterval(interval); // Stop the countdown when due date is reached
        toast.error("Todo due date is reached!", {
          icon: <Image src={Tlogo} alt="icon" />,
        });
        setDone(true)
      } else {
        const days = Math.floor(deff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (deff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((deff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((deff % (1000 * 60)) / 1000);

        setDay(days);
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [duedate]);

  function generateRandomColor() {
    const colors = [
      "#FFEC9E",
      "#97E7E1",
      "#FEC7B4",
      "#D2D180",
      "#C3ACD0",
      "#D7C0AE",
      "#FFD966",
      "#B8F1B0",
      "#99F3BD",
      "#ABCECF",
      "#DBA979",
      "#FFC470",
      "#4793AF",
      "#C6EBC5",
      "#F9E897",
      "#F5E8DD",
      "#F1EF99",
      "#A3C9AA",
      "#51829B",
      "#D2E3C8",
      "#FECDA6",
      "#FCE09B",
      "#E2C799",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const openmodalEditbtn = (id) => {
    openmodal(id);
  };
  return (
    <>
      {/* card */}
      <div
        className="w-[300px] h-[370px]  flex"
        key={index}
        style={
          done
            ? { backgroundColor: "rgb(204, 204, 204)" }
            : { backgroundColor: color }
        }
      >
        {/* inside features to card */}
        <div className="w-[12%] h-[370px]  flex flex-col gap-1 items-center">
          {/* actions */}
          <div className="w-[30px] h-[30px]  rounded-full flex justify-center items-center cursor-pointer mt-1">
            <IoCheckmarkDoneSharp
              title="Done"
              className={done ? "text-blue-800" : null}
              onClick={() => DoneTodo()}
            />
          </div>
          <div className="w-[30px] h-[30px]  rounded-full flex justify-center items-center cursor-pointer mt-1">
            <FaEdit
              title="Edit"
              className={done ? "text-[#AEAEAE]" : ""}
              onClick={() => {
                done ? "" : openmodalEditbtn(index);
              }}
            />
          </div>
          <div className="w-[30px] h-[30px]  rounded-full flex justify-center items-center cursor-pointer">
            <MdDeleteForever
              title="Delete"
              className="text-xl hover:text-red-500"
              onClick={() => Deletetodo()}
            />
          </div>
        </div>
        {/* inside text */}
        <div className="w-[88%] h-[370px] ">
          {/* information */}
          <div className="w-[100%] h-[25px]  flex justify-between pl-3 pr-3 items-center">
            <p className={done ? "Priority" : "text-[12px] "}>
              {done ? "00" : day}:{done ? "00" : hour}:{done ? "00" : minute}:
              {done ? "00" : second}
            </p>
            <p className={done ? "Priority" : "text-[12px] "}>{Priority}</p>
          </div>
          <div className="w-[100%] h-[345px] ">
            {/* task description */}
            <p className={done ? "strikethrough" : "p-2 text-[13px]"}>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icard;
