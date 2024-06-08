"use client";
import React, { useEffect, useState } from "react";
import Icard from "./Icard";
import Image from "next/image";
import Tlogo from "../images/tlogo.png";
import "react-calendar/dist/Calendar.css";
import { updateTodoText } from "../store/features/TodoSlice";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Slide } from "react-awesome-reveal";

const Addcard = () => {
  const [editmodal, setEditmodal] = useState(false);
  const [updatestext, setUpdatestext] = useState("");
  const [getupdatetextid, setGetupdatetextid] = useState(null);
  const todos = useSelector((state) => state.Todo.todo);
  const [selectedPriority, setSelectedPriority] = useState("All");
  const [newlyAddedTaskIds, setNewlyAddedTaskIds] = useState([]);

  const dispatch = useDispatch();

  const Alltodos = todos.length === 0;

  // Function to handle priority change
  const handlePriorityChange = (e) => {
    setSelectedPriority(e.target.value);
  };

  // Function to filter tasks based on priority
  const filteredTodos = todos.filter((todo) => {
    if (selectedPriority === "All") {
      return true;
    } else {
      return todo.Priority === selectedPriority;
    }
  });

  // Reverse the order of filtered todos
  const reversedFilteredTodos = [...filteredTodos].reverse();

  // Function to open the edit modal
  const openmodal = (id) => {
    setEditmodal(true);
    setGetupdatetextid(id);
  };

  // Function to discard changes and close the modal
  const discard = () => {
    setEditmodal(false);
  };

  // Function to save edited text
  const saveedittext = () => {
    const maxLength = 90;
    const inputLength = updatestext.split(/\s+/);
    if (!updatestext) {
      toast.error("Please enter update text", {
        icon: <Image src={Tlogo} alt="icon" />,
      });
    } else if (inputLength.length > maxLength) {
      toast.error("Allow only 90 words", {
        icon: <Image src={Tlogo} alt="icon" />,
      });
    } else {
      dispatch(updateTodoText({ getupdatetextid, updatestext }));
      setEditmodal(false);
      setUpdatestext("");
      toast.success("Text successfully updated!", {
        icon: <Image src={Tlogo} alt="icon" />,
      });
    }
  };

  // Function to add a new task and track its ID
  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setNewlyAddedTaskIds((prevIds) => [...prevIds, newTask.id]);
    // Assuming you have a dispatch action to add a new task
    dispatch(addNewTask(newTask));
  };

  useEffect(() => {
    // Clear newly added task IDs after a short delay to avoid re-animating on subsequent renders
    const timer = setTimeout(() => {
      setNewlyAddedTaskIds([]);
    }, 1000);
    return () => clearTimeout(timer);
  }, [newlyAddedTaskIds]);

  return (
    <>
      <div className="w-[100%] h-auto pb-7 flex flex-col  gap-9 items-center xl:mt-32 lg:mt-32  ">
        {/* Add filter */}
        <div className="w-[90%] h-auto flex gap-8">
          <div className="w-[100px] h-[50px] flex justify-center items-center rounded bg-white ">
            <select
              className="w-[120px] h-[30px] outline-none border rounded-md p-1 pr-1"
              onChange={handlePriorityChange}
              value={selectedPriority}
            >
              <option value="All">All</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
              <option value="Critical">Critical</option>
              <option value="Normal">Normal</option>
              <option value="Emergency">Emergency</option>
              <option value="ASAP">ASAP</option>
              <option value="Deferred">Deferred</option>
            </select>
          </div>
        </div>

        {/* Main card handle div */}
        {Alltodos ? (
          <>
            <h1 className="xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-3xl text-gray-300 font-bold font-mono">
              Add Your Todo{"'"}s
            </h1>
          </>
        ) : (
          <>
            <div className="w-[90%] h-auto cardgrid justify-center xl:justify-start lg:justify-start md:justify-center sm:justify-start sm:gap-[5px] xl:gap-[40px] lg:gap[30px] md:gap-[40px] ">
              {/* Map filtered todos in reversed order */}
              {reversedFilteredTodos.map((res) => (
                <Slide
                  key={res.id}
                  triggerOnce
                  direction="down"
                  duration={1000}
                  className={
                    newlyAddedTaskIds.includes(res.id) ? "animate" : ""
                  }
                >
                  <Icard
                    key={res.id}
                    duedate={res.date}
                    text={res.text}
                    Priority={res.Priority}
                    index={res.id}
                    openmodal={openmodal}
                  />
                </Slide>
              ))}
            </div>
          </>
        )}
      </div>
      {/* edit/update todo */}

      {editmodal ? (
        <>
          <div className="w-[100%] h-[100vh] popupbackgound z-50 fixed top-0 flex justify-center items-center">
            <div className="w-[95%] xl:w-[40%] lg:w-[40%] md:w-[70%] sm:w-[70%] h-[400px] pb-5 bg-white rounded-sm flex flex-col items-center">
              <h1 className="text-lg text-center pt-1">Update Todo</h1>

              <textarea
                className="border w-[90%] h-[300px] outline-0 p-2"
                placeholder="Enter new text here!"
                onChange={(e) => setUpdatestext(e.target.value)}
              ></textarea>
              <div className="w-[90%] h-auto flex gap-2 justify-end items-center mt-3">
                <button
                  className="bg-[#f8d1d1] w-[100px] h-[40px] rounded-sm"
                  onClick={discard}
                >
                  Discard
                </button>
                <button
                  className="bg-[#C6EBC5] w-[100px] h-[40px] rounded-sm"
                  onClick={saveedittext}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Addcard;
