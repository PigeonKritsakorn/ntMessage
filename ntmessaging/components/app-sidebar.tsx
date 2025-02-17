"use client";
import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Cog,
  FileSearch,
  FileUp,
  Home,
  House,
  Inbox,
  Link2,
  LogOut,
  NotebookTabs,
  Search,
  Send,
  Settings,
  Signal,
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
import Link from "next/link";

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
                  <Link href={`/`} className="text-lg">
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                      {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                      {/* <FontAwesomeIcon icon="fa-regular fa-paper-plane" /> */}
                      <Send size={15} />
                      <h1 className="text-lg">ส่ง SMS</h1>
                    </div>
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Signal />
                        <Link href={`/sms`}>SMS</Link>
                      </SidebarMenuButton>
                      <SidebarMenuButton>
                        <FileUp />
                        <Link href={`/sms/file`}>SMS จากไฟล์</Link>
                      </SidebarMenuButton>
                      <SidebarMenuButton>
                        <Link2 />
                        <Link href={`/sms/link`}>SMS เเนบลิ้งค์</Link>
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
              <LogOut className="text-red-600" />
              <h1 className="text-lg text-red-600">ออกจากระบบ</h1>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
