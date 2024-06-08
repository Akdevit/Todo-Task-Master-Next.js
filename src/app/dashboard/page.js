import React from "react";
import DashboardUser from "../commponents/DashboardUser";
import Dashboardalltodos from "../commponents/Dashboardalltodos";
import DashboardGraf from "../commponents/DashboardGraf";
import Nav from "../commponents/Nav";
const Page =  () => {

  return (
    <>
    <Nav/>
      <DashboardUser />
      <DashboardGraf />
      <Dashboardalltodos />
    </>
  );
};

export default Page;
