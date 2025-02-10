import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { PaginationDemo } from "@/components/paginationNav";

function Home() {
  return (
    <div>
      <AppSidebar />
      <div className="flex flex-col justify-center items-center w-screen">
        <h1>Hello</h1>
        <PaginationDemo />
      </div>
    </div>
  );
}

export default Home;
