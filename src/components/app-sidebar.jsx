import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Generate Banner with AI",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Schedule Post for Listing",
    url: "#",
    icon: Calendar,
  },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
  {
    title: "Edit Listing Details",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (

    <Sidebar  >
      <SidebarContent className='bg-black text-white'>
        <SidebarGroup >
          <SidebarGroupLabel className='text-white text-xl'>Application</SidebarGroupLabel>
          <br/>
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
      </SidebarContent>
    </Sidebar>

  )
}
