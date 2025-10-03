"use client";

import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      {/* Calender */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon className="w-4 h-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            
          />
        </PopoverContent>
      </Popover>
      {/* Todo List */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/*  List of items */}
          <Card className="p-4 ">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/*  List of items */}
          <Card className="p-4 ">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/*  List of items */}
          <Card className="p-4 ">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/*  List of items */}
          <Card className="p-4 ">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/*  List of items */}
          <Card className="p-4 ">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/*  List of items */}
          <Card className="p-4 ">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/*  List of items */}
          <Card className="p-4 ">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/*  List of items */}
          <Card className="p-4 ">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/*  List of items */}
          <Card className="p-4 ">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
