"use client";
import { useState } from "react";
import Image from "next/image";
import Tlogo from "../images/tlogo.png";
// import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import Calendar from "react-calendar";
import { SlCalender } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/features/TodoSlice";
import { toast } from "react-toastify";
const Homehero = () => {
  const [showcalender, setShowcalender] = useState(false);
  const [inputvalue, setInputvalue] = useState("");
  const [date, onChange] = useState(new Date());
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();
  const duedate = date.toString();
  const valuestate = { inputvalue, duedate, priority };
  /* click button add todo */
  const AddTodos = () => {
    const maxword = 90;
    const inputwords = inputvalue.split(/\s+/);

    if (!inputvalue || !date || !priority) {
      toast.error("please enter all details", {
        icon: <Image src={Tlogo} alt="icon" />,
      });
    } else if (inputwords.length > maxword) {
      toast.error("Allow only 90 words", {
        icon: <Image src={Tlogo} alt="icon" />,
      });
    } else {
      dispatch(addTodo(valuestate));
      setInputvalue("");
      onChange("");
      document.getElementById("input").value = "";
      toast.success("Add Todo successfull !", {
        icon: <Image src={Tlogo} alt="icon" />,
      });
    }
  };
  const setduedatecalender = () => {
    setShowcalender(false);
  };

  const dueCalender = () => {
    setShowcalender(true);
  };
  return (
    <>
      <div className="w-[100%] xl:h-72 h-[50vh]  mt-2 flex flex-col  justify-around items-center ">
        <div className="w-[95%] h-24 md:w-[95%] lg:w-[95%] sm:w-[95%] xl:w-[80%]">
          <h1 className="text-center xl:text-4xl text-xl md:text-4xl sm:text-3xl font-roboto font-semibold text-gray-700">
            Transform tasks into triumphs with{" "}
            <span className="textgradient font-extrabold">TaskMaster.</span>{" "}
            Empower your workflow, amplify your impact, and unlock boundless
            productivity.
          </h1>
        </div>
        <div className="w-[95%] lg:w-[80%] xl:w-[70%] h-auto xl:h-20 lg:h-20 md:h-20 sm:h-20 p-2 bg-gray-200 rounded-md flex flex-col sm:flex-row xl:flex-row gap-4 justify-around items-center">
          {/* user text */}
          <div className="xl:w-[750px] w-[100%] h-[50px] flex justify-center gap-5 items-center p-2 lg:p-4 md:p-4 sm:p-4 bg-white rounded">
            <input
              className="xl:w-[450px] w-full h-[50px]  outline-none"
              type="text"
              placeholder="Enter your To Do"
              id="input"
              onChange={(e) => setInputvalue(e.target.value)}
            />
            {/* chartgpt */}
            {/* <div className=" flex justify-center items-center cursor-pointer delay-75">
              <Image
                className="h-[30px] w-[50px]"
                src={Tlogo}
                alt="task_master.png"
              />
            </div> */}
            {/* calender */}
            <div
              className="w-[30px] h-[30px]  rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => dueCalender()}
            >
              <SlCalender title="Due date" className="w-[20px] h-[20px]" />
            </div>
            {/* status */}
            <div className="w-[100px] h-[50px] flex justify-center items-center rounded bg-white ">
              <select
                className="xl:w-[120px] lg:w-[120px] md:w-[120px] sm:w-[120px] w-[100px] h-[30px]  outline-none border rounded-md p-1 pr-1"
                onChange={(e) => setPriority(e.target.value)}
              >
                <option className="w-[500px]">Priority</option>
                <option value="High">High </option>
                <option value="Medium">Medium </option>
                <option value="Low">Low </option>
                <option value="Critical">Critical </option>
                <option value="Normal">Normal </option>
                <option value="Emergency">Emergency </option>
                <option value="ASAP">ASAP </option>
                <option value="Deferred">Deferred </option>
              </select>
            </div>
          </div>

          <button
            className="xl:w-[200px] xl:h-[50px] lg:w-[200px] lg:h-[50px] md:w-[200px] md:h-[50px] sm:w-[200px] sm:h-[50px] w-full h-[50px] rounded bg-white textgradientbtn text-white font-bold "
            onClick={() => AddTodos()}
          >
            Add
          </button>
        </div>
      </div>
      {/* set calender */}
      {showcalender && (
        <div className="w-[100%] h-[100vh] popupbackgound z-50 fixed top-0 flex justify-center items-center">
          <div className="w-[80%] xl:w-[35%] lg:w-[40%] md:w-[40%] sm:w-[60%] h-auto pb-5 bg-white rounded-sm">
            <div className="w-[100%] h-auto flex justify-end items-center p-3">
              <RxCross2
                className="text-2xl font-bold cursor-pointer hover:rotate-90 duration-75 hover:text-red-500"
                onClick={() => setShowcalender(false)}
              />
            </div>
            {/* add calender */}
            <div className="w-[100%] h-auto flex flex-col gap-4  items-center">
              <Calendar
                className="border-none"
                onChange={onChange}
                values={date}
              />

              <div className="w-[100%] h-auto flex justify-end items-center pr-7">
                <button
                  className="w-[100px] h-[40px] rounded-md bg-[#FFD966] "
                  onClick={() => setduedatecalender()}
                >
                  Set
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homehero;

/* 1. *High Priority*: Tasks that are urgent and require immediate attention.
2. *Medium Priority*: Tasks that are important but not as urgent as high priority tasks.
3. *Low Priority*: Tasks that are less urgent and can be addressed after high and medium priority tasks.
4. *Critical Priority*: Tasks that are crucial to the success of a project or have significant consequences if not completed on time.
5. *Normal Priority*: Tasks that are of average importance and urgency.
6. *Emergency Priority*: Tasks that are unexpected and require immediate action to resolve critical issues or emergencies.
7. *ASAP Priority*: Tasks that need to be completed as soon as possible, but may not be as urgent as high priority tasks.
8. *Deferred Priority*: Tasks that can be postponed or deferred to a later time without immediate consequences.
 */
