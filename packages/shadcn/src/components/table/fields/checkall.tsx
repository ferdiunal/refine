import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { BaseRecord, HttpError } from "@refinedev/core";
import { UseTableReturnType } from "@refinedev/react-table";
import {
    Button,
    Checkbox,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../../ui";

export const CheckAll = ({
    table,
}: {
    table: UseTableReturnType<BaseRecord, HttpError>;
}) => {
    return (
        <>
            <Checkbox
                checked={
                    table.getIsSomeRowsSelected()
                        ? "indeterminate"
                        : table.getIsAllPageRowsSelected()
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                className="translate-y-[2px]"
                aria-label="Select all"
            />
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        disabled={
                            !(
                                table.getIsSomeRowsSelected() ||
                                table.getIsAllPageRowsSelected()
                            )
                        }
                        size={"icon"}
                        variant={"ghost"}
                        className="px-0 w-5"
                    >
                        <DotsVerticalIcon className="w-4 h-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-full max-w-full sm:w-[200px] p-0"
                    align="start"
                >
                    <Command>
                        <CommandEmpty>No found.</CommandEmpty>
                        <CommandGroup heading="Bulk Actions">
                            <CommandItem>
                                Delete Selected (
                                {table.getSelectedRowModel().rows.length}) Row
                                {table.getSelectedRowModel().rows.length > 1
                                    ? "s"
                                    : ""}
                            </CommandItem>
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    );
};
