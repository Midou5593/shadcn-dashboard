"use client"
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ThemeToggle from "./ThemeToggle";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";


const Navbar = () => {
  
  return (
    <nav className="flex justify-between items-center p-4 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* LEFT SIDE */}
      <SidebarTrigger/>
      {/* <Button variant='outline' onClick={toggleSidebar}>Custom Button</Button> */}
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
       
        {/* Theme Toggle Menu */}
        <ThemeToggle />
        {/* User Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://yt3.ggpht.com/yti/ANjgQV_ASH2QASgIE3Vc5Nn4-Ap8TPBZ4goS_N38LqVloeg=s88-c-k-c0x00ffffff-no-rj-mo" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
             <User className="h-[1.2rem] w-[1.2rem] mr-2"/>
             Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2  "/>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
            <LogOut className="h-[1.2rem] w-[1.2rem] mr-2"/>
            Logout
            </DropdownMenuItem>
           
          </DropdownMenuContent>
        </DropdownMenu>
       
      </div>
    </nav>
  );
};

export default Navbar;
