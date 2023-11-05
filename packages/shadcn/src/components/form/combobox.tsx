"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Command as CommandPrimitive } from "cmdk";

import { BaseOption, UseSelectReturnType } from "@refinedev/core";
import {
    ComponentPropsWithoutRef,
    forwardRef,
    useMemo,
    useState,
    type ElementRef,
} from "react";
import { cn } from "../../lib/utils";
import {
    Button,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    FormControl,
    Popover,
    PopoverContent,
    PopoverTrigger,
    ScrollArea,
} from "../../ui";

type ComboboxProps = Omit<
    ComponentPropsWithoutRef<typeof CommandPrimitive>,
    "onChange|onValueChange|value"
> &
    UseSelectReturnType<any, BaseOption> & {
        placeholder?: string;
        emptyMessage?: string;
        onChange?: (value: string | number) => void;
        value?: string | number;
    };

export const Combobox = forwardRef<
    ElementRef<typeof CommandPrimitive.Input>,
    Omit<ComboboxProps, "ref">
>(({ ...props }, ref) => {
    const [open, setOpen] = useState(false);

    const value = props.value?.id ?? props.value;

    console.log(value);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            "w-full sm:w-[250px] flex justify-between",
                            !value && "text-muted-foreground",
                        )}
                    >
                        {value
                            ? props.options?.find(
                                  (option) => option.value === value,
                              )?.label
                            : props.placeholder ?? "Select"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full max-w-full sm:w-[250px] p-0">
                <Command ref={ref}>
                    <CommandInput
                        placeholder={props.placeholder ?? "Search..."}
                        className="h-9"
                    />
                    <CommandEmpty>
                        {props.emptyMessage ?? "No found."}
                    </CommandEmpty>
                    <CommandGroup>
                        <ScrollArea className="max-h-52 overflow-y-auto">
                            {props.options?.map((option) => (
                                <CommandItem
                                    value={option.label}
                                    key={option.value}
                                    onSelect={() => {
                                        props.onChange?.(option.value);
                                        setOpen(false);
                                    }}
                                >
                                    {option.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            option.value === value
                                                ? "opacity-100"
                                                : "opacity-0",
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </ScrollArea>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
});

Combobox.displayName = "Combobox";
