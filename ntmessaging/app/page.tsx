import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { PaginationDemo } from "@/components/paginationNav";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Wallet } from "lucide-react";

function Home() {
  return (
    <div className="w-screen h-screen p-5">
      <div className="flex flex-col gap-4">
        <h1>สวัสดี, คุณ กฤษกร </h1>
        <div className="flex flex-row justify-start items-center gap-10">
          <Card className="flex justify-center items-center w-[30%] h-[100px] border-l-amber-300 border-l-8 ">
            <div className="flex flex-row justify-center items-center gap-4">
              <User />
              <h1>ชื่อผู้ใช้ : กฤษกร</h1>
            </div>
          </Card>
          <Card className="flex justify-center items-center w-[30%] h-[100px] border-l-amber-300 border-l-8">
            <div className="flex flex-row justify-center items-center gap-4">
              <Wallet />
              <h1>เครดิตทั้งหมด : 8</h1>
            </div>
          </Card>
        </div>
      </div>
      <div></div>
      <AppSidebar />
      {/* <div className="flex flex-col justify-center items-center w-screen">
        <h1>สวัสดี</h1>
        <PaginationDemo />
      </div> */}
    </div>
  );
}

export default Home;
