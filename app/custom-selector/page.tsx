"use client";

import { Select, SelectItem } from "@heroui/select";
import { useState } from "react";

export const every = [
  { key: "every", label: "모든 타입" },
  { key: "Legacy", label: "Legacy" },
  { key: "Version 1", label: "Version 1" },
  { key: "Version 2", label: "Version 2" },
  { key: "Version 3", label: "Version 3" },
];

function CustomSelector() {
  const [isOpen, setIsOpen] = useState(false);

  const triggerRadius = isOpen ? "rounded-t-md rounded-b-none" : "rounded-md";
  const listItemHeight = "min-h-12";
  return (
    <div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-4">
        <Select
          classNames={{
            trigger: [
              "border-2",
              listItemHeight,
              triggerRadius,
              "data-[open=true]:border-codeit_purple",
              "data-[focus=true]:border-codeit_purple",
              "data-[hover=true]:border-codeit_purple",
            ],
          }}
          label="모든 타입"
          onOpenChange={(open) => setIsOpen(open)}
        >
          {every.map((every) => (
            <SelectItem
              classNames={{
                trigger: [listItemHeight, triggerRadius],
              }}
              key={every.key}
            >
              {every.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default CustomSelector;
