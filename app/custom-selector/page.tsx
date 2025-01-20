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
        <Select className="max-w-xs" label="Select an animal">
          {every.map((every) => (
            <SelectItem key={every.key}>{every.label}</SelectItem>
          ))}
        </Select>
        <Select
          className="max-w-xs"
          label="Favorite Animal"
          placeholder="Select an animal"
        >
          {every.map((every) => (
            <SelectItem key={every.key}>{every.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default CustomSelector;
