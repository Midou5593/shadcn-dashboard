import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import CardList from "@/components/CardList";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BadgeCheck, Candy, Citrus, Pencil, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";

const SingleUserPage = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* Left Side */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* User Badges Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className=" cursor-pointer rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 hover:bg-blue-500/50 transition-all duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className=" font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className=" cursor-pointer rounded-full bg-green-500/30 border-1 border-green-500/50 p-2 hover:bg-green-500/50 transition-all duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className=" font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin user have access to all features and can manage the
                    system.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className=" cursor-pointer rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2 hover:bg-yellow-500/50 transition-all duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className=" font-bold mb-2">Awarded User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions to the
                    system.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className=" cursor-pointer rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2 hover:bg-orange-500/50 transition-all duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className=" font-bold mb-2">Popular User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* Info User Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">User Information</h1>

              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={50} className="w-full" />
              </div>
              <div className="flex items-center  justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-muted-foreground font-bold">
                    Username
                  </span>
                  <span className="text-sm font-medium">John Doe</span>
                </div>
                <Button variant="outline" size="icon">
                  <Pencil size={16} />
                </Button>
              </div>
              <div className="flex items-center  justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-muted-foreground font-bold">
                    Email
                  </span>
                  <span className="text-sm font-medium">
                    john.doe@example.com
                  </span>
                </div>
                <Button variant="outline" size="icon">
                  <Pencil size={16} />
                </Button>
              </div>
              <div className="flex items-center  justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-muted-foreground font-bold">
                    Phone
                  </span>
                  <span className="text-sm font-medium">+123 456 7890</span>
                </div>
                <Button variant="outline" size="icon">
                  <Pencil size={16} />
                </Button>
              </div>
              <div className="flex items-center  justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-muted-foreground font-bold">
                    Location
                  </span>
                  <span className="text-sm font-medium">New York, USA</span>
                </div>
                <Button variant="outline" size="icon">
                  <Pencil size={16} />
                </Button>
              </div>
              <div className="flex items-center  justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-muted-foreground font-bold">
                    Role
                  </span>
                  <Badge>Admin</Badge>
                </div>
                <Button variant="outline" size="icon">
                  <Pencil size={16} />
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>
          {/* Card List Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* User Card Container */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://yt3.ggpht.com/yti/ANjgQV_ASH2QASgIE3Vc5Nn4-Ap8TPBZ4goS_N38LqVloeg=s88-c-k-c0x00ffffff-no-rj-mo" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground ">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Rerum ex a omnis repellendus odio, est optio excepturi quas
                accusamus aperiam eveniet voluptates, minus numquam, facere
                 nemo minima nam nobis assumenda.
            </p>
          </div>
          {/* Chart Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
