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
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "ส่ง​ SMS",
    url: "/upload",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

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
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <House />
                  <h1>Home</h1>
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

                    <h1>ส่ง SMS</h1>
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
                  <h1>สมุดโทรศัพท์</h1>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <FileSearch />
                  <h1>รายงานการใช้งาน</h1>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Cog />
                  <h1>ตั้งค่าบัญชีผู้ใช้</h1>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <NotebookTabs />
                  <h1>ออกจากระบบ</h1>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarMenu>
        </SidebarGroup>
        {/* <SidebarGroup>
          <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    <h1>Button</h1>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup> */}
      </SidebarContent>
    </Sidebar>
  );
}
