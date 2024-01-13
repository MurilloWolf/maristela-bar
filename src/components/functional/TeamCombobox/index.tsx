import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command } from "@/components/ui";
import { Popover } from "@/components/ui";

const teamOptions = [
  { label: "Team 1", value: "team1" },
  { label: "Team 2", value: "team2" },
  { label: "Team 3", value: "team3" },
  { label: "Team 4", value: "team4" },
  { label: "Team 5", value: "team5" },
];

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export default function TeamCombobox(props: Props) {
  const { value, setValue } = props;
  const [open, setOpen] = useState(false);

  return (
    <Popover.Popover open={open} onOpenChange={setOpen}>
      <Popover.PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? teamOptions.find((team) => team.value === value)?.label
            : "Selecione uma equipe..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </Popover.PopoverTrigger>
      <Popover.PopoverContent className="w-[200px] p-0">
        <Command.Command>
          <Command.CommandInput
            placeholder="Buscar equipe..."
            className="h-9"
          />
          <Command.CommandEmpty>No framework found.</Command.CommandEmpty>
          <Command.CommandGroup>
            {teamOptions.map((team) => (
              <Command.CommandItem
                key={team.value}
                value={team.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {team.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === team.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </Command.CommandItem>
            ))}
          </Command.CommandGroup>
        </Command.Command>
      </Popover.PopoverContent>
    </Popover.Popover>
  );
}
