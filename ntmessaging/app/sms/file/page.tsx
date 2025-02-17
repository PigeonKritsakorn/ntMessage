"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function sendfile() {
  return (
    <div className="w-[1000px] h-screen flex flex-col p-7 gap-4">
      <div className="flex flex-row gap-4 p-2">
        <Send />
        <h1>ส่ง SMS ด้วยการ upload file</h1>
      </div>
      <Card className="flex flex-col p-4 gap-4 w-2/3">
        <h1>อัปโหลดเบอร์โทรศัพท์จากไฟล์ Excel</h1>
        <h1>ดาวน์โหลดตัวอย่าง Excel</h1>
        <div>
          <h1>Sender Name</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex justify-start items-start "
              >
                <div>
                  <h1>Choose Sender Name</h1>
                </div>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                disabled
              >
                Activity Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Panel
              </DropdownMenuCheckboxItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col gap-2">
          <h1>เลือกไฟล์ที่จะ upload</h1>
          <div className="grid w-[100%] max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
        </div>
        <Button className="w-2/3">Upload</Button>
      </Card>
    </div>
  );
}

export default sendfile;
