"use client";
import React from "react";
import { useSelector } from "react-redux";

const Dashboardalltodos = () => {
  const todos = useSelector((state) => state.Todo.todo);
  const filterhigh = todos.filter((todo) => {
    if (todo.Priority === "High") {
      return true;
    }
  });
  const filterMedium = todos.filter((todo) => {
    if (todo.Priority === "Medium") {
      return true;
    }
  });
  const filterLow = todos.filter((todo) => {
    if (todo.Priority === "Low") {
      return true;
    }
  });
  const filterCritical = todos.filter((todo) => {
    if (todo.Priority === "Critical") {
      return true;
    }
  });
  const filterNormal = todos.filter((todo) => {
    if (todo.Priority === "Normal") {
      return true;
    }
  });
  const filterEmergency = todos.filter((todo) => {
    if (todo.Priority === "Emergency") {
      return true;
    }
  });
  const filterASAP = todos.filter((todo) => {
    if (todo.Priority === "ASAP") {
      return true;
    }
  });
  const filterDeferred = todos.filter((todo) => {
    if (todo.Priority === "Deferred") {
      return true;
    }
  });

//   console.log(todos, filterMedium.length);
  return (
    <>
      <div className="w-[100%] h-[160px] mt-16 dashboardtodocard flex justify-around gap-3 pb-5 pl-5 pr-5">
        <div className="w-[150px] h-[150px] bg-[#E8EFCF] rounded-lg  flex flex-col justify-center gap-3 items-center">
          <h2 className="text-xl">All</h2>
          <h1 className="text-4xl">{todos?.length}</h1>
        </div>
        <div className="w-[150px] h-[150px] bg-[#E8EFCF] rounded-lg  flex flex-col justify-center gap-3 items-center">
          <h2 className="text-xl">High</h2>
          <h1 className="text-4xl">{filterhigh?.length}</h1>
        </div>
        <div className="w-[150px] h-[150px] bg-[#E8EFCF] rounded-lg  flex flex-col justify-center gap-3 items-center">
          <h2 className="text-xl">Medium</h2>
          <h1 className="text-4xl">{filterMedium?.length}</h1>
        </div>
        <div className="w-[150px] h-[150px] bg-[#E8EFCF] rounded-lg  flex flex-col justify-center gap-3 items-center">
          <h2 className="text-xl">Low</h2>
          <h1 className="text-4xl">{filterLow?.length}</h1>
        </div>
        <div className="w-[150px] h-[150px] bg-[#E8EFCF] rounded-lg  flex flex-col justify-center gap-3 items-center">
          <h2 className="text-xl">Critical</h2>
          <h1 className="text-4xl">{filterCritical?.length}</h1>
        </div>
        <div className="w-[150px] h-[150px] bg-[#E8EFCF] rounded-lg  flex flex-col justify-center gap-3 items-center">
          <h2 className="text-xl">Normal</h2>
          <h1 className="text-4xl">{filterNormal?.length}</h1>
        </div>
        <div className="w-[150px] h-[150px] bg-[#E8EFCF] rounded-lg  flex flex-col justify-center gap-3 items-center">
          <h2 className="text-xl">Emergency</h2>
          <h1 className="text-4xl">{filterEmergency?.length}</h1>
        </div>
        <div className="w-[150px] h-[150px] bg-[#E8EFCF] rounded-lg  flex flex-col justify-center gap-3 items-center">
          <h2 className="text-xl">ASAP</h2>
          <h1 className="text-4xl">{filterASAP?.length}</h1>
        </div>
        <div className="w-[150px] h-[150px] bg-[#E8EFCF] rounded-lg  flex flex-col justify-center gap-3 items-center">
          <h2 className="text-xl">Deferred</h2>
          <h1 className="text-4xl">{filterDeferred?.length}</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboardalltodos;
