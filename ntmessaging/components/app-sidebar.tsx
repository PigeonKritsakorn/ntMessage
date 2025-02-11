"use client";
import { useState } from "react";
import {
  Calendar,
  Cog,
  FileSearch,
  Home,
  House,
  Inbox,
  NotebookTabs,
  Search,
  Send,
  Settings,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Sidebar collapsible="icon" inert={isCollapsed ? true : undefined}>
      <SidebarHeader>
        <Image
          src={"/nt_messaging_logo.jpg"}
          alt="NT Messaging"
          width={200}
          height={200}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <House />
                  <h1 className="text-lg">Home</h1>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                    {/* <FontAwesomeIcon icon="fa-regular fa-paper-plane" /> */}
                    <Send />

                    <h1 className="text-lg">ส่ง SMS</h1>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <h1>SMS</h1>
                      </SidebarMenuButton>
                      <SidebarMenuButton>
                        <h1>SMS จากไฟล์</h1>
                      </SidebarMenuButton>
                      <SidebarMenuButton>
                        <h1>SMS แนบลิ้งก์</h1>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <NotebookTabs />
                  <h1 className="text-lg">สมุดโทรศัพท์</h1>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <FileSearch />
                  <h1 className="text-lg">รายงานการใช้งาน</h1>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Cog />
                  <h1 className="text-lg">ตั้งค่าบัญชีผู้ใช้</h1>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <NotebookTabs />
              <h1>ออกจากระบบ</h1>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
